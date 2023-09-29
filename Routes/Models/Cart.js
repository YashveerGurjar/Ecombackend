const mongoose = require('mongoose');

const CarttSchema = new mongoose.Schema(
    {
        userid: { type: String, require: true, unique: true },
        product: [
            {
                productId: {
                    type: String
                },
                quantity: {
                    type: Number,
                    default: 1,
                },
            },
        ],
        
    },

    {
        timestamps: true
    }
)
module.exports = mongoose.model('Cart', CarttSchema);