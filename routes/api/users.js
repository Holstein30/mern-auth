const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");

// Load Input Validation
const validateRegisterInput = require("../../validation/register.js");
const validateLoginInput = require("../../validation/login");

// Load User model
const User = require("../../models/User");
