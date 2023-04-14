import Speaker from "./features/speakers/Speaker";
import Tickets from "./features/tickets/Tickets";
import Contact from "./features/contacts/Contact";
import Sponsors from "./features/sponsors/Sponsors";
import Header from "./features/header/Header";
import Hero from "./features/Hero/Hero";
import About from "./features/about/About";
import Footer from "./features/footer/Footer";
import Fab from "./features/Fab";
export default function Home() {
  return (
    <html>
      <head>
        <title>
          Impact Festival
        </title>

        <style>
    
        </style>
      </head>

      <body>
      <div>
      <main className="bg-white">
        <Header />
<Hero />
<About />
        <Speaker />

        <Sponsors />

        <Tickets />
        <Contact />
        <Footer />
        <Fab />
      </main>
    </div>
      </body>
    </html>

  );
}
