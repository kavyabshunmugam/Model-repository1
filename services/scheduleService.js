var schedule = require('node-schedule');
const template = require('../constants/template');
require('../constants/configurationFile');
/**
 * Async function to load the node-scheduler automatically.
 */
const load = async function () {
  timesheetEmployeeSettingsMailSchedule.triggeredJobs();
  timesheetCustomerSettingsMailSchedule.triggeredJobs();
}
module.exports.load = load;
/**
 * async function to send the mail to the employee whose are enabled the timesheet settings.
 */
var rule = new schedule.RecurrenceRule();
rule.dayOfWeek = 5;
rule.hour = 10;
rule.min = 00;
var timesheetEmployeeSettingsMailSchedule = schedule.scheduleJob(rule, async function () {
  const startDate = new Date(new Date().setDate(new Date().getDate() - new Date().getDay()));
  const endDate = new Date(startDate).setDate(new Date(startDate).getDate() + 6);
  [err, employee] = await to(Employee.findAll({
    where: {
      timesheetAlert: true
    },
    include: {
      required: false,
      model: Timesheet,
      where: {
        startDate: startDate,
        endDate: endDate
      },
      include: {
        model: Status
      }
    }
  }));
  if (employee && employee.length > 0) {
    for (let i = 0; i < employee.length; i++) {
      if (!employee[i].timesheets.length > 0 || employee[i].timesheets[0].status.name === STATUS.draft) {
        const user = employee[i];
        mailOption = {
          to: user.email,
          subject: 'Timesheet',
          html: eval('`' + template.timesheetNotification + '`')
        };
        [err, timesheetNotificationMail] = await to(mailService.sendEmail(mailOption));
      }
    }
  }
  timesheetEmployeeSettingsMailSchedule.cancel();
});

/**
 * async function to send the mail to the employees whose customer are enabled the timesheet settings.
 */
var rule1 = new schedule.RecurrenceRule();
rule1.dayOfWeek = 5;
rule1.hour = 17;
rule1.min = 00;
const startDate = new Date(new Date().setDate(new Date().getDate() - new Date().getDay()));
const endDate = new Date(new Date().setDate(startDate.getDate() + 6));
var timesheetCustomerSettingsMailSchedule = schedule.scheduleJob(rule1, async function () {
  [err, customer] = await to(Customer.findAll({
    include: [{
      model: CustomerSettings,
      where: {
        isValue: true
      },
      include: [{
        required: true,
        model: CustomerSettingsCategory,
        where: {
          name: CUSTOMERMAILSETTINGS.timesheetAlert
        }
      }]
    },
    {
      model: Employee,
      include: {
        required: false,
        model: Timesheet,
        where: {
          startDate: startDate,
          endDate: endDate
        },
        include: {
          model: Status
        }
      }
    }]
  }));
  if (customer && customer.length > 0) {
    for (let i = 0; i < customer.length; i++) {
      if (customer[i].employees && customer[i].employees.length > 0) {
        for (let j = 0; j < customer[i].employees.length; j++) {
          if (customer[i].employees[j].timesheets.length === 0 || customer[i].employees[j].timesheets[0].status.name === STATUS.draft) {
            const user = customer[i].employees[j];
            mailOption = {
              to: user.email,
              subject: 'Timesheet',
              html: eval('`' + template.timesheetNotification + '`')
            };
            [err, timesheetNotificationMail] = await to(mailService.sendEmail(mailOption));
          }
        }
      }
    }
  }
  timesheetCustomerSettingsMailSchedule.cancel();
});