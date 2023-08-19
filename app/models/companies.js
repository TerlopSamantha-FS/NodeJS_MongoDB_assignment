const mongoose = require('mongoose');

    const companySchema = new mongoose.Schema( {
        
        companyTitle: {
            type: String,
            required: [true, 'Please add the company name!'],
            unique: true,
        },
        about: {
            type: String,
            required: [true, 'Please add the about!'],
            maxlength: [500, 'The about can not exceed 500 charaters.'],
        },
        yearFounded: {
            type: Number,
        }
});



module.exports = mongoose.model('Company', companySchema); 