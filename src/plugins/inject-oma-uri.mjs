/**
 * Inject an `**OMA-URI:**` line into the compat section of reference pages.
 *
 * The OMA-URIs live in mozilla/policy-templates, auto-generated from
 * `windows/firefox.admx`.
 */

const DOC_URL = "https://mozilla.github.io/policy-templates/oma-uris";

// Policies with no ADMX equivalent.
const NO_ADMX_EQUIVALENT = new Set([
  "3rdparty", // The extension developer supplies their own ADMX.
  "DisableLocalPolicies", // Registry bootstrap, outside the ADMX namespace.
  "DisablePocket", // Deprecated, deliberately omitted upstream.
  "EnterprisePoliciesEnabled", // Registry bootstrap, outside the ADMX namespace.
  "MicrosoftEntraSSO", // macOS only.
]);

// TODO: Missing from `firefox.admx`
const MISSING_UPSTREAM = new Set([
  "AccessConnector",
  "AIChatbot",
  "CrashReportsSubmit",
  "DisableAccounts",
  "RelaunchRequired",
  "Sync",
]);

const warned = new Set();

/** The `**CCK2 Equivalent:**` line the OMA-URI link is inserted below. */
function isCck2Label(node) {
  return (
    node.type === "strong" &&
    node.children.length === 1 &&
    node.children[0].type === "text" &&
    node.children[0].value === "CCK2 Equivalent:"
  );
}

function makeOmaUriNodes(policy) {
  return [
    { type: "break" },
    { type: "strong", children: [{ type: "text", value: "OMA-URI:" }] },
    { type: "text", value: " " },
    {
      type: "link",
      url: `${DOC_URL}#${policy.toLowerCase()}`,
      children: [{ type: "inlineCode", value: policy }],
    },
  ];
}

export default function remarkInjectOmaUri() {
  return (tree, file) => {
    const path = file.history[0] || file.path || "";
    if (!path.includes("/reference/policies/") || !path.endsWith(".mdx")) {
      return;
    }

    const policy = path.slice(path.lastIndexOf("/") + 1, -".mdx".length);

    if (NO_ADMX_EQUIVALENT.has(policy)) {
      return;
    }

    if (MISSING_UPSTREAM.has(policy)) {
      if (!warned.has(policy)) {
        warned.add(policy);
        console.warn(`[inject-oma-uri] no upstream OMA-URI for "${policy}"; not in firefox.admx`);
      }
      return;
    }

    // The compat section is a single paragraph of bold labels joined by hard
    // breaks: `**CCK2 Equivalent:** …\` then `**Preferences Affected:** …`.
    const paragraph = tree.children.find(
      (node) => node.type === "paragraph" && node.children.some(isCck2Label),
    );

    if (!paragraph) {
      throw new Error(
        `[inject-oma-uri] no "**CCK2 Equivalent:**" line in ${policy}.mdx. ` +
          `Add one, or add "${policy}" to NO_ADMX_EQUIVALENT or MISSING_UPSTREAM ` +
          `in src/plugins/inject-oma-uri.mjs.`,
      );
    }

    const labels = paragraph.children;

    if (labels.some((node) => node.type === "link" && node.url.startsWith(DOC_URL))) {
      return;
    }

    // Insert after the `break` that terminates the CCK2 line.
    const cck2 = labels.findIndex(isCck2Label);
    const lineEnd = labels.findIndex((node, i) => i > cck2 && node.type === "break");
    const at = lineEnd === -1 ? labels.length : lineEnd;

    labels.splice(at, 0, ...makeOmaUriNodes(policy));
  };
}
