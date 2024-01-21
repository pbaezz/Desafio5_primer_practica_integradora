import {connect} from 'mongoose'

export const connectDB = async ()=>{
    try {
        await connect('mongodb+srv://pbaez:Rdd456Grtb9LHdZ3@cluster0.1gq5cbw.mongodb.net/ecommerce')
        console.log('base de datos conectada')
    } catch (error) {
        console.log(error)
    }
}