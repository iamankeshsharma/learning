import type { Route } from "./+types/blog";

export default function Blog({params}:Route.ComponentProps){
    return <h1>
        {params?.slug}
    </h1>;
}