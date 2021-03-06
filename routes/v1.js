var express = require('express');
var router = express.Router();
const passport = require('passport');

require('./../middleware/passport')(passport);
/* GET home page. */
router.get('/', function (req, res, next) {
  res.json({ status: "success", message: "Parcel Pending API", data: { "version_number": "v1.0.0" } })
});
router.post('/login', UserAccountController.login);
router.post('/createStatus', passport.authenticate('jwt', { session: false }), StatusController.createStatus);
router.post('/editStatus', passport.authenticate('jwt', { session: false }), StatusController.editStatus);
router.post('/deleteStatus', passport.authenticate('jwt', { session: false }), StatusController.deleteStatus);
router.get('/getStatus', passport.authenticate('jwt', { session: false }), StatusController.getStatus);
router.post('/getClientManager', passport.authenticate('jwt', { session: false }), ClientController.getClientManager);
router.get('/getDepartment', passport.authenticate('jwt', { session: false }), ClientController.getDepartment);
router.get('/getCustomerDetails', passport.authenticate('jwt', { session: false }), ConfigurationController.getCustomerDetails);
router.post('/createCustomerDetails', passport.authenticate('jwt', { session: false }), ConfigurationController.createCustomerDetails);
router.post('/editCustomerDetails', passport.authenticate('jwt', { session: false }), ConfigurationController.editCustomerDetails);
router.post('/createOfficeLocation', passport.authenticate('jwt', { session: false }), ConfigurationController.createOfficeLocation);
router.post('/editOfficeLocation', passport.authenticate('jwt', { session: false }), ConfigurationController.editOfficeLocation);
router.post('/deleteOfficeLocation', passport.authenticate('jwt', { session: false }), ConfigurationController.deleteOfficeLocation);
router.post('/addRequestTemplate', passport.authenticate('jwt', { session: false }), ConfigurationController.addRequestTemplate);
router.get('/getRequestTemplate', passport.authenticate('jwt', { session: false }), ConfigurationController.getRequestTemplate);
router.post('/getAllEmployee', passport.authenticate('jwt', { session: false }), EmployeeController.getAllEmployee);
router.post('/deleteRequestTemplate', passport.authenticate('jwt', { session: false }), ConfigurationController.deleteRequestTemplate);
router.post('/updateRequestTemplate', passport.authenticate('jwt', { session: false }), ConfigurationController.updateRequestTemplate);
router.post('/createProject', passport.authenticate('jwt', { session: false }), ProjectController.createProject);
router.post('/checkProjectName', passport.authenticate('jwt', { session: false }), ProjectController.checkProjectName);
router.post('/getProject', passport.authenticate('jwt', { session: false }), ProjectController.getProject);
router.post('/getAllClient', passport.authenticate('jwt', { session: false }), ClientController.getAllClient);
router.get('/getAllVendor', passport.authenticate('jwt', { session: false }), EmployeeController.getAllVendor);
router.post('/deleteProject', passport.authenticate('jwt', { session: false }), ProjectController.deleteProject);
router.post('/updateProject', passport.authenticate('jwt', { session: false }), ProjectController.updateProject);
router.get('/getRelationship', passport.authenticate('jwt', { session: false }), ConfigurationController.getRelationship);
router.post('/getEmployeeContact', passport.authenticate('jwt', { session: false }), EmployeeController.getEmployeeContact);
router.post('/editEmployeeContact', passport.authenticate('jwt', { session: false }), EmployeeController.editEmployeeContact);
router.post('/editEmployeeEmergencyContact', passport.authenticate('jwt', { session: false }), EmployeeController.editEmployeeEmergencyContact);
router.post('/createEmployeeEmergencyContact', passport.authenticate('jwt', { session: false }), EmployeeController.createEmployeeEmergencyContact);
router.post('/getEmployeeEmergencyContact', passport.authenticate('jwt', { session: false }), EmployeeController.getEmployeeEmergencyContact);
router.post('/createEmployeeContact', passport.authenticate('jwt', { session: false }), EmployeeController.createEmployeeContact);


router.post('/createClient', passport.authenticate('jwt', { session: false }), ClientController.createClient);

