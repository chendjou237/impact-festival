import Speaker from "./features/speakers/Speaker";
import Tickets from "./features/tickets/Tickets";
import Contact from "./features/contacts/Contact";
import Sponsors from "./features/sponsors/Sponsors";
import Header from "./features/header/Header";
import Hero from "./features/Hero/Hero";
import About from "./features/about/About";
export default function Home() {
  return (
    <div>
      <main className="bg-white">
        <Header />
<Hero />
<About />
        <Speaker />

        <Sponsors />

        <Tickets />
        <Contact />
      </main>
    </div>
  );
}
