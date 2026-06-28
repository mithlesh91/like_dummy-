import express from "express"
import { notesmodel } from "./models/note.model.js"
import cors from "cors"

export const app = express()
app.use(express.json())
app.use(cors())
app.use(express.static("./public"))


app.post('/api/note', async (req, res) => {
    const { title, discription } = req.body
    const note = await notesmodel.create({
        title,
        discription
    })

    res.status(200).json({
        message: "note is created",
        note
    })
})

app.get('/api/note',async (req,res)=>{
    const note = await notesmodel.find()
    res.status(200).json({
        message:'note is fatched',
        note
    })
})

app.delete('/api/note/:id',async(req,res)=>{
    const id = req.params.id
    const note = await notesmodel.findByIdAndDelete(id)
    console.log(id)

    res.status(200).json({
        message:"notes id deleted",
    })

})

app.patch('/api/note/:update',async(req,res)=>{
    const updat = req.params.update
    const {title,discription}= req.body

    const note = await notesmodel.findByIdAndUpdate(updat,{title,discription})
    res.status(200).json({
        message:"note is updated",
        note
    })
})