router.get('/getConfiguration', passport.authenticate('jwt', { session: false }), ConfigurationController.getConfiguration);
router.post('/createConfiguration', passport.authenticate('jwt', { session: false }), ConfigurationController.createConfiguration);
router.post('/editConfiguration', passport.authenticate('jwt', { session: false }), ConfigurationController.editConfiguration);
router.post('/deleteConfiguration', passport.authenticate('jwt', { session: false }), ConfigurationController.deleteConfiguration);
router.get('/getReportingManager', passport.authenticate('jwt', { session: false }), EmployeeController.getReportingManager);
router.post('/createEmployee', passport.authenticate('jwt', { session: false }), EmployeeController.createEmployee);
router.get('/getEmployees', passport.authenticate('jwt', { session: false }), EmployeeController.getEmployees);
router.get('/getInsurancePlan', passport.authenticate('jwt', { session: false }), ConfigurationController.getInsurancePlan);
router.post('/createInsurancePlan', passport.authenticate('jwt', { session: false }), ConfigurationController.createInsurancePlan);
router.post('/editInsurancePlan', passport.authenticate('jwt', { session: false }), ConfigurationController.editInsurancePlan);
router.post('/deleteInsurancePlan', passport.authenticate('jwt', { session: false }), ConfigurationController.deleteInsurancePlan);
router.post('/checkType', passport.authenticate('jwt', { session: false }), ConfigurationController.checkType);
router.get('/getAdministratorList', passport.authenticate('jwt', { session: false }), ConfigurationController.getAdministratorList);
router.post('/checkEmail', UserAccountController.checkEmail);
router.get('/getCurrentUser', passport.authenticate('jwt', { session: false }), UserAccountController.getCurrentUser);
router.post('/refreshToken', UserAccountController.refreshToken);
router.post('/sendActivationLink', passport.authenticate('jwt', { session: false }), UserAccountController.sendActivationLink);
router.post('/verifyToken', UserAccountController.verifyToken);
router.post('/configurePassword', UserAccountController.configurePassword);
router.post('/changePassword', passport.authenticate('jwt', { session: false }), UserAccountController.changePassword);
router.post('/editEmployee', passport.authenticate('jwt', { session: false }), EmployeeController.editEmployee);
router.post('/forgotPassword', UserAccountController.sendForgotPasswordLink);
router.post('/createEmpConfidentialInfo', passport.authenticate('jwt', { session: false }), EmployeeController.createEmpConfidentialInfo);
router.post('/editEmpConfidentialInfo', passport.authenticate('jwt', { session: false }), EmployeeController.editEmpConfidentialInfo);
router.post('/getEmpConfidentialInfo', passport.authenticate('jwt', { session: false }), EmployeeController.getEmpConfidentialInfo);
router.post('/checkPassword', passport.authenticate('jwt', { session: false }), EmployeeController.checkPassword);
router.post('/createEmployeeDependent', passport.authenticate('jwt', { session: false }), EmployeeController.createEmployeeDependent);
router.post('/getDependentDetails', passport.authenticate('jwt', { session: false }), EmployeeController.getDependentDetails);
router.post('/editEmployeeDependent', passport.authenticate('jwt', { session: false }), EmployeeController.editEmployeeDependent);
router.get('/getAllInternalEmployee', passport.authenticate('jwt', { session: false }), EmployeeController.getAllInternalEmployee);

router.post('/getClient', passport.authenticate('jwt', { session: false }), ClientController.getClient);
router.post('/editClient', passport.authenticate('jwt', { session: false }), ClientController.editClient);
router.post('/clientBackgroundCheckMapping', passport.authenticate('jwt', { session: false }), ClientController.clientBackgroundCheckMapping);
router.post('/getBackgroundCheck', passport.authenticate('jwt', { session: false }), ClientController.getBackgroundCheck);
router.post('/getAllClientContact', passport.authenticate('jwt', { session: false }), ClientController.getAllClientContact);
router.get('/getClientContactType', passport.authenticate('jwt', { session: false }), ClientController.getClientContactType);
router.post('/createClientContact', passport.authenticate('jwt', { session: false }), ClientController.createClientContact);
router.post('/editClientContact', passport.authenticate('jwt', { session: false }), ClientController.editClientContact);
router.post('/deleteClientContact', passport.authenticate('jwt', { session: false }), ClientController.deleteClientContact);
router.post('/getClientDepartment', passport.authenticate('jwt', { session: false }), ClientController.getClientDepartment);
router.post('/clientDepartmentMapping', passport.authenticate('jwt', { session: false }), ClientController.clientDepartmentMapping);
router.post('/getClientTask', passport.authenticate('jwt', { session: false }), ClientController.getClientTask);
router.post('/clientTaskMapping', passport.authenticate('jwt', { session: false }), ClientController.clientTaskMapping);
router.post('/getAllClientOfficeLocation', passport.authenticate('jwt', { session: false }), ClientController.getAllClientOfficeLocation);
router.post('/createClientOfficeLocation', passport.authenticate('jwt', { session: false }), ClientController.createClientOfficeLocation);
router.post('/editClientOfficeLocation', passport.authenticate('jwt', { session: false }), ClientController.editClientOfficeLocation);
router.post('/deleteClientOfficeLocation', passport.authenticate('jwt', { session: false }), ClientController.deleteClientOfficeLocation);
router.post('/getClientInvoiceLocation', passport.authenticate('jwt', { session: false }), ClientController.getClientInvoiceLocation);
router.post('/createClientInvoiceLocation', passport.authenticate('jwt', { session: false }), ClientController.createClientInvoiceLocation);
router.post('/editClientInvoiceLocation', passport.authenticate('jwt', { session: false }), ClientController.editClientInvoiceLocation);
router.get('/getAllClientActiveConsultant', passport.authenticate('jwt', { session: false }), ClientController.getAllClientActiveConsultant);
router.get('/getEmployeeToExport', passport.authenticate('jwt', { session: false }), EmployeeController.getEmployeeToExport);
router.get('/getClientToExport', passport.authenticate('jwt', { session: false }), ClientController.getClientToExport);
router.post('/getPlacementProject', passport.authenticate('jwt', { session: false }), PlacementController.getPlacementProject);
router.post('/importEmployee', passport.authenticate('jwt', { session: false }), EmployeeController.importEmployee);
router.post('/importClient', passport.authenticate('jwt', { session: false }), ClientController.importClient);

