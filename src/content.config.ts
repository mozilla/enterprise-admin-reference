import { defineCollection, z } from "astro:content";
import { docsLoader, i18nLoader } from "@astrojs/starlight/loaders";
import { docsSchema, i18nSchema } from "@astrojs/starlight/schema";
import { changelogsLoader } from "starlight-changelogs/loader";

export const collections = {
  docs: defineCollection({
    loader: docsLoader(),
    schema: docsSchema({
      extend: z.object({
        category: z.string().optional(),
      }),
    }),
  }),
  changelogs: defineCollection({
    loader: changelogsLoader([
      {
        provider: "keep-a-changelog",
        base: "release-notes",
        title: "Firefox Release Notes for Enterprise",
        changelog: "release-notes/firefox.md",
        pageSize: 20,
        // See https://starlight-changelogs.netlify.app/providers/keep-a-changelog/#process
        // Headings are `157 - 2026-09-29`. Keep titles and slugs as `Firefox 157`.
        process: ({ title }) => {
          if (!/^\d/.test(title)) return title;
          // A malformed date would otherwise end up in the slug and silently move the page
          const match = /^(\d+)(?: - \d{4}-\d{2}-\d{2})?$/.exec(title);
          if (!match) throw new Error(`Release heading must be "157 - 2026-09-29", got "${title}"`);
          return `Firefox ${match[1]}`;
        },
      },
    ]),
  }),
  i18n: defineCollection({ loader: i18nLoader(), schema: i18nSchema() }),
};
