const mongoose = require('mongoose');

    const companySchema = new mongoose.Schema( {
        companyName: {
            type: String,
            required: [true ,'company is already added. Please enter a new company.'],
            unique: true ,
        },
        about: {
            type: String,
            required: [true, 'Please add the about!'],
            maxlength: [500, 'The about can not exceed 500 charaters.'],
        },
        yearFounded: {
            type: Number,
        },
        CEO: {
            type: String,
        },
});



module.exports = mongoose.model('Company', companySchema); 