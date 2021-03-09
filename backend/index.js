const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello Danko!'))

app.listen(port, () => console.log(`REST API started on port ${port}`))