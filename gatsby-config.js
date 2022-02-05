module.exports = {
  siteMetadata: {
      title: `Thijs Onwijs`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [{
    resolve: 'gatsby-source-datocms',
    options: {
      "apiToken": "2a864edf4fbf351ec766f14c14f659"
    }
  }, {
    resolve: 'gatsby-plugin-google-analytics',
    options: {
      "trackingId": ""
    }
  }, "gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }]
};