// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightGitHubAlerts from "starlight-github-alerts";
import starlightChangelogs, { makeChangelogsSidebarLinks } from "starlight-changelogs";
import starlightLinksValidator from "starlight-links-validator";

export const locales = {
  root: { label: "English", lang: "en" },
  // fr: { label: "Français", lang: "fr" },
};

// https://astro.build/config
export default defineConfig({
  output: "static",
  trailingSlash: "always",
  redirects: {
    "/reference/policies/searchengines--add/": "/reference/policies/searchengines/",
    "/reference/policies/searchengines--default/": "/reference/policies/searchengines/",
    "/reference/policies/searchengines--preventinstalls/": "/reference/policies/searchengines/",
    "/reference/policies/searchengines--remove/": "/reference/policies/searchengines/",
  },
  devToolbar: {
    enabled: false,
  },
  // Don't render `"` as smart quotes:
  markdown: {
    smartypants: false,
  },
  integrations: [
    starlight({
      components: {
        PageTitle: "./src/components/PageTitleWithBreadcrumbs.astro",
      },
      customCss: [
        // Relative path to a custom CSS file
        "./src/styles/custom.css",
        "./src/fonts/font-face.css",
      ],
      // editLink: {
      //   baseUrl: "https://github.com/mozilla/enterprise-admin-reference/edit/main/",
      // },
      expressiveCode: {
        styleOverrides: { borderRadius: "0.2rem" },
        shiki: {
          // Allow using the alias 'url' for plaintext lang
          langAlias: {
            url: "plaintext",
          },
        },
      },
      favicon: "/favicon.png",
      lastUpdated: true,
      plugins: [starlightGitHubAlerts(), starlightChangelogs(), starlightLinksValidator()],
      sidebar: [
        {
          label: "Reference",
          items: [{ autogenerate: { directory: "reference" } }],
          collapsed: true,
        },
        {
          label: "Guides",
          items: [{ autogenerate: { directory: "guides" } }],
        },
        {
          label: "Resources",
          items: [{ label: "Support", slug: "support" }],
        },
        {
          label: "Changelog",
          items: [
            ...makeChangelogsSidebarLinks([
              {
                type: "recent",
                base: "changelog",
                count: 10,
              },
            ]),
          ],
        },
      ],
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/mozilla/enterprise-admin-reference",
        },
      ],
      title: "Firefox administrator reference",
    }),
  ],
  site: "https://firefox-admin-docs.mozilla.org",
});
