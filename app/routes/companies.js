const express = require("express");
const router = express.Router();
const {getCompanies, getCompaniesById, createCompanies, updateCompanies, deleteCompanies,
} = require('../controllers/companyController');

router.get("/", getCompanies);

router.get("/:companiesId", getCompaniesById);

router.post("/", createCompanies);

router.patch("/:companiesId", updateCompanies);

router.delete("/:companiesId", deleteCompanies);


module.exports = router;

