import { Router } from "express";
import messagesModel from "../dao/models/messages.model.js";

export const messagesRouter = Router()

messagesRouter
    .get('/', (req,res)=>{
        res.render('chat', {})
    })
    
    .post('/messages', async (req,res)=>{
        try {
            const { body } = req
            const result = await messagesModel.create(body)

            res.send({
                status: 'success',
                result
            })
        } catch (error) {
            console.log(error)
        }
    })
