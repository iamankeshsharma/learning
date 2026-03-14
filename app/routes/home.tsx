import type { Route } from "./+types/home";
import { Welcome } from "../components/welcome/welcome";
import { Aside } from "../components/aside/aside";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Portfolio" },
    { name: "description", content: "New portfolio" },
  ];
}

export default function Home() {
  return <section className="w-full flex">
    <Aside />
    <Welcome />
  </section>;
}
