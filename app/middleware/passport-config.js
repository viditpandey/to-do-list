const LocalStrategy = require('passport-local').Strategy
const crypto = require('crypto')

function initialize (passport, getUserByEmail, getUserById) {
  const authenticateUser = (email, password, done) => {
    try {
      const user = getUserByEmail(email)
      if (!user) return done(null, false, {message: `No user w/ email found`})
      const hashedPassword = crypto.createHash('sha256').update(password).digest('hex')
      if (hashedPassword === user.password) return done(null, user)
      else return done(null, false, {message: `incorrect password`})
    } catch (error) {
      return done(error)
    }
  }

  passport.use(new LocalStrategy({usernameField: 'email'}, authenticateUser))
  passport.serializeUser((user, done) => done(null, user.id))
  passport.deserializeUser((id, done) => done(null, getUserById(id)))
}

function checkAuthenticated (req, res, next) {
  if (req.isAuthenticated()) return next()
  else res.redirect('/login')
}

function allowIfNotAuthenticated (req, res, next) {
  if (req.isAuthenticated()) return res.redirect('/')
  else next()
}

function createHash (password) { return crypto.createHash('sha256').update(password).digest('hex') }

module.exports.initializePassport = initialize
module.exports.checkAuthenticated = checkAuthenticated
module.exports.allowIfNotAuthenticated = allowIfNotAuthenticated
module.exports.createHash = createHash
