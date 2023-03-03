const mongoose = require("mongoose");

const ClientsSchema = new mongoose.Schema({
  client_id: {
    type: String,
    required: true,
  },
  booking_count: {
    type: Number,
    required: 0,
  },
  client_name: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  client_email: {
    type: String,
    required: true,
  },
  joined_on: {
    type: Date,
    required: true,
  },
  account_type: {
    type: String,
    required: true,
  },
  block_status: {
    type: Boolean,
    required: true,
  },
  images_count: {
    type: Number,
    required: true,
  },
  account_status: {
    type: String,
    required: true,
  }
});

const Client = mongoose.model("Client", ClientsSchema);

module.exports = Client;
