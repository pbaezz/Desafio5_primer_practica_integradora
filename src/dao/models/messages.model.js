import { Schema, model } from "mongoose"

const messagesSchema = new Schema({
    user: String,
    message: String,
    isActive: {
        type: Boolean,
        default: true
    }
})

export default model('messages', messagesSchema)