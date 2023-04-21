import Speaker from "./features/speakers/Speaker";
import Tickets from "./features/tickets/Tickets";
import Contact from "./features/contacts/Contact";
import Sponsors from "./features/sponsors/Sponsors";
import Header from "./features/header/Header";
import Hero from "./features/Hero/Hero";
import About from "./features/about/About";
import Footer from "./features/footer/Footer";
import Fab from "./features/Fab";
import React from "react";
export default function Home() {
  const [screenWidth, setScreenWidth] = React.useState(window.innerWidth);
  React.useEffect(() => {
    function handleResize() {
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
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
{ screenWidth <400 ?<div className="h-24"></div>
: null}<About />
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
