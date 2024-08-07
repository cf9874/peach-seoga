require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: "피치서가",
    siteUrl: "https://www-qa.peachseoga.com",
    id: "G-6H7MBJEYSN",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    // `gatsby-plugin-image`,
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `images`,
    //     path: `${__dirname}/src/images`,
    //   },
    // },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/peach-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    "gatsby-plugin-resolve-src",
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    "gatsby-plugin-use-query-params",
    {
      resolve: `gatsby-plugin-env-variables`,
      options: {
        allowList: [
          "TITLE",
          "TOKEN_ID",
          "API_URL",
          "API_SAMPLE_TOKEN",
          "S3_URL_RAW",
          "S3_URL_PUB",
          "IDC",
          "GEN_MID",
          "REG_MID",
          "REGISTRY_NAME",
          "IMG",
          "RAW",
          "API",
          "SHOP",
          "SETUP",
          "CHANNELKEY",
        ],
      },
    },
    {
      resolve: "gatsby-plugin-load-script",
      options: {
        src: "/pixi.js", // Change to the script filename
      },
    },
    {
      resolve: "gatsby-plugin-load-script",
      options: {
        src: "/pdf.js", // Change to the script filename
      },
    },
    {
      resolve: "gatsby-plugin-load-script",
      options: {
        src: "https://code.jquery.com/jquery-1.12.4.min.js", // Change to the script filename
      },
    },
    {
      resolve: "gatsby-plugin-load-script",
      options: {
        src: "https://cdn.iamport.kr/js/iamport.payment-1.1.8.js", // Change to the script filename
      },
    },
    {
      resolve: `gatsby-plugin-lodash`,
      options: {
        disabledFeatures: [`shorthands`, `cloning`],
      },
    },
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        trackingId: `G-6H7MBJEYSN`,
        head: true,
        anonymize: true,
      },
    },
    "@mediacurrent/gatsby-plugin-silence-css-order-warning",
    `gatsby-plugin-remove-trailing-slashes`,
  ],
}
