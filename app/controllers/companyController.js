const Company = require('../models/companies');

const getCompanies = async (req, res) => {
    const companies = await Company.find();
    res.status(200)
    .json({
        data: companies,
        status: "success",
        message: `${req.method} - Company request made`,
     });  
};

const getCompaniesById = async (req, res) => {
    const { id } = req.params;
    const companies = await Company.findById(id);
    res.status(200)
    .json({
        data: companies,
        status: "success",
        message: `${req.method} - Companies Id request made`,
    });
};

const createCompanies = async (req, res) => {
    const { company } = req.body;;
    const newCompany = await Company.create(company);
    res.status(200)
        .json({
            data: newCompany,
            status: "success",
            message: `${req.method} - Companies request made`,
        });
};
        

const updateCompanies = async (req, res) => {
    const { id } = req.params;
    const companies = await Company.findByIdAndUpdate(id, req.body, {
        new: true,
        runValidators: true,
    });
    res.status(200)
       .json({
        data: companies,
        status: "success",
        message: `${req.method} - Companies request made`, 
    });

};

const deleteCompanies = async (req, res) => {
    const { id } = req.params;
    await Company.findByIdAndDelete(id);
    res.status(200)
       .json({
        id,
        status: "success",
        message: `${req.method} - Companies request made`,
    });
};

module.exports = {
    getCompanies,
    getCompaniesById,
    createCompanies,
    updateCompanies,
    deleteCompanies,
};