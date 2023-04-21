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
     <SponsorCard title='Partenaires du comité d’organisation (Panélistes) - 300 000 FCFA' benefits={[
      'Intégration du panel et du portfolio',
      'Interventions et prises de paroles pour la présentation de vos produits et services',
      '02 billets gratuits offerts',
      'Accès au Back Drop pour photos',
      'Accès à la grande Villa après la fête',
      'Roll up personnalisé avec les photos de l’entreprise dessus  à l’entrée de la salle',
     ]}  icon={general}/>
     <SponsorCard title='Le profil Exécutif - 500 000 FCFA' benefits={[
      'Vous pourrez profiter du Co-branding de la salle',
      'Vous bénéficiez du branding sur tous les supports de communication o Interventions et prises de paroles pour la présentation de vos produits et services',
      '03 billets gratuits offerts',
      'Accès au Back Drop pour photos',
      'Accès à la grande Villa après la fête  ',
     ]} icon={silver} />
     <SponsorCard title=' Le profil Fondateur - 1 000 000 FCFA' benefits={[
      
'Vous avez droit au titre de partenaire officiel',
'Vous pourrez profiter du Co-branding de la salle',
'Vous bénéficiez du branding sur tous les supports de',
'mmunication',
'Interventions et prises de paroles pour la présentation de vos produits et services',
'05 billets gratuits offerts',
'Accès au Back Drop pour photos',
'Accès au dîner et déjeuner d’affaire entre organisateur',
'Lobbying et réseautage',
'Accès à la grande Villa après la fête',
'Nous vous offrons une vidéo personnalisée de vous, vos produits et vos services.',
     ]} icon={gold} />
     <SponsorCard title='Le profil PDG - 2 000 000 FCFA' benefits={[
      'Vous avez droit au titre de partenaire ',
      'Vous aurez votre stand publicitaire durant tout l’évènement',
      'Vous pourrez profiter du Co-branding de la salle',
      'Vous bénéficiez du branding sur tous les supports de communication',
      'Interventions et prises de paroles pour la présentation de vos produits et services o 10 billets gratuits offerts',
      'Accès au Back Drop pour photos',
      'Mise en avant des produits et insertion dans le livret remis à chaque participant',
      'Accès au dîner et déjeuner d’affaire entre organisateurs',
      'Lobbying et réseautage',
      'Accès à la grande Villa après la fête',
      'Nous vous offrons une vidéo personnalisée de vous, vos produits et vos services o Espace d’exposition stratégique de vos produits',
      'Conception et impression de 50 dépliants couleurs et 200 N/B',
      'Conception et impression de 200 cartes de visites',
      'Publication de vos principales opportunités d’accompagnement d’entreprises',
      'Introduction d’un numéro dans la flotte d’appel communautaire pendant 02 mois o 05 photos professionnelles de produits et services',
     ]} icon={diamond} />
    </div>
    </div>
  </section>
  )
}