router.post('/getWeekViewTimesheet', passport.authenticate('jwt', { session: false }), TimesheetController.getWeekViewTimesheet);
router.post('/createTimesheetDetail', passport.authenticate('jwt', { session: false }), TimesheetController.createTimesheetDetail);
router.post('/editTimesheetDetail', passport.authenticate('jwt', { session: false }), TimesheetController.editTimesheetDetail);
router.post('/deleteTimesheetDetail', passport.authenticate('jwt', { session: false }), TimesheetController.deleteTimesheetDetail);
router.post('/timesheetSubmit', passport.authenticate('jwt', { session: false }), TimesheetController.timesheetSubmit);
router.post('/getCode', passport.authenticate('jwt', { session: false }), ClientController.getCode);
router.post('/createPlacement', passport.authenticate('jwt', { session: false }), PlacementController.createPlacement);
router.post('/getAllPlacement', passport.authenticate('jwt', { session: false }), PlacementController.getAllPlacement);
router.post('/getPlacement', passport.authenticate('jwt', { session: false }), PlacementController.getPlacement);
router.post('/editPlacement', passport.authenticate('jwt', { session: false }), PlacementController.editPlacement);
router.post('/getEmployeePlacement', passport.authenticate('jwt', { session: false }), PlacementController.getEmployeePlacement);
router.post('/getWorkLists', passport.authenticate('jwt', { session: false }), TimesheetController.getWorkLists);
router.get('/getMyTimesheets', passport.authenticate('jwt', { session: false }), TimesheetController.getMyTimesheets);
router.post('/getTimesheetDetails', passport.authenticate('jwt', { session: false }), TimesheetController.getTimesheetDetails);
router.post('/changeTimeSheetDetailStatus', passport.authenticate('jwt', { session: false }), TimesheetController.changeTimeSheetDetailStatus);
router.post('/timesheetSettings', passport.authenticate('jwt', { session: false }), TimesheetController.timesheetSettings);

