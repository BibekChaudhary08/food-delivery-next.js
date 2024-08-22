import { connectionStr } from "@/app/lib/db";
import FoodSchema from "@/app/lib/foodItemsModel";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function POST(request){
    await mongoose.connect(connectionStr);
    const payload = await request.json();
    
    const data = new FoodSchema(payload);
    const response = await data.save();
    console.log(response);
    return NextResponse.json({response, success: true})
}