const mongoose = require("mongoose");
const {Schema} = mongoose;

main()
    .then((res) => console.log("connected to DB"))
    .catch((err) => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/relationDemo')
}

const orderSchema  = new Schema({
    item: String,
    price: Number
});

const Order = mongoose.model("Order", orderSchema);

const addOrder = async() => {
    let result = await Order.insertMany([
        {item: "Samosa", price: 12},
        {item: "Chips", price: 10},
        {item: "Chocolate", price: 40}
    ]);
    console.log(result);
}

addOrder();