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
router.post('/certificates', ctrlCertificates.addCertificate);
router.get('/certificates', ctrlCertificates.getCertificates);

// employments
router.post('/employments', ctrlEmployments.addEmployment);
router.get('/employments', ctrlEmployments.getEmployments);

// schools
router.post('/schools', ctrlSchools.addSchools);
router.get('/schools', ctrlSchools.getSchools);

module.exports = router;

