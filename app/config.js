const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  urlDB: process.env.URL_MONGODB_DEV,
  jwtExpiration: process.env.JWT_EXP,
  jwtSecret: process.env.JWT_SECRET,
  gmail: process.env.GMAIL,
  password: process.env.PASSWORD,
  jwtRefreshTokenSecret: process.env.JWT_SECRET_REFRESH_TOKEN,
  jwtRefreshTokenExpiration: process.env.JWT_EXP_REFRESH_TOKEN,
};
