

const PRODUCT_MODEL = require("../models/product.model")

const createproducts = async (req, res) => {
    const { productsName, img,price , quantity } = req.body
    try {
        const products = await PRODUCT_MODEL.create({
            productsName: productsName,
            img: img,
            price: price,
            quantity: quantity,
        })
        res.status(200).json({
            success: true,
            massage: "products created",
            data: products,
        })
    }
    catch (error) {
        res.status(400).json({
            success: false,
            error: error.name,
            massage: error.massage
        })

    }
}

const Findproducts = async (req, res) => {
    const { productsName } = req.body
    try {
        const products = await PRODUCT_MODEL.find({ productsName })
        res.status(200).json({
            success: true,
            massage: "user finded",
            data: products,
        })
    }
    catch (error) {
        res.status(400).json({
            success: false,
            error: error.name,
            massage: error.massage
        })
    }
}

const deleteproducts = async (req, res) => {
    const { productsName } = req.body
    try {
        const products = await PRODUCT_MODEL.deleteOne({
            productsName: productsName
        })

        res.status(200).json({
            success: true,
            massage: "product deleted",
            data: products,
        })
    }
    catch (error) {
        res.status(400).json({
            success: false,
            error: error.name,
            massage: error.massage
        })
    }
}
 



module.exports = {
    createproducts,
    Findproducts,
    deleteproducts
}