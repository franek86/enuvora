import Image from "next/image";
import MainLayout from "./components/layouts/MainLayout";
import Hero from "./components/home/hero";

export default function Home() {
  return (
    <MainLayout>
      <Hero />
    </MainLayout>
  );
}
