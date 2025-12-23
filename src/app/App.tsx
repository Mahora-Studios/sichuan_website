import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { MenuDownload } from "./components/MenuDownload";
import { Reservations } from "./components/Reservations";
import { Orders } from "./components/Orders";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <MenuDownload />
      <Reservations />
      <Orders />
      <Contact />
      <Footer />
    </div>
  );
}