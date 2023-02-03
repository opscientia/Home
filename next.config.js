module.exports = {
    async redirects() {
      return [
        {
          source: '/research',
          destination: '/',
          permanent: true,
        },
      ]
    },
    env: {
      SIB: process.env.SIB,
      MONGODB_URI: process.env.MONGODB_URI
    }
  }