import mongoose from "mongoose";

 export async function database() {
    try {
        mongoose.connect(process.env.mongoose_uri)
        console.log("db is connected")
    } catch (error) {
        console.log(error)
    }
}