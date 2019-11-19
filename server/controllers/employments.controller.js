const mongoose = require('mongoose');
const _ = require('lodash');

const Employment = mongoose.model('Employment', {
  userId: {type: String},
  employerName: {type: String},
  address: {type: String},
  city: {type: String},
  state: {type: String},
  zip: {type: String},
  supervisionContact: {type: String},
  phone: {type: String},
  position: {type: String},
  startDate: {type: String},
  endDate: {type: String},
  reasonForQuiting: {type: String},
});

let addEmployment = (req, res, next) => {
  // return error if fields are missing
  if (
    !req.body.employerName
    || !req.body.address
    || !req.body.city
    || !req.body.state
    || !req.body.zip
    || !req.body.supervisionContact
    || !req.body.phone
    || !req.body.position
    || !req.body.startDate
    || !req.body.endDate
    || !req.body.reasonForQuiting
  ) {
    return res.status(400).send({
      status: false,
      message: 'Required field(s) are missing or empty.'
    });
  }

  var employment = new Employment();
  employment.userId = req._id;
  employment.employerName = req.body.employerName;
  employment.address = req.body.address;
  employment.city = req.body.city;
  employment.state = req.body.state;
  employment.zip = req.body.zip;
  employment.supervisionContact = req.body.supervisionContact;
  employment.phone = req.body.phone;
  employment.position = req.body.position;
  employment.startDate = req.body.startDate;
  employment.endDate = req.body.endDate;
  employment.reasonForQuiting = req.body.reasonForQuiting;

  employment.save((err, doc) => {
    if (!err) {
      res.status(200).send(doc);
    } else {
      if (err.code == 11000)
          res.status(422).send(['Duplicate entry found.']);
      else
          return res.status(400).send(err);
    }
  })
};

let getEmployments = (req, res, next) => {
  Employment.find({ userId: req._id },
    (err, employments) => {
        if (!employments)
            return res.status(404).json({ status: false, message: 'No employments found.' });
        else
            return res.status(200).json({ status: true, employments : employments });
    }
  );
};

module.exports = {
  addEmployment,
  getEmployments
};
