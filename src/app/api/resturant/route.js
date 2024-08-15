import { connectionStr } from "@/app/lib/db";
import { resturantSchema } from "@/app/lib/resturantsModel";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        await mongoose.connect(connectionStr);
        console.log("MongoDB connected successfully");
        
        const data = await resturantSchema.find();
        console.log(data);

        // Use NextResponse.json to return a JSON response
        return NextResponse.json({ result: data });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ result: false, error: error.message });
    }
}

export async function POST(request) {
    try {
        await mongoose.connect(connectionStr);
        
        const payload = await request.json();
        const data = new resturantSchema(payload);
        const result = await data.save();
        console.log(result);
        
        return NextResponse.json({result: result, success: true})
    } catch (error) {
        console.error(error);
        return NextResponse.json({success: false, error: error.message})
        
    }
}