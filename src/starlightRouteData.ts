import { defineRouteMiddleware } from "@astrojs/starlight/route-data";

const versionPagePath = /^\/release-notes\/version\/firefox-(?<version>[^/]+)\/$/;

export const onRequest = defineRouteMiddleware((context) => {
  const version = context.url.pathname.match(versionPagePath)?.groups?.version;
  // Skip the `154...latest` comparison pages, which cover a range of releases.
  if (!version || version.includes("...")) return;

  const { starlightRoute } = context.locals;
  const title = `Firefox ${version} release notes for enterprise admins`;

  starlightRoute.entry.data.title = title;

  for (const tag of starlightRoute.head) {
    if (tag.tag === "title") {
      tag.content = `Firefox ${version} release notes | ${starlightRoute.siteTitle}`;
    } else if (tag.tag === "meta" && tag.attrs?.property === "og:title") {
      tag.attrs.content = title;
    }
  }
});
