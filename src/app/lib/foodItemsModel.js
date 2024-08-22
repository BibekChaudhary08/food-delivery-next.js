import mongoose from "mongoose";

const foodModels = new mongoose.Schema({
    name: String,
    price: Number,
    image: String,
    description: String,
    resto_id: mongoose.Schema.Types.ObjectId     // this is used to put foods of hotels on the basis of their signup id.
})

const FoodSchema = mongoose.models.food_items || mongoose.model("food_items", foodModels);

export default FoodSchema;