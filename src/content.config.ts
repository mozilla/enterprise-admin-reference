import { defineCollection, z } from "astro:content";
import { docsLoader } from "@astrojs/starlight/loaders";
import { docsSchema } from "@astrojs/starlight/schema";
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
        base: "changelog",
        changelog: "CHANGELOG.md",
        // see https://starlight-changelogs.netlify.app/providers/keep-a-changelog/#process
        process: ({ title }) => {
          if (title.startsWith("ent-")) return `Firefox Enterprise ${title.slice(4)}`;
          if (title.startsWith("esr-")) return `Firefox ESR ${title.slice(4)}`;
          if (title.startsWith("fx-")) return `Firefox ${title.slice(3)}`;
          return title;
        },
      },
    ]),
  }),
};
