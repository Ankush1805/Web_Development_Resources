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

const customerSchema = new Schema({
    name: String,
    orders: [
        {
            type: Schema.Types.ObjectId,
            ref: "Order",
        },
    ],
});

// PRE MIDDLEWARE =============================================================================================================================
// customerSchema.pre("findOneAndDelete", async(data) => {
//     console.log(data);
// });

// POST MIDDLEWARE ============================================================================================================================
customerSchema.post("findOneAndDelete", async(customer) => {
    if(customer.orders.length) {
       let res =  await Order.deleteMany({_id: { $in: customer.orders}});
       console.log(res);
    }
});

const Order = mongoose.model("Order", orderSchema);
const Customer = mongoose.model("Customer", customerSchema);

const addCustomer = async() => {
    let cust1 = new Customer({
        name: "Rahul Kumar",
    });

    let order1 = await Order.findOne({item: "Chips"});
    let order2 = await Order.findOne({item: "Chocolate"});

    cust1.orders.push(order1);
    cust1.orders.push(order2);

    let result = await cust1.save();
    console.log(result);
}

// addCustomer();

const findCustomer = async() => {
    // let result = await Customer.find({}); // returns ObjectID for Orders
    // console.log(result);

    let result = await Customer.find({}).populate("orders"); // returns actual Order details
    console.log(result[0]);
}

// findCustomer();

const addNewCustomer = async() => {
    let newCustomer = new Customer({
        name: "Karan Arjun"
    });

    let newOrder = new Order({
        item: "Burger",
        price: 150
    });

    newCustomer.orders.push(newOrder);

    await newOrder.save();
    await newCustomer.save();

    console.log("added new customer");
}

// addNewCustomer();

/** Handling Deleteion (Cascading)
 * ============================================================================================================================================
 */
const deleteCustomer = async() => {
    let deletedCustomer = await Customer.findByIdAndDelete("66d5f328323c66b77dbaa18a");
    console.log(deletedCustomer);
}
deleteCustomer();