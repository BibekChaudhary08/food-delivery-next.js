//const { default: mongoose } = require("mongoose");
import mongoose from "mongoose";

const resturantModel = new mongoose.Schema({
    name: String,
})

export const resturantSchema = mongoose.models.resturants || mongoose.model("resturants", resturantModel);