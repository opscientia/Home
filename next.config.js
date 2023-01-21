module.exports = {
    async redirects() {
      return [
        {
          source: '/research',
          destination: '/',
          permanent: false,
        },
      ]
    },
  }