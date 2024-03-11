const mongoose = require('mongoose');

(async()=> {
        await mongoose.connect('mongodb://127.0.0.1:27017/recap');
})();

module.exports = {
    Student: require('./Student'),
    Mark: require('./Mark'),
    Head: require('./Head'),
}