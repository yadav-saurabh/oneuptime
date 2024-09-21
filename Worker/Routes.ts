// // Announcements.
// import "./Jobs/Announcement/SendNotificationToSubscribers";
// // Hard Delete
// import "./Jobs/HardDelete/HardDeleteItemsInDatabase";
// // Incidents
// import "./Jobs/Incident/SendNotificationToSubscribers";
// // Incident Owners
// import "./Jobs/IncidentOwners/SendCreatedResourceNotification";
// import "./Jobs/IncidentOwners/SendNotePostedNotification";
// import "./Jobs/IncidentOwners/SendOwnerAddedNotification";
// import "./Jobs/IncidentOwners/SendStateChangeNotification";
// // Incident Notes
// import "./Jobs/IncidentPublicNote/SendNotificationToSubscribers";
// import "./Jobs/IncidentStateTimeline/SendNotificationToSubscribers";
// import "./Jobs/IncomingRequestMonitor/CheckHeartbeat";
// import "./Jobs/MeteredPlan/ReportTelemetryMeteredPlan";
// // Monitor Metrics
// import "./Jobs/MonitorMetrics/MonitorMetricsByMinute";
// // Monitor Owners
// import "./Jobs/MonitorOwners/SendCreatedResourceNotification";
// import "./Jobs/MonitorOwners/SendOwnerAddedNotification";
// import "./Jobs/MonitorOwners/SendStatusChangeNotification";
// // On-Call Duty Policy Executions.
// import "./Jobs/OnCallDutyPolicyExecutionLog/ExecutePendingExecutions";
// import "./Jobs/OnCallDutyPolicyExecutionLog/TimeoutStuckExecutions";
// // Payments.
// import "./Jobs/PaymentProvider/CheckSubscriptionStatus";
// import "./Jobs/PaymentProvider/PopulatePlanNameInProject";
// import "./Jobs/PaymentProvider/UpdateTeamMembersIfNull";
// import "./Jobs/ScheduledMaintenance/ChangeStateToEnded";
// // Scheduled Event
// import "./Jobs/ScheduledMaintenance/ChangeStateToOngoing";
// import "./Jobs/ScheduledMaintenance/SendNotificationToSubscribers";
// import "./Jobs/ScheduledMaintenance/ScheduleRecurringEvents";
// import "./Jobs/ScheduledMaintenance/SendSubscriberRemindersOnEventScheduled";

// // Scheduled Event Owners
// import "./Jobs/ScheduledMaintenanceOwners/SendCreatedResourceNotification";
// import "./Jobs/ScheduledMaintenanceOwners/SendNotePostedNotification";
// import "./Jobs/ScheduledMaintenanceOwners/SendOwnerAddedNotification";
// import "./Jobs/ScheduledMaintenanceOwners/SendStateChangeNotification";

// // Scheduled Event Notes
// import "./Jobs/ScheduledMaintenancePublicNote/SendNotificationToSubscribers";
// import "./Jobs/ScheduledMaintenanceStateTimeline/SendNotificationToSubscribers";

// import "./Jobs/ServerMonitor/CheckOnlineStatus";

// // Certs Routers
// import "./Jobs/StatusPageCerts/StatusPageCerts";
// import "./Jobs/StatusPageOwners/SendAnnouncementCreatedNotification";
// // Status Page Owners
// import "./Jobs/StatusPageOwners/SendCreatedResourceNotification";
// import "./Jobs/StatusPageOwners/SendOwnerAddedNotification";
// // Status Page Reports
// import "./Jobs/StatusPage/SendReportsToSubscribers";
// // Telemetry Service
// import "./Jobs/TelemetryService/DeleteOldData";
// // User Notifications Log
// import "./Jobs/UserOnCallLog/ExecutePendingExecutions";
// import "./Jobs/UserOnCallLog/TimeoutStuckExecutions";
// import "./Jobs/Workflow/TimeoutJobs";

// // Probes
// import "./Jobs/Probe/SendOwnerAddedNotification";
// import "./Jobs/Probe/UpdateConnectionStatus";

// // Copilot Actions.
// import "./Jobs/CopilotActions/MoveThemBackToQueueIfProcessingForLongtime";

// // Telemetry Monitors.
// import "./Jobs/TelemetryMonitor/MonitorTelemetryMonitor";


import AnalyticsTableManagement from "./Utils/AnalyticsDatabase/TableManegement";
import RunDatabaseMigrations from "./Utils/DataMigration";
import JobDictionary from "./Utils/JobDictionary";
import { PromiseVoidFunction } from "Common/Types/FunctionTypes";
import Queue, { QueueJob, QueueName } from "Common/Server/Infrastructure/Queue";
import QueueWorker from "Common/Server/Infrastructure/QueueWorker";
import FeatureSet from "Common/Server/Types/FeatureSet";
import logger from "Common/Server/Utils/Logger";


import Express, { ExpressApplication } from "Common/Server/Utils/Express";
import ClusterKeyAuthorization from "Common/Server/Middleware/ClusterKeyAuthorization";

const app: ExpressApplication = Express.getExpressApp();

const WorkersFeatureSet: FeatureSet = {
  init: async (): Promise<void> => {
    try {

      // attach bull board to the app
      app.use(
        Queue.getInspectorRoute(),
        ClusterKeyAuthorization.isAuthorizedServiceMiddleware,
        Queue.getQueueInspectorRouter(),
      );


      // run async database migrations
      RunDatabaseMigrations().catch((err: Error) => {
        logger.error("Error running database migrations");
        logger.error(err);
      });

      // create tables in analytics database
      await AnalyticsTableManagement.createTables();

      // Job process.
      QueueWorker.getWorker(
        QueueName.Worker,
        async (job: QueueJob) => {
          const name: string = job.name;

          logger.debug("Running Job: " + name);

          const funcToRun: PromiseVoidFunction =
            JobDictionary.getJobFunction(name);

          // const timeoutInMs: number = JobDictionary.getTimeoutInMs(name);

          if (funcToRun) {
            funcToRun().catch((err: Error) => {
              logger.error("Error running job: " + name);
              logger.error(err);
            });
          }
        },
        { concurrency: 100 },
      );

      
    } catch (err) {
      logger.error("App Init Failed:");
      logger.error(err);
      throw err;
    }
  },
};

export default WorkersFeatureSet;
