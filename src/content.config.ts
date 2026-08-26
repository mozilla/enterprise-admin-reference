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
        process: ({ title }) => (/^\d/.test(title) ? `Firefox ${title}` : title),
      },
    ]),
  }),
  i18n: defineCollection({ loader: i18nLoader(), schema: i18nSchema() }),
};
