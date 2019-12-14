const express = require('express')
const path = require('path')
const cors = require('cors')
const crypto = require('crypto')
const passport = require('passport')
const initializePassport = require('./app/middleware/passport-config')
const flash = require('express-flash')
const session = require('express-session')
initializePassport(
  passport,
  email => users.find(user => user.email === email),
  id => users.find(user => user.id === id)
)

const data = (listId) => ([
  {text: `Snacks for ${listId}`, date: new Date()},
  {text: 'buy milk cartons', date: new Date()}
])
const users = []
// set up express
const app = express()
// set up basic configs
app.set('view-engine', 'ejs')
app.use(cors())
app.use(express.static(path.resolve(__dirname, './dist')))

app.get('/api/list/:listId', (req, res, next) => { console.log(`reading for list ${req.params.listId}`); next() }, (req, res) => res.json({data: data(req.params.listId)}))

app.get('*', function (req, res) {
  res.sendFile(path.resolve(__dirname, './dist/index.html')).end()
})
// app.use(express.urlencoded({ extended: false })) // to be able to use form elements (from /login or /register) in req obj
// app.use(flash())
// app.use(session({
//   secret: process.env.session_secret || 'to-do-login-secret',
//   resave: false,
//   saveUninitialized: false
// }))
// app.use(passport.initialize())
// app.use(passport.session())
// // view routes (to use sub apps concept later)
// app.get('/', checkAuthenticated, (req, res) => res.render('index.ejs', {name: req.user.name}))

// app.route('/register')
//   .get(allowIfNotAuthenticated, (req, res) => res.render('register.ejs'))
//   .post(allowIfNotAuthenticated, (req, res) => {
//     const {name, email, password} = req.body
//     const hashedPassword = crypto.createHash('sha256').update(password).digest('hex')
//     users.push({
//       id: Date.now().toString(),
//       name,
//       email,
//       password: hashedPassword
//     })
//     console.log(users)
//     res.redirect('/login')
//   })

// app.route('/login')
//   .get(allowIfNotAuthenticated, (req, res) => res.render('login.ejs', {name: 'to-do app'}))
//   .post(allowIfNotAuthenticated, passport.authenticate('local', {
//     successRedirect: 'http://localhost:8080',
//     failureRedirect: '/login',
//     failureFlash: true
//   }))

// app.route('/logout')
//   .get((req, res) => {
//     req.logOut()
//     res.redirect('/login')
//   })
// function checkAuthenticated (req, res, next) {
//   console.log('TCL: checkAuthenticated -> req.isAuthenticated()', req.isAuthenticated())
//   if (req.isAuthenticated()) return next()
//   else res.redirect('/login')
// }

// function allowIfNotAuthenticated (req, res, next) {
//   if (req.isAuthenticated()) return res.redirect('/')
//   else next()
// }
// API routes

const port = 5001

app.listen(port, () => {
  console.log(`server started on port: ${port}`)
})
