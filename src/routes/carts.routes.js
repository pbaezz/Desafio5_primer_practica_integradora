import { Router } from "express";
import cartModel from "../dao/models/carts.model.js";
export const cartsRouter = Router()

cartsRouter
    .get('/', async (request, responses)=>{
        try {
            const carts = await cartModel.find({isActive: true})
            responses.json({
                status: 'success',
                result: carts
            })
        } catch (error) {
            console.log(error)
        }
    })
    .post('/', async (request, responses)=>{
        try {
            const { body } = request
            const result = await cartModel.create(body)

            responses.send({
                status: 'success',
                result
            })
        } catch (error) {
            console.log(error)
        }
    })
    .get('/:cid', async (request, responses)=>{
        try {
            const { cid } = request.params
            const cart = await cartModel.findOne({_id: cid})
            responses.json({
                status: 'success',
                result: cart
            })
        } catch (error) {
            console.log(error)
        }
    })
    .put('/:cid', async (request, responses)=>{
        try {
            responses.send('update cart')
        } catch (error) {
            console.log(error)
        }
    })
    .delete('/:cid', async (request, responses)=>{
        try {
            const {cid} = request.params
            const result = await cartModel.findByIdAndUpdate({_id:cid}, {isActive: false})
            responses.send('delete cart')
        } catch (error) {
            console.log(error)
        }
    })