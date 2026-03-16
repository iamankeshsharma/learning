import type { Route } from "./+types/index";
import { Welcome } from "../components/welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Portfolio" },
    { name: "description", content: "New portfolio" },
  ];
}

export default function Home() {
  return <Welcome/>;
}
