/**
 * Auto-import the policy page components (`<PolicyExample />`, `<PolicyCompat />`)
 * into pages under `reference/policies`, so `.mdx` files don't need import lines
 */

const COMPONENTS = [
  { name: "PolicyExample", source: "/src/components/PolicyExample.astro" },
  { name: "PolicyCompat", source: "/src/components/PolicyCompat.astro" },
];

function makeImportNode({ name, source }) {
  return {
    type: "mdxjsEsm",
    value: `import ${name} from "${source}";`,
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
                local: { type: "Identifier", name },
              },
            ],
            source: {
              type: "Literal",
              value: source,
              raw: `"${source}"`,
            },
          },
        ],
      },
    },
  };
}

export default function remarkAutoImportPolicyComponents() {
  return (tree, file) => {
    const path = file.history[0] || file.path || "";
    if (!path.includes("/reference/policies/") || !path.endsWith(".mdx")) {
      return;
    }

    // Import only what the page uses. If the source isn't readable, import
    // everything: an unused import is harmless, a missing one fails the build.
    const source = String(file.value ?? "");

    const imports = COMPONENTS.filter(({ name }) => {
      const used = source === "" || source.includes(`<${name}`);
      // Skip if the page already imports it.
      const alreadyImported = tree.children.some(
        (node) => node.type === "mdxjsEsm" && node.value.includes(name),
      );
      return used && !alreadyImported;
    }).map(makeImportNode);

    if (imports.length > 0) {
      tree.children.unshift(...imports);
    }
  };
}
