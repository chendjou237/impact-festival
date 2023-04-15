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
    <div className="">
      <section
        id="tickets"
        className={`bg-white pt-16 pb-24 px-8 `}
        ref={sectionRef}
      >
        <div className={  isVisible ? "animate-slide-in" : ""
        }>
        <h2 className="text-4xl font-bold mb-4 text-center text-background font-cinzel">
          TICKETS
        </h2>
        <hr className="mx-auto mb-8 border-primary border-solid border-2 w-16 rounded-full" />
        <p className="text-lg leading-relaxed text-center mb-2 font-alexandra">
        Chaque billet est accompagné d'un ensemble d'avantages, alors lisez les avantages
          soigneusement avant d'acheter :)
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <TicketsCard phone="+237652573659" message="hello i would like a general ticket " src="/static/images/tickets/ticket_general.png" color="general"/>
          <TicketsCard phone="+237652573659" message="hello i would like a silver ticket " src="/static/images/tickets/ticket_silver.png" color="silver"/>
          <TicketsCard phone="+237652573659" message="hello i would like a gold ticket " src="/static/images/tickets/ticket_gold.png"  color="gold"/>
          <TicketsCard phone="+237652573659" message="hello i would like a diamond ticket " src="/static/images/tickets/ticket_diamond.png" color="diamond"/>
          
    
          </div>    </div>
      </section>
    </div>
    
  );
}

export default Tickets;
