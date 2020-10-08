const proxy = require('./Proxy')
const port = 3000

proxy.listen(port, ()=> {
    console.log(`The Proxy is running on http://localhost:${port}`)
})