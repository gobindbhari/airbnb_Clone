const instance = require('../index')

const createOrderId = async (req,res) => {
    const options = {
        amount: 50000,  // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        currency: "INR",
        receipt: "order_rcptid_11"
      };    
      const order = await instance.orders.create(options)
}


exports = { createOrderId, }