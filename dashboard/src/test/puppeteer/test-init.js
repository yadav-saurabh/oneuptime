var utils = require('./test-utils');

module.exports = { 
    /**
     * 
     * @param { ObjectConstructor } user 
     * @param { string } page 
     * @description Registers a new user.
     * @returns { void }
     */
    registerUser: async function (user, page){
        const { email, password } = user;

        await page.goto(utils.ACCOUNTS_URL + '/register', { waitUntil: 'networkidle2' });
        await page.waitForSelector('#email');
        await page.click('input[name=email]');
        await page.type('input[name=email]', email);
        await page.click('input[name=name]');
        await page.type('input[name=name]', name);
        await page.click('input[name=companyName]');
        await page.type('input[name=companyName]', utils.user.company.name);
        await page.click('input[name=companyPhoneNumber]');
        await page.type('input[name=companyPhoneNumber]', utils.user.phone);
        await page.click('input[name=password]');
        await page.type('input[name=password]', password);
        await page.click('input[name=confirmPassword]');
        await page.type('input[name=confirmPassword]', password);
        await page.click('button[type=submit]');
        await page.waitFor(2000);
        await page.waitForSelector('#cardName');
        await page.click('input[name=cardName]');
        await page.type('input[name=cardName]', utils.user.name);
        await page.click('input[name=cardNumber]');
        await page.type('input[name=cardNumber]', utils.cardNumber);
        await page.click('input[name=cvc]');
        await page.type('input[name=cvc]', utils.cvv);
        await page.click('input[name=expiry]');
        await page.type('input[name=expiry]', utils.expiryDate);
        await page.click('input[name=address1]');
        await page.type('input[name=address1]', utils.user.address.streetA);
        await page.click('input[name=address2]');
        await page.type('input[name=address2]', utils.user.address.streetB);
        await page.click('input[name=city]');
        await page.type('input[name=city]', utils.user.address.city);
        await page.click('input[name=state]');
        await page.type('input[name=state]', utils.user.address.state);
        await page.click('input[name=zipCode]');
        await page.type('input[name=zipCode]', utils.user.address.zipcode);
        await page.select('#country', utils.user.address.country);

        await page.click('button[type=submit]');
        await page.waitFor(25000);
    },
    loginUser: async function (user, page){
        const { email, password } = user;
        await page.goto(utils.ACCOUNTS_URL + '/login', { waitUntil: 'networkidle2' });
        await page.waitForSelector('#login-button');
        await page.click('input[name=email]');
        await page.type('input[name=email]', email);
        await page.click('input[name=password]');
        await page.type('input[name=password]', password);
        await page.click('button[type=submit]');
        await page.waitFor(5000);
    },
    addSchedule: async function (callSchedule, page){
        await page.waitForSelector('#callSchedules');
        await page.click('#callSchedules');
        await page.evaluate(() => {
            document.querySelector('.ActionIconParent').click();
        });
        page.waitForSelector('#name', { timeout: 2000 });
        await page.type('#name', callSchedule);
        await page.click('button.bs-Button:nth-child(2)');
        await page.waitFor(2000);
    },
    addSubProject: async function (subProjectName, page){
        const subProjectNameSelector = await page.$('#btnAddSubProjects');
        if(subProjectNameSelector){
            await page.waitForSelector('#btnAddSubProjects');
            await page.click('#btnAddSubProjects');
            await page.waitForSelector('#sub_project_name_0');
            await page.type('#sub_project_name_0', subProjectName);
            await page.click('#btnSaveSubproject');
        }else{
            await page.waitForSelector('#projectSettings');
            await page.click( '#projectSettings');
            await page.waitForSelector('#btnAddSubProjects');
            await page.click('#btnAddSubProjects');
            await page.waitForSelector('#sub_project_name_0');
            await page.type('#sub_project_name_0', subProjectName);
            await page.click('#btnSaveSubproject');
        }
        await page.waitFor(5000);
    },
    addUserToProject: async function (data, page){
        const {email, role, subProjectName} = data;
        await page.waitForSelector('#teamMembers');
        await page.click( '#teamMembers');
        await page.waitForSelector(`#btn_${subProjectName}`);
        await page.click(`#btn_${subProjectName}`);
        await page.waitForSelector(`#frm_${subProjectName}`);
        await page.click(`#emails_${subProjectName}`);
        await page.type(`#emails_${subProjectName}`, email);
        await page.click(`#${role}_${subProjectName}`);
        await page.click(`#btn_modal_${subProjectName}`);
        await page.waitFor(5000);
    },
    switchProject: async function (projectName, page){
        await page.reload({ waitUntil: 'networkidle2'});
        await page.waitForSelector('#AccountSwitcherId');
        await page.click('#AccountSwitcherId');
        await page.waitForSelector('#accountSwitcher');
        const element = await page.$(`#accountSwitcher > div[title="${projectName}"]`);
        await element.click();
        await page.waitFor(5000);
    },
    renameProject: async function (newProjectName, page){
        const projectNameSelector = await page.$('input[name=project_name');
        if(projectNameSelector){
            await this.clear('input[name=project_name]', page);
            await page.type('input[name=project_name]', newProjectName);
            await page.click('#btnCreateProject');
        }else{
            await page.waitForSelector('#projectSettings');
            await page.click( '#projectSettings');
            await page.waitForSelector('input[name=project_name]');
            await this.clear('input[name=project_name]', page);
            await page.type('input[name=project_name]', newProjectName);
            await page.click('#btnCreateProject');
        }
        await page.waitFor(5000);
    },
    clear: async function (selector, page) {
        const input = await page.$(selector);
        await input.click({ clickCount: 3 })
        await input.type('');
    },
    selectByText: async function (selector, text, page) {
        let elemHandler = await page.$(selector);
        if(elemHandler){
            let properties = await elemHandler.getProperties();
            for (const property of properties.values()) {
                const element = property.asElement();
                if (element){
                    let hText = await element.getProperty('text');
                    let textContent = await hText.jsonValue();
                    if(textContent===text){
                        let hValue = await element.getProperty('value');
                        let value = await hValue.jsonValue();
                        await page.select(selector, value);
                    }
                }
            }
        }
    },
    addMonitorToProject: async function (monitorName, projectName, page){
        await page.waitForSelector('#monitors');
        await page.click('#monitors');
        await page.waitForSelector('#frmNewMonitor');
        await page.click('input[id=name]');
        await page.type('input[id=name]', monitorName);
        await page.select('select[name=type_1000]','url');
        await this.selectByText('#subProjectId', projectName, page);
        await page.waitForSelector('#url');
        await page.click('#url');
        await page.type('#url', 'https://google.com');
        await page.click('button[type=submit]');
        await page.waitFor(5000);
    },
    addIncidentToProject: async function (monitorName, projectName, page){
        const createIncidentSelector = await page.$(`#btnCreateIncident_${projectName}`);
        if(createIncidentSelector){
            await page.waitForSelector(`#btnCreateIncident_${projectName}`);
            await page.click(`#btnCreateIncident_${projectName}`);
            await page.waitForSelector('#frmIncident');
            await this.selectByText('#monitorList', monitorName, page);
            await page.click('#createIncident');
            await page.waitFor(5000);
        }else{
            await page.waitForSelector('#monitors > div > span > ul > li > div > a');
            await page.click('#monitors > div > span > ul > li > div > a');
            await page.waitForSelector(`#btnCreateIncident_${projectName}`);
            await page.click(`#btnCreateIncident_${projectName}`);
            await page.waitForSelector('#frmIncident');
            await this.selectByText('#monitorList', monitorName, page);
            await page.click('#createIncident');
            await page.waitFor(5000);
        }
    },
    addStatusPageToProject: async function (statusPageName, projectName, page){
        const createStatusPageSelector = await page.$(`#btnCreateStatusPage_${projectName}`);
        if(createStatusPageSelector){
            await page.waitForSelector(`#btnCreateStatusPage_${projectName}`);
            await page.click(`#btnCreateStatusPage_${projectName}`);
            await page.waitForSelector('#btnCreateStatusPage');
            await page.type('#title', statusPageName);
            await page.click('#btnCreateStatusPage');
            await page.waitFor(5000);
        }else{
            await page.waitForSelector('#statusPages > a');
            await page.click('#statusPages > a');
            await page.waitForSelector(`#btnCreateStatusPage_${projectName}`);
            await page.click(`#btnCreateStatusPage_${projectName}`);
            await page.waitForSelector('#btnCreateStatusPage');
            await page.type('#title', statusPageName);
            await page.click('#btnCreateStatusPage');
            await page.waitFor(5000);
        }
    },
    addScheduleToProject: async function (scheduleName, projectName, page){
        const createStatusPageSelector = await page.$(`#btnCreateStatusPage_${projectName}`);
        if(createStatusPageSelector){
            await page.waitForSelector(`#btnCreateSchedule_${projectName}`);
            await page.click(`#btnCreateSchedule_${projectName}`);
            await page.waitForSelector('#btnCreateSchedule');
            await page.type('#name', scheduleName);
            await page.click('#btnCreateSchedule');
            await page.waitFor(5000);
        }else{
            await page.waitForSelector('#callSchedules > a');
            await page.click('#callSchedules > a');
            await page.waitForSelector(`#btnCreateSchedule_${projectName}`);
            await page.click(`#btnCreateSchedule_${projectName}`);
            await page.waitForSelector('#btnCreateSchedule');
            await page.type('#name', scheduleName);
            await page.click('#btnCreateSchedule');
            await page.waitFor(5000);
        }
    }
}