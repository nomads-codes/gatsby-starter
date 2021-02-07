// ─────────────────────────────────────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────────────────────────────────────

module.exports = ({ actions, createContentDigest }) => {
  const { createTypes, createFieldExtension } = actions;

  createFieldExtension({
    name: 'mdx',
    extend: () => ({
      type: 'String',
      resolve(parent, args, context, info) {
        const value = parent[info.fieldName];
        if (typeof value !== 'string') {
          return value;
        }
        const mdxType = info.schema.getType('Mdx');
        const { resolve } = mdxType.getFields().body;
        return resolve({
          rawBody: value,
          internal: {
            contentDigest: createContentDigest(value),
          },
        });
      },
    }),
  });

  createTypes(`
    type Mdx implements Node {
      frontmatter: MdxFrontmatter
    }
    type MdxFrontmatter {
      links: [LinkValues]
    }
    type LinkValues {
      mdx: String @mdx
    }
  `);
};
