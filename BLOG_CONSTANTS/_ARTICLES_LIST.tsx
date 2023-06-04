import { iArticle } from "../src/shared/interfaces";

// Import author profiles, just type the name you have set in _BLOG_SETUP inside the curly brackets
import { MAYUR, RUPALI } from "./_BLOG_SETUP";

// main article list to display all atricles
/**
 * Example article object
 * 
 {
    path: "/pages/blog/react-and-next.tsx",
    preview: {
      author: MAYUR,
      date: "October 28, 2022",
      articleTitle: "React and Next.js",
      shortIntro:
        "This is a short article about React and its metaframework - Next.js",
      tags: "React, Next.js",
      thumbnail: "/public/images/react-next.png",
    },
    seo: {
      keywords:
        "demo, all components, style guide, styling, css, tailwind css, tailwind, webexpe, webexpe.com, styling tutorial, icons, how to use icons in website",
      ogImage: "/public/imp_assets/tutorials/how-to-write-first-article.svg",
    },
  },
}
 */

// clear this article list and add your own
const ARTICLES_LIST: iArticle[] = [
  {
    path: "/pages/blog/react-and-next.tsx",
    preview: {
      author: MAYUR,
      date: "October 28, 2022",
      articleTitle: "React and Next.js",
      shortIntro:
        "This is a short article about React and its metaframework - Next.js",
      tags: "React, Next.js",
      thumbnail: "/public/images/react-next.png",
    },
    seo: {
      keywords:
        "demo, all components, style guide, styling, css, tailwind css, tailwind, webexpe, webexpe.com, styling tutorial, icons, how to use icons in website",
      ogImage: "/public/imp_assets/tutorials/how-to-write-first-article.svg",
    },
  },
  {
    path: "/pages/blog/js-garbage-collector.tsx",
    preview: {
      author: MAYUR,
      date: "January 19, 2023",
      articleTitle: "Javascript garbage collector",
      shortIntro:
        "Blog about javascrupt garbagge collector",
      tags: "js, garbage collector",
      thumbnail: "/public/images/javascript.avif",
    },
    seo: {
      keywords:
        "demo, all components, style guide, styling, css, tailwind css, tailwind, webexpe, webexpe.com, styling tutorial, icons, how to use icons in website",
      ogImage: "/public/imp_assets/tutorials/how-to-write-first-article.svg",
    },
  },
];

export const SORTED_ARTICLES_BY_DATE = ARTICLES_LIST.sort((a, b) =>
  new Date(a.preview.date) > new Date(b.preview.date) ? -1 : 1
);
