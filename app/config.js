const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  urlDB: process.env.URL_MONGODB_DEV,
  jwtExpiration: process.env.JWT_EXP,
  jwtSecret: process.env.JWT_SECRET,
  gmail: process.env.GMAIL,
  password: process.env.PASSWORD
}