export default async function handler(req, res) {

const address="BC1QX34GPNQTHCD89R7H40GP3J8QRJXUKH2388KLRQ"

try{

const r=await fetch(`https://solo.ckpool.org/users/${address}`)
const data=await r.json()

res.status(200).json(data)

}catch(e){

res.status(500).json({error:"ckpool fetch failed"})

}

}