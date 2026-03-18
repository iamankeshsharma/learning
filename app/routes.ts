import { type RouteConfig, index, route, prefix } from "@react-router/dev/routes";

import { ROUTES } from './constants/routes';

export default [
    index("routes/index.tsx"), 
    route(ROUTES.about.href, ROUTES.about.component),
    route(ROUTES.projects.href, ROUTES.projects.component),
    route(ROUTES.contact.href, ROUTES.contact.component),
    ...prefix(ROUTES.blog.href, [
        index(ROUTES.blog.component),
        route(":slug", "routes/Blog/blog.tsx")
    ]),
] satisfies RouteConfig;
