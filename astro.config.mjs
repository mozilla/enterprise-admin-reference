// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightGitHubAlerts from "starlight-github-alerts";
import starlightChangelogs, {
  makeChangelogsSidebarLinks,
} from "starlight-changelogs";

export const locales = {
  root: { label: "English", lang: "en" },
  // de: { label: "Deutsch", lang: "de" },
  // fr: { label: "Français", lang: "fr" },
};

// https://astro.build/config
export default defineConfig({
  devToolbar: {
    enabled: false,
  },
  // Don't render `"` as smart quotes:
  markdown: {
    smartypants: false,
  },
  integrations: [
    starlight({
      customCss: [
        // Relative path to a custom CSS file
        "./src/styles/custom.css",
        "./src/fonts/font-face.css",
      ],
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
      locales,
      plugins: [starlightGitHubAlerts(), starlightChangelogs()],
      sidebar: [
        {
          label: "Reference",
          autogenerate: { directory: "reference" },
        },
        {
          label: "Guides",
          autogenerate: { directory: "guides" },
        },
        {
          label: "Resources",
          items: [{ label: "Support", slug: "support" }],
        },
      ],
      title: "Firefox administrator reference",
    }),
  ],
});
