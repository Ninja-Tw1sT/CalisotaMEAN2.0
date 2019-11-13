const express = require('express');
const router = express.Router();

const ctrlUser = require('../controllers/user.controller');
const ctrlCertificates = require('../controllers/certificates.controller');
const ctrlEmployments = require('../controllers/employments.controller');
const ctrlSchools = require('../controllers/schools.controller');

const jwtHelper = require('../config/jwtHelper');

router.post('/register', ctrlUser.register);
router.post('/authenticate', ctrlUser.authenticate);
router.get('/userProfile',jwtHelper.verifyJwtToken, ctrlUser.userProfile);

// certificates
router.post('/certificates',jwtHelper.verifyJwtToken, ctrlCertificates.addCertificate);
router.get('/certificates',jwtHelper.verifyJwtToken, ctrlCertificates.getCertificates);

// employments
router.post('/employments',jwtHelper.verifyJwtToken, ctrlEmployments.addEmployment);
router.get('/employments',jwtHelper.verifyJwtToken, ctrlEmployments.getEmployments);

// schools
router.post('/schools',jwtHelper.verifyJwtToken, ctrlSchools.addSchools);
router.get('/schools', jwtHelper.verifyJwtToken, ctrlSchools.getSchools);

module.exports = router;

