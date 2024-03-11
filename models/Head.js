const mongoose = require('mongoose');
const { model, Schema } = require('mongoose');

const headSchema = new Schema({
	hid: Number,
	headname: String,
	total: Number
})

module.exports = model('Head', headSchema);
