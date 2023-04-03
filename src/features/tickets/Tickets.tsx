import { useEffect, useRef, useState } from "react";
import TicketsCard from "./TicketsCard";
import "../../animation.css";
function Tickets() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
var count = 0;
  useEffect(() => {
    const options = {
      rootMargin: "-50px 0px",
    };

    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(count < 1 ?entry.isIntersecting: true);
      count++
    }, options);
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div className="App">
      <section
        id="tickets"
        className={`bg-white pt-16 pb-24 px-8 `}
        ref={sectionRef}
      >
        <div className={  isVisible ? "animate-slide-in" : ""
        }>
        <h2 className="text-4xl font-bold mb-4 text-center text-background">
          TICKETS
        </h2>
        <hr className="mx-auto mb-8 border-primary border-solid border-2 w-16 rounded-full" />
        <p className="text-lg leading-relaxed text-center mb-2">
          Each ticket comes with a bundle of benefits so read the benefits
          carefully before buying :)
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <TicketsCard />
          <TicketsCard />
          <TicketsCard />
    
          </div>    </div>
      </section>
    </div>
    
  );
}

export default Tickets;
