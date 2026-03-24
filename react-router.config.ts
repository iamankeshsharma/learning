import type { Config } from "@react-router/dev/config";
import { BLOG_SLUGS } from "app/constants/blogs";

export default {
  // Config options...
  // Server-side render by default, to enable SPA mode set this to `false`
  async prerender(){
    
    return BLOG_SLUGS?.map(
      (slug) => `blog/${slug}`,
    );
  },
  ssr: true,
} satisfies Config;
