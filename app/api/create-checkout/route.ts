import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const { testeId, assinatura } = await req.json();

  const price = assinatura
    ? process.env.STRIPE_SUBSCRIPTION_PRICE_ID
    : process.env.STRIPE_PRICE_ID;

 try {
    // const session = await stripe.checkout.sessions.create({
    //   line_items: [
    //     {
    //       price,
    //       quantity: 1,
    //     },
    //   ],
    //   mode: assinatura ? "subscription" : "payment",
    //   customer: testeId,
    //   success_url: `${origin}/success`,
    //   cancel_url: `${origin}/`,
    // })
 } catch (error) {
    
 }
}
