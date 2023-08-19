const Company = require('../models/companies');
const getCompanies = async (req, res) => {
    const company = await Company.find();
    res.status(200)
    .json({
        data: company,
        status: "success",
        message: `${req.method} - Companies request made`,
     });  
};

const getCompaniesById = async (req, res) => {
    const {id} = req.params;
    const company = await Company.findById();
    res.status(200)
    .json({
        data: company,
        status: "success",
        message: `${req.method} - Companies Id request made`,
    });
};

const createCompanies = async (req, res) => {
    const {company} = req.body;
    const newCompany = await Company.create(company);
    res.status(200)
    .json({
        data:newCompany,
        status: "success",
        message: `${req.method} - Companies POST`,
    });
};

const updateCompanies = async (req, res) => {
    const {id} = req.params;
    res.status(200)
       .json({
        status: "success",
        message: `${req.method} - Companies PATCH`, 
    });
};

const deleteCompanies = async (req, res) => {
    const {id} = req.params;
    await Company.findByIdAndDelete(id);
    res.status(200)
       .json({
        id,
        status: "success",
            message: `${req.method} - Companies DELETE`,
    });
};

module.exports = {
    getCompanies,
    getCompaniesById,
    createCompanies,
    updateCompanies,
    deleteCompanies,
};