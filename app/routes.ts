import { type RouteConfig, index, route } from "@react-router/dev/routes";

import { ROUTES } from './constants/routes';

export default [
    index("routes/index.tsx"), 
    route(ROUTES.about.href, ROUTES.about.component),
    route(ROUTES.projects.href, ROUTES.projects.component),
    route(ROUTES.blog.href, ROUTES.blog.component),
    route(ROUTES.contact.href, ROUTES.contact.component),
] satisfies RouteConfig;
