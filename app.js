// 載入專案所需套件，並設定伺服器相關常數
const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const generateRubbish = require('./generate_rubbish')
const app = express()
const taskList = require('./tasks.json')
const port = 3000

// 設定樣版引擎
app.engine('hbs', exphbs({ extname: 'hbs', defaultLayout: 'main' }))
app.set('view engine', 'hbs')

// 設定body-parser
app.use(bodyParser.urlencoded({ extended: true }))

// 路由設定
app.get('/', (req, res) => {

  res.render('index', { tasks: taskList.results })
})

app.post('/', (req, res) => {
  taskList.results[0].selected = false
  taskList.results[1].selected = false
  taskList.results[2].selected = false
  const task = req.body.title
  const rubbish = generateRubbish(task)
  if (task === '工程師') {
    taskList.results[0].selected = true
  } else if (task === '設計師') {
    taskList.results[1].selected = true
  } else if (task === '創業家') {
    taskList.results[2].selected = true
  }
  res.render('index', { tasks: taskList.results, task, rubbish })
})

// 啟動並監聽伺服器
app.listen(port, () => {
  console.log(`port ${port} is on.`)
})