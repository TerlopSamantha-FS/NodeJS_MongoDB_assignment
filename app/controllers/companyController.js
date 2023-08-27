const Company = require('../models/companies');
const mongoose = require('mongoose');

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
    const { companiesId } = req.params;
    await Company.findById(companiesId)
        .select("company about yearFounded CEO")
        .populate("game", "name company")
        .exec()
        .then(company => {
            if (!company) {
                console.log(company);
                return res.status(404).json({
                    message: "Company not found"
                });
            }
            res.status(201).json({
                company: company,
                status: "success"
            });
        })
        .catch(err => {
            res.status(500).json({
                error: {
                    message: "Unable to save company"
                }
            });
        });
};

const createCompanies = async (req, res) => {
    const { company, about, yearFounded, CEO } = req.body;
    try {
        const newCompany = await Company.create({
            _id: new mongoose.Types.ObjectId(),
            company,
            about,
            yearFounded,
            CEO,
        });

        return res.status(200).json({
            data: newCompany,
            status: 'success',
            message: `${req.method} - Company request made`,
        });
    } catch (error) {
        console.error('Error:', error);
        return res.status(500).json({
            status: 'error',
            message: 'An error occurred while creating the company.',
        });
    }
};
        

const updateCompanies = (req, res) => {
    const { companiesId } = req.params;
        Company.findById(companiesId)
            .select("company about yearFounded CEO")
            .populate("game", "name company")
            .exec()
            .then(company => {
                res.status(201).json({
                    company: company,
                    status: "success",
                    message: "Company patched"
                });
            })
            .catch(err => {
                res.status(500).json({
                    error: {
                        message: "Unable to save company"
                    }
                });
            });
};

const deleteCompanies = (req, res) => {
    const { companiesId } = req.params;
        Company.findById(companiesId)
            .select("company about yearFounded CEO")
            .populate("game", "name company")
            .exec()
            .then(company => {
                res.status(201).json({
                    company: companiesId,
                    status: "success",
                    message: "Company deleted"
                });
            })
            .catch(err => {
                res.status(500).json({
                    error: {
                        message: "Unable to save company"
                    }
                });
            });
};

module.exports = {
    getCompanies,
    getCompaniesById,
    createCompanies,
    updateCompanies,
    deleteCompanies,
};