router.post('/createInternalProjectEmployee', passport.authenticate('jwt', { session: false }), ProjectController.createInternalProjectEmployee);
router.post('/getInternalProjectEmployee', passport.authenticate('jwt', { session: false }), ProjectController.getInternalProjectEmployee);
router.post('/removeInternalProjectEmployee', passport.authenticate('jwt', { session: false }), ProjectController.removeInternalProjectEmployee);
router.post('/editInternalProject', passport.authenticate('jwt', { session: false }), ProjectController.editInternalProject);
router.get('/getTimesheetType', passport.authenticate('jwt', { session: false }), TimesheetController.getTimesheetType);
router.get('/getCustomerSettings', passport.authenticate('jwt', { session: false }), CustomerSettingsController.getCustomerSettings);
router.post('/createCustomerSetting', passport.authenticate('jwt', { session: false }), CustomerSettingsController.createCustomerSetting);
router.post('/editCustomerSetting', passport.authenticate('jwt', { session: false }), CustomerSettingsController.editCustomerSetting);
router.post('/getEmployeeStatus', passport.authenticate('jwt', { session: false }), EmployeeController.getEmployeeStatus);
router.post('/getClientStatus', passport.authenticate('jwt', { session: false }), ClientController.getClientStatus);
router.post('/getInternalProjectDetails', passport.authenticate('jwt', { session: false }), ProjectController.getInternalProjectDetails);
router.post('/createInternalProjectTask', passport.authenticate('jwt', { session: false }), ProjectController.createInternalProjectTask);
router.post('/removeInternalProjectTask', passport.authenticate('jwt', { session: false }), ProjectController.removeInternalProjectTask);
router.post('/getInternalProjectTask', passport.authenticate('jwt', { session: false }), ProjectController.getInternalProjectTask);
router.post('/getTimesheetToExport', passport.authenticate('jwt', { session: false }), TimesheetController.getTimesheetToExport);
router.get('/getNumberOfEmployees', passport.authenticate('jwt', { session: false }), EmployeeController.getNumberOfEmployees);
router.post('/getProjectMapping', passport.authenticate('jwt', { session: false }), ProjectController.getProjectMapping);
router.post('/signup', UserAccountController.signup);
router.get('/getSubscription', UserAccountController.getSubscription);
router.post('/getLca', passport.authenticate('jwt', { session: false }), WorkAuthorizationController.getLca);
router.get('/getAllLca', passport.authenticate('jwt', { session: false }), WorkAuthorizationController.getAllLca);
router.post('/createLca', passport.authenticate('jwt', { session: false }), WorkAuthorizationController.createLca);
router.post('/updateLca', passport.authenticate('jwt', { session: false }), WorkAuthorizationController.updateLca);
router.post('/deleteLca', passport.authenticate('jwt', { session: false }), WorkAuthorizationController.deleteLca);
router.get('/getH1bDetails', passport.authenticate('jwt', { session: false }), WorkAuthorizationController.getH1bDetails);
router.post('/createH1b', passport.authenticate('jwt', { session: false }), WorkAuthorizationController.createH1b);
router.post('/getSelectedH1bDetails', passport.authenticate('jwt', { session: false }), WorkAuthorizationController.getSelectedH1bDetails);
router.post('/updateH1b', passport.authenticate('jwt', { session: false }), WorkAuthorizationController.updateH1b);
router.post('/getI94Details', passport.authenticate('jwt', { session: false }), WorkAuthorizationController.getI94Details);
router.post('/getEverifyDetails', passport.authenticate('jwt', { session: false }), WorkAuthorizationController.getEverifyDetails);
router.post('/getPassportDetails', passport.authenticate('jwt', { session: false }), WorkAuthorizationController.getPassportDetails);
router.post('/createI94', passport.authenticate('jwt', { session: false }), WorkAuthorizationController.createI94);
router.post('/editI94', passport.authenticate('jwt', { session: false }), WorkAuthorizationController.editI94);
router.post('/createEverify', passport.authenticate('jwt', { session: false }), WorkAuthorizationController.createEverify);
router.post('/editEverify', passport.authenticate('jwt', { session: false }), WorkAuthorizationController.editEverify);
router.post('/createPassport', passport.authenticate('jwt', { session: false }), WorkAuthorizationController.createPassport);
router.post('/editPassport', passport.authenticate('jwt', { session: false }), WorkAuthorizationController.editPassport);
router.post('/getEmployeeLca', passport.authenticate('jwt', { session: false }), EmployeeController.getEmployeeLca);
router.post('/getEmployeeH1b', passport.authenticate('jwt', { session: false }), EmployeeController.getEmployeeH1b);
router.post('/getEmployeeGreenCard', passport.authenticate('jwt', { session: false }), EmployeeController.getEmployeeGreenCard);
router.post('/getLcaStatusTracking', passport.authenticate('jwt', { session: false }), WorkAuthorizationController.getLcaStatusTracking);

router.post('/getEmployeeStatusHistory', passport.authenticate('jwt', { session: false }), EmployeeController.getEmployeeStatusHistory);

/**Invoice Controller Routes */
router.post('/createPDF', passport.authenticate('jwt', { session: false }), InvoiceController.createPDF);
router.get('/getInvoiceDetails', passport.authenticate('jwt', { session: false }), InvoiceController.getInvoiceDetails);

