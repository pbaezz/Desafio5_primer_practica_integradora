import { Router } from 'express'
import ProductManager from '../dao/ProductManager.js'
import { __dirname } from '../utils.js'

const manager = new ProductManager(__dirname+'/dao/database/products.json')

const productsRouter = Router()

productsRouter.get("/products",async(req,res)=>{
    const products= await manager.getProducts(req.query)
    res.json({products})
})

productsRouter.get("/products/:pid", async (req, res) => {
    const productfind = await manager.getProductbyId(req.params);
    res.json({ status: "success", productfind });
});

productsRouter.post("/products", async (req, res) => {
    const newproduct = await manager.addProduct(req.body);
    res.json({ status: "success", newproduct });
});

productsRouter.put("/products/:pid", async (req, res) => {
    const updatedproduct = await manager.updateProduct(req.params,req.body);
    res.json({ status: "success", updatedproduct });
});

productsRouter.delete("/products/:pid", async (req, res) => {
    const id=parseInt(req.params.pid)
    const deleteproduct = await manager.deleteProduct(id);
    res.json({ status: "success",deleteproduct });
});

export default productsRouter