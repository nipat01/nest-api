export default () => ({
  jwt: {
    scret: process.env.JWT_SECRET_KEY,
    expiresIn: process.env.TOKEN_EXPIRES_IN,
  },
});
