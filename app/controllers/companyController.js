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
    try {
        const { CompaniesId } = req.params;
        const companies = await Company.findById(CompaniesId);
        if (!companies) {
            return res.status(404).json({
                message: "Company not found"
            });
        }
        res.status(200).json({
            data: companies,
            status: "success"
        });
    } catch (err) {
        res.status(500).json({
            error: {
                message: err.message
            }
        });
    }
};

const createCompanies = async (req, res) => {
    const { company } = req.body;
    const newCompany = await Company.create(company);
    res.status(200)
        .json({
            data: newCompany,
            status: "success",
            message: `${req.method} - Company request made`,
        });
};
        
const updateCompanies = async (req, res) => {
    try {
        const { CompaniesId } = req.params;
        
        // Assuming Company is a model you've defined somewhere
        const companies = await Company.findById(CompaniesId);
        
        if (!companies) {
            return res.status(404).json({
                message: "Company not found"
            });
        }

        // Update the company's information
        const updatedCompanies = await Company.findByIdAndUpdate(CompaniesId, req.body, {
            new: true,
            runValidators: true,
        });

        res.status(200).json({
            data: updatedCompanies,
            status: "success",
            message: `${req.method} - Company request made`
        });
    } catch (err) {
        res.status(500).json({
            error: {
                message: err.message
            }
        });
    }
};

const deleteCompanies = async (req, res) => {
    try {
        const { CompaniesId } = req.params;
        
        // Assuming Company is a model you've defined somewhere
        const companies = await Company.findById(CompaniesId);
        
        if (!companies) {
            return res.status(404).json({
                message: "Company not found"
            });
        }
        
        await Company.findByIdAndDelete(CompaniesId);

        res.status(200).json({
            CompaniesId,
            status: "success",
            message: `${req.method} - Company request made`
        });
    } catch (err) {
        res.status(500).json({
            error: {
                message: err.message
            }
        });
    }
};

module.exports = {
    getCompanies,
    getCompaniesById,
    createCompanies,
    updateCompanies,
    deleteCompanies,
};