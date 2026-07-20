/**
 * Auto-import the `<PolicyExample />` component into every policy page under
 * `reference/policies`, so `.mdx` files don't need an explicit import
 */

const IMPORT_SOURCE = "/src/components/PolicyExample.astro";
const COMPONENT_NAME = "PolicyExample";

function makeImportNode() {
  return {
    type: "mdxjsEsm",
    value: `import ${COMPONENT_NAME} from "${IMPORT_SOURCE}";`,
    data: {
      estree: {
        type: "Program",
        sourceType: "module",
        body: [
          {
            type: "ImportDeclaration",
            specifiers: [
              {
                type: "ImportDefaultSpecifier",
                local: { type: "Identifier", name: COMPONENT_NAME },
              },
            ],
            source: {
              type: "Literal",
              value: IMPORT_SOURCE,
              raw: `"${IMPORT_SOURCE}"`,
            },
          },
        ],
      },
    },
  };
}

export default function remarkAutoImportPolicyExample() {
  return (tree, file) => {
    const path = file.history[0] || file.path || "";
    if (!path.includes("/reference/policies/") || !path.endsWith(".mdx")) {
      return;
    }
    // Skip if the page already imports it or never uses it.
    const alreadyImported = tree.children.some(
      (node) => node.type === "mdxjsEsm" && node.value.includes(COMPONENT_NAME),
    );
    if (alreadyImported) return;

    tree.children.unshift(makeImportNode());
  };
}
