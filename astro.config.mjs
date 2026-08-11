// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightImageZoom from "starlight-image-zoom";
import mermaid from "astro-mermaid";
import mdx from "@astrojs/mdx";

export default defineConfig({
  site: "https://arpitsharma1306.github.io",
  base: "/Backend-Development-Module",
  integrations: [
    mermaid({
      theme: "dark",
      autoTheme: true,
    }),
    starlight({
      title: "Backend Notes",
      description:
        "Personal notes from working through backend engineering — Python internals, Django, PostgreSQL, Redis, Docker, Kubernetes, distributed systems, and the messy production problems nobody warns you about.",
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/arpitsharma1306/Backend-Development-Module",
        },
      ],
      plugins: [starlightImageZoom()],
      customCss: ["./src/styles/custom.css"],
      sidebar: [
        {
          label: "01 · Python Internals",
          autogenerate: { directory: "01-python-internals" },
        },
      ],
      editLink: {
        baseUrl:
          "https://github.com/arpitsharma1306/Backend-Development-Module/edit/main/",
      },
      lastUpdated: true,
    }),
    mdx(),
  ],
});
