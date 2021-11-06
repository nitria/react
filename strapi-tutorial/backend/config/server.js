module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '97ed37b4cdabd5ce9bc87ccfd2a8c87d'),
    },
  },
});