/** ImmigrationControllerRoutes */
router.post('/createAdvertisement', passport.authenticate('jwt', { session: false }), ImmigrationController.createAdvertisement);
router.get('/getAdvertisementForTableDisplay', passport.authenticate('jwt', { session: false }), ImmigrationController.getAdvertisementForTableDisplay);
router.post('/getAdvertisementByJobId', passport.authenticate('jwt', { session: false }), ImmigrationController.getAdvertisementByJobId);
router.post('/updateAdvertisement', passport.authenticate('jwt', { session: false }), ImmigrationController.updateAdvertisement);
router.get('/getModuleAccess', passport.authenticate('jwt', { session: false }), ModuleSecurityController.getModuleAccess);
router.get('/getModuleList', passport.authenticate('jwt', { session: false }), ModuleSecurityController.getModuleList);
router.post('/getInvoiceTimesheet', passport.authenticate('jwt', { session: false }), InvoiceController.getInvoiceTimesheet);
router.post('/createInvoice', passport.authenticate('jwt', { session: false }), InvoiceController.createInvoice);
router.post('/getInvoice', passport.authenticate('jwt', { session: false }), InvoiceController.getInvoice);
router.post('/editInvoice', passport.authenticate('jwt', { session: false }), InvoiceController.editInvoice);
router.post('/deleteInvoice', passport.authenticate('jwt', { session: false }), InvoiceController.deleteInvoice);
router.post('/invoicestatusChange', passport.authenticate('jwt', { session: false }), InvoiceController.invoicestatusChange);
router.post('/uploadLogo', passport.authenticate('jwt', { session: false }), ConfigurationController.uploadLogo);
router.get('/getProfilePicture', passport.authenticate('jwt', { session: false }), UserAccountController.getProfilePicture);
router.post('/uploadProfilePicture', passport.authenticate('jwt', { session: false }), UserAccountController.uploadProfilePicture);
router.post('/getAllModuleList', passport.authenticate('jwt', { session: false }), ModuleSecurityController.getAllModuleList);
router.post('/saveModuleAccessPermission', passport.authenticate('jwt', { session: false }), ModuleSecurityController.saveModuleAccessPermission);
router.get('/getGreenCardDetails', passport.authenticate('jwt', { session: false }), ImmigrationController.getGreenCardDetails);
router.get('/getAdvertisementInformation', passport.authenticate('jwt', { session: false }), ImmigrationController.getAdvertisementInformation);
router.post('/createGreenCardLaborDetails', passport.authenticate('jwt', { session: false }), ImmigrationController.createGreenCardLaborDetails);
router.post('/getSelectedGreenCardDetails', passport.authenticate('jwt', { session: false }), ImmigrationController.getSelectedGreenCardDetails);
router.post('/updateGreenCardLaborDetails', passport.authenticate('jwt', { session: false }), ImmigrationController.updateGreenCardLaborDetails);
router.post('/createGreenCardI140Details', passport.authenticate('jwt', { session: false }), ImmigrationController.createGreenCardI140Details);
router.post('/updateGreenCardI140Details', passport.authenticate('jwt', { session: false }), ImmigrationController.updateGreenCardI140Details);
router.post('/createInvoicePayment', passport.authenticate('jwt', { session: false }), InvoiceController.createInvoicePayment);
router.get('/getPlacementEmployee', passport.authenticate('jwt', { session: false }), PlacementController.getPlacementEmployee);
router.post('/getEmployeeUnderManager', passport.authenticate('jwt', { session: false }), TimesheetController.getEmployeeUnderManager);
router.post('/getEmployeeDropDownValues', passport.authenticate('jwt', { session: false }), EmployeeController.getEmployeeDropDownValues);
router.post('/sendInvoiceMail', passport.authenticate('jwt', { session: false }), InvoiceController.sendInvoiceMail);
router.post('/getClientDropdownValues', passport.authenticate('jwt', { session: false }), ClientController.getClientDropdownValues);
router.post('/getGreenCardStatusTracking', passport.authenticate('jwt', { session: false }), ImmigrationController.getGreenCardStatusTracking);
router.post('/getH1bStatusTracking', passport.authenticate('jwt', { session: false }), WorkAuthorizationController.getH1bStatusTracking);
router.post('/editTimesheetAlert', passport.authenticate('jwt', { session: false }), TimesheetController.editTimesheetAlert);
router.get('/getLcaDetailsToExport', passport.authenticate('jwt', { session: false }), WorkAuthorizationController.getLcaDetailsToExport);
router.get('/getH1bDetailsToExport', passport.authenticate('jwt', { session: false }), WorkAuthorizationController.getH1bDetailsToExport);
router.get('/getTimesheetSettings', passport.authenticate('jwt', { session: false }), ConfigurationController.getTimesheetSettings);
router.post('/customerTimesheetSettings', passport.authenticate('jwt', { session: false }), ConfigurationController.customerTimesheetSettings);
router.get('/getGreencardDetailsToExport', passport.authenticate('jwt', { session: false }), ImmigrationController.getGreencardDetailsToExport);
router.post('/getInvoicePayment', passport.authenticate('jwt', { session: false }), InvoiceController.getInvoicePayment);
module.exports = router;