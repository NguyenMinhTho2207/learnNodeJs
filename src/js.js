const path = require('path')
const express = require('express')
const app = express()
const port = 3000
const morgan = require('morgan')
const hbs = require('express-handlebars')
app.use(morgan('combined'))
app.engine('hbs',hbs.engine({extname: '.hbs'}))

app.set('view engine', 'hbs');
app.set('views',path.join(__dirname, '\\resources\\views'));
app.get('/', (req, res) => {
    res.render('home')
 
})
app.get('/tintuc', (req, res) => {
  res.render('tintuc')

})
app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})