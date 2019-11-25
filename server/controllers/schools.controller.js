const mongoose = require('mongoose');
const _ = require('lodash');

const Schools = mongoose.model('Schools', {
  userId: {type: String},
  schoolName: {type: String},
  schoolType: {type: String},
  address: {type: String},
  city: {type: String},
  state: {type: String},
  zip: {type: String},
  degree: {type: String},
  major: {type: String},
  yearsCompleted: {type: String},
});

let addSchools = (req, res, next) => {
  // return error if fields are missing
  if (
    !req.body.schoolName
    || !req.body.schoolType
    || !req.body.address
    || !req.body.city
    || !req.body.state
    || !req.body.zip
    || !req.body.degree
    || !req.body.major
    || !req.body.yearsCompleted
  ) {
    return res.status(400).send({
      status: false,
      message: 'Required field(s) are missing or empty.'
    });
  }

  var schools = new Schools();
  schools.userId = req._id;
  schools.schoolName = req.body.schoolName;
  schools.schoolType = req.body.schoolType;
  schools.address = req.body.address;
  schools.city = req.body.city;
  schools.state = req.body.state;
  schools.zip = req.body.zip;
  schools.degree = req.body.degree;
  schools.major = req.body.major;
  schools.yearsCompleted = req.body.yearsCompleted;

  schools.save((err, doc) => {
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

let getSchools = (req, res, next) => {
  Schools.find({ userId: req._id },
    (err, schools) => {
        if (!schools)
            return res.status(404).json({ status: false, message: 'No schoolss found.' });
        else
            return res.status(200).json({ status: true, schools : schools });
    }
  );
};

module.exports = {
  addSchools,
  getSchools
};
