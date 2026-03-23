import type { Route } from "./+types/about";


type loaderDataType = {
    loaderData:{
        name: string;
    description:string;
    version:string;
    }
};

// Server Loader
export async function loader({ params }: Route.LoaderArgs){
    return {data:"test"};
}

// Client loader
// export async function clientLoader(){
//     const data = await fetch(`${import.meta.env.VITE_API_BASE}/about`);
//     return data.json();
// }

export default function About({loaderData}: loaderDataType){
    return <h1>
        {Object.keys(loaderData)?.map((i:string)=>{
            return loaderData[i as keyof typeof loaderData];
        })}
    </h1>;
}