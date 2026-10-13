import MainLayout from "./components/layouts/MainLayout";
import Hero from "./components/home/Hero";
import HomeValues from "./components/home/HomeValues";
import Favourites from "./components/home/Favourites";

export default function Home() {
  return (
    <MainLayout>
      <Hero />
      <HomeValues />
      <Favourites />
    </MainLayout>
  );
}
