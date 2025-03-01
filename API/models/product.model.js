const { Schema, model } = require("mongoose");




const productSchema = new Schema({
    img: {
        type: String,
    },
    productName: {
        type: String,
        required: true,
        split: " ",
    },
    price: {
        type: Number,
        required: true,
    },
    quantity: {
        type: String,
        required: true,
    }

})



const PRODUCT_MODEL = model("product", productSchema);
module.exports = PRODUCT_MODEL