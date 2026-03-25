import type { Route } from "./+types/pageNotFound";

export function loader({ params }: Route.LoaderArgs){
    return params;
}

export default function PageNotFound(loaderData: Route.ComponentProps){
    
    return <section className="flex flex-col justify-center items-center">
        <h1>404</h1>
        <h3>Page not found</h3>
        <h5 className="underline text-gray-900">{loaderData?.params["*"]}</h5>
    </section>;
}