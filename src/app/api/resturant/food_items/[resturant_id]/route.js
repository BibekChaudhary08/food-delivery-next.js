import { connectionStr } from "@/app/lib/db";
import FoodSchema from "@/app/lib/foodItemsModel";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET(request, {params}){
   const {resturant_id} = params;
   await mongoose.connect(connectionStr);
   let success = false
   const data = await FoodSchema.find({resto_id : resturant_id});
   if(data){
      success = true;
   }
   return NextResponse.json({data, success})
}