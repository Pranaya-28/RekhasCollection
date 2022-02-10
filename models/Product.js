import mongoose from "mongoose"

const ProductSchema = new mongoose.Schema(
    {
        productCode:{
            type: Number,
            required: true,
        },
        imgUrl:{
            type: String,
            required: true
        },
        
        brand: {
            type: String,
            required: true
        },
        material: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: false,
            maxlength: 60
        },
        arrivalDate: {
            type: String,
            required: true
        },
        vendor: {
            type: String,
            required: true
        },
        costPrice: {
            type: Number,
            required: true
        },
        salePrice: {
            type: Number,
            required: true
        },
        soldPrice: {
            type: Number
        },
        customerName:{
            type: String
        },
        customerContact:{
            type: String
        },
        dateSold:{
            type: String
        },
        status:{
            type: String
        },
        amountPaid:{
            type: Number
        },
        dues:{
            type: Number
        }
    }, {timestamps: true}
)

export default mongoose.models.Product || mongoose.model('Product', ProductSchema)