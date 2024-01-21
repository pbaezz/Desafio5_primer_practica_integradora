import mongoose from "mongoose";
const URI='mongodb+srv://pbaez:Rdd456Grtb9LHdZ3@cluster0.1gq5cbw.mongodb.net/ecommerce?retryWrites=true&w=majority'

const connectToDB = () => {
    try {
        mongoose.connect(URI)
        console.log('connected to DB ecommerce')
    } catch (error) {
        console.log(error);
    }
};

export default connectToDB