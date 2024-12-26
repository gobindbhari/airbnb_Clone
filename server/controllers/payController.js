const instance = require('../index')
const stripe = require('stripe')('sk_test_...');


const createOrderId = async (req, res) => {
  try {
    const { id, email, cost } = req.body
    if (!id || !email || !cost) return res.json({ message: 'Id, cost and Email are required' })
    const product = await stripe.products.create({
      id: id,
      email: email
    })
    if(product) return res.json({ message: 'Product is not created' }) 
      const price = await stripe.price.create({
        product: `${product.id}`,
        unit_amount: cost * 100,
        curreny: 'inr'
      })
    if (price.id)return res.json({message: 'price.id is not generated'})
    const session = await stripe.checkout.sessions.create({
      line_items:[
        {
          price : `${price.id}`,
          quantity : 1
        }
      ],
      mode:'payment',
      success_url: 'http://localhost:5500/success',
      success_url: 'http://localhost:5500/cancel'
    })
  } catch (error) {

  }
}


exports = { createOrderId, }