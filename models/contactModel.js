const mongoose = require('mongoose');

const contactSchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: [true, 'Please add the contact name'],
    },
    email: {
      type: String,
      require: [true, 'Please add the contact email address'],
    },
    phone: {
      type: String,
      require: [true, 'Please add the contact number'],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Contact', contactSchema);
