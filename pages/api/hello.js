// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// export default function msgHandler(req, res) {
//   if (req.method === 'POST' || req.method === 'GET') {
//     res.statusCode = 200
//     res.setHeader('Content-Type', 'application/json')
//     res.end(JSON.stringify({ name: 'Falcon Wolf' }))
//   }
// }

// Same as Above
export default function hello(req, res) {
  if (req.method === 'POST' || req.method === 'GET') {
    res.status(200).json({ name: 'Falcon Wolf' })
  }
}