const mongoose = require('mongoose');
var Schema = mongoose.Schema;
const _ = require('lodash');

const Certificate = mongoose.model('Certificate', {
  userId: {type: String},
  issuer: {type: String},
  certification: {type: String},
  certNumber: {type: String},
});

let addCertificate = (req, res, next) => {
  // return error if fields are missing
  if (
    !req.body.issuer
    || !req.body.certification
    || !req.body.certNumber
  ) {
    return res.status(400).send({
      status: false,
      message: 'Required field(s) are missing or empty.'
    });
  }

  var certificate = new Certificate();
  certificate.userId = req._id;
  certificate.issuer = req.body.issuer;
  certificate.certification = req.body.certification;
  certificate.certNumber = req.body.certNumber;

  certificate.save((err, doc) => {
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

let getCertificates = (req, res, next) => {
  Certificate.find({ userId: req._id },
    (err, certs) => {
        if (!certs)
            return res.status(404).json({ status: false, message: 'No certificates found.' });
        else
            return res.status(200).json({ status: true, certificates : certs });
    }
  );
};

module.exports = {
  addCertificate,
  getCertificates
};
