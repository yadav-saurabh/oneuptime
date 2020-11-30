try {
    require('./monitorSla.test');
    require('./adminCredentials.test');
    require('./incidentCommunicationSla.test');
    require('./alert.test');
    require('./applicationLog.test');
    require('./applicationSecurity.test');
    require('./auditLogs.test');
    require('./component.test');
    require('./containerSecurity.test');
    require('./disableSignup.test');
    require('./dockerCredential.test');
    require('./emailAuthorization.test');
    require('./emailSmtp.test');
    require('./emailTemplate.test');
    require('./errorTracker.test');
    require('./feedback.test');
    require('./gitCredential.test');
    require('./globalConfig.test');
    require('./incident.test');
    require('./incidentAlerts.test');
    require('./incidentPriority.test');
    require('./incidentSettings.test');
    require('./invoice.test');
    require('./jwttoken.test');
    require('./lead.test');
    require('./monitor.test');
    require('./monitorCriteria.test');
    require('./notification.test');
    require('./probe.test');
    require('./project.test');
    require('./rateLimit.test');
    require('./reports.test');
    require('./resourceCategory.test');
    require('./schedule.test');
    require('./scheduledEvent.test');
    require('./scheduledEventNote.test');
    require('./smsTemplate.test');
    require('./sso.test');
    require('./statusPage.test');
    require('./stripe.test');
    require('./subscriber.test');
    require('./subscriberAlert.test');
    require('./team.test');
    require('./tutorial.test');
    require('./twilio.test');
    require('./user.test');
    require('./version.test');
    require('./webhook.test');
    require('./zapier.test');
} catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
    throw error;
}
