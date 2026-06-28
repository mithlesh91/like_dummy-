import mongoose from "mongoose";

const nodeSchema = new mongoose.Schema({
    title:String,
    discription:String
})

export const notesmodel = mongoose.model("note",nodeSchema)