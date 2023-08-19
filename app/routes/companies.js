const express = require("express");
const router = express.Router();
const {getCompanies, getCompaniesById, createCompanies, updateCompanies, deleteCompanies,
} = require('../controllers/companyController');

router.get("/", getCompanies);

router.get("/:CompaniesId", getCompaniesById);

router.post("/", createCompanies);

router.patch("/:CompaniesId", updateCompanies);

router.delete("/:CompaniesId", deleteCompanies);


module.exports = router;

