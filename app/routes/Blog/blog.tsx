import type { Route } from "./+types/blog";
import { BLOG_SLUGS } from "app/constants/blogs";

type loaderDataType = {
    loaderData:[
        {
        id:number;
        title:string;
        slug:string;
    }
    ]
};

export async function loader({ params }: Route.LoaderArgs){
    
    return BLOG_SLUGS?.filter(
        x=>(params?.slug === x?.slug)
    );
}

export default function Blog({ loaderData, }: loaderDataType){
    return <h1>
        {loaderData[0]?.title}
    </h1>;
}