import mongoose from "mongoose";

const { Schema } = mongoose

const reqString = {
    type: String,
    required: true,
    trim: true
}

const photoSchema = new Schema({
    name: reqString,
    description: reqString,
    uploadedAt: {
        type: Date,
        default: Date.now()
    }
})

const Photo = mongoose.model('Photo', photoSchema)

export { Photo }