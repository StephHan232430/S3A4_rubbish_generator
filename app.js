// 載入專案所需套件，並設定伺服器相關常數
const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const generateRubbish = require('./generate_rubbish')
const app = express()
const port = 3000

// 設定樣版引擎
app.engine('hbs', exphbs({ extname: 'hbs', defaultLayout: 'main' }))
app.set('view engine', 'hbs')

// 設定body-parser
app.use(bodyParser.urlencoded({ extended: true }))

// 路由設定
app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  const task = req.body.title
  const rubbish = generateRubbish(task)
  let taskStatus1 = false
  let taskStatus2 = false
  let taskStatus3 = false
  if (task === '工程師') {
    taskStatus1 = true
  } else if (task === '設計師') {
    taskStatus2 = true
  } else if (task === '創業家') {
    taskStatus3 = true
  }
  res.render('index', { task, taskStatus1, taskStatus2, taskStatus3, rubbish })
})

// 啟動並監聽伺服器
app.listen(port, () => {
  console.log(`port ${port} is on.`)
})