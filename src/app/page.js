import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import Project from "@/components/Project";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <NavBar />
      <Hero />
      <Project />
    </div>
  );
}
