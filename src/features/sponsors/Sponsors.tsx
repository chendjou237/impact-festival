import React from 'react'
import SponsorCard from './SponsorCard'
import diamond from "../../assets/diamond.svg"
import silver from "../../assets/silver.svg"
import general from "../../assets/general.svg"
import gold from "../../assets/gold.svg"

export default function Sponsors() {
  return (
    <section id="sponsors" className="relative bg-white pt-16 pb-24 px-8">
     <div className="absolute inset-0   skew-y-3 bg-background "></div>
  <div className="relative ">
    <h2 className="text-4xl font-bold mb-8 text-center text-lightHeading font-cinzel">SPONSORS</h2>
    <hr className="mx-auto mb-16 border-primary border-solid border-2 w-16 rounded-full" />

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
     <SponsorCard title='Général - (25 000 FCFA)' benefits={[
      'Accès aux 3jrs impacts festival',
      'Accès casse-croute',
      'Acces aux interview Q/R',
      'Accès au au reseautage'
     ]}  icon={general}/>
     <SponsorCard title='Silver - (50.000 FCFA)' benefits={[
      'Accès au livre de la communauté',
      'Réunion avec les panelistes',
      'Accès aux 3jrs impacts festival',
      'Accès casse-croute',
      'Acces aux interview Q/R',
      'Accès au au reseautage'  
     ]} icon={silver} />
     <SponsorCard title='Gold - (100.000 FCFA)' benefits={[
      'Acces a la chaise Gold (next VIP)',
      'Déjeuner et dinner d’affaires',
      'Réunion avec les panelistes',
      'Acces gratuit au livre de la communauté',
      'Accès aux 3jrs impacts festival',
      'Accès casse-croute',
      'Acces aux interview Q/R',
      'Accès au au reseautage'
     ]} icon={gold} />
     <SponsorCard title='Diamond - (200.000 FCFA)' benefits={[
      'Opportunité de pitcher aux investisseurs sur ton projet',
      'Acces a la chaise diamond (VIP)',
      'Accès déjeuner et dinner d’affaires',
      'Cadeaux diamond',
      'Acces gratuit au livre de la communauté',
      'Accès aux 3jrs impacts festival',
      'Accès casse-croute',
      'Acces aux interview Q/R',
      'Accès au au reseautage'
     ]} icon={diamond} />
    </div>
    </div>
  </section>
  )
}


