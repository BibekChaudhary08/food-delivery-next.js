import { connectionStr } from "@/app/lib/db";
import FoodSchema from "@/app/lib/foodItemsModel";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET(request, {params}){
    mongoose.connect(connectionStr);
    const { editfood_id } = params;
    let success = false;

    const data = await FoodSchema.findOne({_id: editfood_id})
    if(data){
        success = true;
    }
    return NextResponse.json({data, success});
}

export async function PUT(request, {params}) {
    mongoose.connect(connectionStr);
    const { editfood_id } = params;
    const payload = await request.json();

    let success = false;
    const data = await FoodSchema.findOneAndUpdate({_id: editfood_id}, payload);
    if(data){
        success = true;
    }
    return NextResponse.json({data, success});
}