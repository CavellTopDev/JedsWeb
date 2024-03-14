const path = require("path");

async function createPages({ actions, graphql }) {
  const { createPage } = actions;
  await createDocumentPages(createPage, graphql);
  await createIntegrationPages(createPage, graphql);
}

async function createDocumentPages(createPage, graphql) {
  const template = path.resolve(`src/templates/document.tsx`);
  const documents = await graphql(`
    query CreateDocumentPages {
      allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }, limit: 1000) {
        edges {
          node {
            fileAbsolutePath
            frontmatter {
              path
              title
              weight
              breadcrumbOnly
            }
          }
        }
      }
    }
  `);

  if (documents.errors) {
    throw new Error(documents.errors);
  }

  const relPathDirInfo = {};
  for (const { node } of documents.data.allMarkdownRemark.edges) {
    const relPath = path.relative("src/pages", node.fileAbsolutePath);
    const relPathDir = path.dirname(relPath);
    relPathDirInfo[relPathDir] = {
      title: node.frontmatter.title,
      path: node.frontmatter.path
    };
  }

  function getBreadcrumb(relPath) {
    const result = [];

    while (relPath !== ".") {
      if (relPath in relPathDirInfo) {
        result.splice(0, 0, relPathDirInfo[relPath]);
      }
      relPath = path.dirname(relPath);
    }

    result.pop();

    return result;
  }

  documents.data.allMarkdownRemark.edges.forEach(({ node }) => {
    if (node.frontmatter.path && node.frontmatter.breadcrumbOnly !== true) {
      const breadcrumb = getBreadcrumb(path.relative("src/pages", node.fileAbsolutePath));

      createPage({
        path: node.frontmatter.path,
        component: template,
        context: {
          breadcrumb
        }
      });
    }
  });
}

async function createIntegrationPages(createPage, graphql) {
  const template = path.resolve(`src/templates/integration.tsx`);
  const integrations = await graphql(`
    query CreateIntegrationPages {
      allIntegrationsJson {
        edges {
          node {
            path
          }
        }
      }
    }
  `);

  if (integrations.errors) {
    throw new Error(integrations.errors);
  }

  integrations.data.allIntegrationsJson.edges.forEach(({ node }) => {
    if (node.path) {
      createPage({
        path: node.path,
        component: template
      });
    }
  });
}

function onCreateWebpackConfig({ actions, stage }) {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "@heydovetail/website": path.resolve(__dirname, "./src")
      }
    }
  });
}

module.exports = {
  createPages,
  onCreateWebpackConfig
};
