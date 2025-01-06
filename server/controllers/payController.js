// const instance = require('../index')
const stripe = require('stripe')('sk_test_51QZuM9A063PqOtY5TQ9IW0NM0BP6T1OrwS0APlaCcO4kePH7L7XzGLqiyZjN8HwjwHcwpFPt7mCP3mEOeeJBjjvx00BjUVkgYI');


const createOrderId = async (req, res) => {
  try {
    const { roomId, userId, cost, email } = req.body
    console.log('mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm', roomId , userId , cost)
    if (!roomId || !userId || !cost) return res.status(400).json({ message: 'Id, cost and Email are required' })

    // create a product
    const product = await stripe.products.create({
      name :`product name`,
      metadata: {              // Store custom data in metadata
        userId: `${userId}`,
        postId: `${roomId}`,
      }
    })

    // create product price
    if(!product.id) return res.json({ message: 'Product is not created', product : product }) 
      const price = await stripe.prices.create({
        product: `${product.id}`,
        unit_amount: cost * 100,
        currency: 'inr'
      })

      // create session
    if (!price.id)return res.json({message: 'price.id is not generated'})
    const session = await stripe.checkout.sessions.create({
      line_items:[
        {
          price : `${price.id}`,
          quantity : 1
        }
      ],
      mode:'payment',
      success_url : `http://localhost:5500/payment/success`,
      cancel_url : 'http://localhost:5500/payment/cancel',
      customer_email : `${email}`
      // customer_email : 'test@test.com'
    })
    console.log('sessionssssssssss', session)
    return res.json({session})
  } catch (error) {
    console.log(error)
    return res.json({message:error})
  }
}


const verifyPayment = async (req,res) => {
  try {
    const {sessionId} = req.params
    const session = await stripe.checkout.sessions.retrieve(sessionId)
    const paymentIntent = await stripe.paymentIntent.retrieve(session.payment_intent)
    return res.render('success', { session, paymentIntent });
  } catch (error) {
    console.log(error)
    return res.json({message:error})
  }
}


module.exports = { createOrderId, verifyPayment }