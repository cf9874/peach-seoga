/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it
// Replacing '/' would result in empty string which is invalid
// const replacePath = path => (path === `/` ? path : path.replace(/\/$/, ``))
// Implement the Gatsby API “onCreatePage”. This is
// called after every page is created.
// exports.onCreatePage = ({ page, actions }) => {
//   const { createPage, deletePage } = actions
//   const oldPage = Object.assign({}, page)
//   // Remove trailing slash unless page is /
//   page.path = replacePath(page.path)
//   if (page.path !== oldPage.path) {
//     // Replace old page with new page
//     deletePage(oldPage)
//     createPage(page)
//   }
// }

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html" || stage === "develop-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /fingerprintjs/,
            use: loaders.null(),
          },
          {
            test: /pixi/,
            use: loaders.null(),
          },
          {
            test: /bundle/,
            use: loaders.null(),
          },
          {
            test: /quill-video-resize-module2/,
            use: loaders.null(),
          },
          {
            test: /quill-image-resize-module-react/,
            use: loaders.null(),
          },
          {
            test: /custom-protocol-check/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}

exports.onCreatePage = ({ page, actions }) => {
  console.log(page)
  console.log(actions)
}
