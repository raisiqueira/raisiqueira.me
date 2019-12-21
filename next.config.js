const withImage = require('next-images');
const glob = require("glob")

module.exports = withImage({
  webpack: config => {
    config.module.rules.push({
      test: /\.md$/,
      use: "frontmatter-markdown-loader"
    })
    return config
  },
  exportPathMap: async function(defaultPathMap) {
    // get all .md files in the posts dir
    const blogPostFiles = glob.sync("content/blog/**/*.md")

    // remove path and extension to leave filename only
    const blogPostSlugs = blogPostFiles.map(file =>
      file
        .split("/")[2]
        .replace(/ /g, "-")
        .slice(0, -3)
        .trim()
    )

    const createPathObject = (pathObject, slug) => {
      return {
        ...pathObject,
        [`/blog/post/${slug}`]: {
          page: "/blog/post/[slug]",
          query: { slug: slug }
        }
      }
    }
    const blogPostsPathMap = blogPostSlugs.reduce(createPathObject, {})

    return {
      ...defaultPathMap,
      ...blogPostsPathMap
    }
  }
})
