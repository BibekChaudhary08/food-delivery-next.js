//const { default: mongoose } = require("mongoose");
import mongoose from "mongoose";

const resturantModel = new mongoose.Schema({
    name: String,
    city: String,
    address: String,
    contact_no: String,
    email: String,
    password: String,
})

export const resturantSchema = mongoose.models.resturants || mongoose.model("resturants", resturantModel);