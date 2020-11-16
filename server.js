// const allowIfNotAuthenticated = require('./app/middleware/passport-config').allowIfNotAuthenticated
// const checkAuthenticated = require('./app/middleware/passport-config').checkAuthenticated
// const createHash = require('./app/middleware/passport-config').createHash
// const initializePassport = require('./app/middleware/passport-config').initializePassport
const express = require('express')
const path = require('path')
const cors = require('cors')
// const passport = require('passport')
// const flash = require('express-flash')
// const session = require('express-session')
const bodyParser = require('body-parser')
const toDoListRoutes = require('./app/server/to-do-subapp-management/routes')
const users = []
const dbConfig = require('./app/server/db_config/dbConfig')

// initializePassport(
//   passport,
//   email => users.find(user => user.email === email),
//   id => users.find(user => user.id === id)
// )

// set up express
const app = express()

// set up basic configs
dbConfig.connect()
app.set('view-engine', 'ejs')
app.use(cors())
app.use(express.static(path.resolve(__dirname, './dist')))
// app.use(flash())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
// app.use(session({
//   secret: process.env.session_secret || 'to-do-login-secret',
//   resave: false,
//   saveUninitialized: false
// }))
// app.use(passport.initialize())
// app.use(passport.session())

// API sub app Routes
app.use(`/api/`, toDoListRoutes)

// view Routes
// app.get('/home', (req, res) => res.sendFile(path.resolve(__dirname, './dist/index.html')))

// app.get('/', (req, res) => res.redirect('/home'))

// app.route('/login')
// .get(allowIfNotAuthenticated, (req, res) => res.render('login.ejs', {name: 'to-do app'}))
// .post(allowIfNotAuthenticated, passport.authenticate('local', {
//   successRedirect: '/home',
//   failureRedirect: '/login',
//   failureFlash: true
// }))

// app.route('/logout')
// .get((req, res) => {
//   req.logOut()
//   res.redirect('/login')
// })

// app.route('/register')
//   .get(allowIfNotAuthenticated, (req, res) => res.render('register.ejs'))
//   .post(allowIfNotAuthenticated, (req, res) => {
//     const {name, email, password} = req.body
//     const hashedPassword = createHash(password)
//     users.push({
//       id: Date.now().toString(),
//       name,
//       email,
//       password: hashedPassword
//     })
//     res.redirect('/login')
//   })

const port = process.env.port || 5001

app.listen(port, () => {
  console.log(`server started on port: ${port}`)
})
