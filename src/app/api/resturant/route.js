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

// This POST method is used to store the SignUp values in the database Collection.

export async function POST(request) {
    try {
        await mongoose.connect(connectionStr);
        
        const payload = await request.json();
        let data;
        let result;
        let success = false;
        if(payload.login){
            // for login
           result = await resturantSchema.findOne({email: payload.email, password: payload.password}); 
           if(result){
              success = true;
           }
        }
        else{
            //for signup
            data = new resturantSchema(payload);
            result = await data.save();
            success = true;
        }
        console.log(result);
        
        return NextResponse.json({result: result, success})
    } catch (error) {
        console.error(error);
        return NextResponse.json({success: false, error: error.message})
        
    }
}