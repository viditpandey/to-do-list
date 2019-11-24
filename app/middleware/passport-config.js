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

module.exports = initialize
