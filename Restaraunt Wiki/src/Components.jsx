import React, { useState } from 'react';

function Component() {
  const [currentPage, setCurrentPage] = useState(1);

  const groups = [
    {
      src: "/Restaraunts/Vue De Monde.jpg",
      alt: "Vue De Monde",
      heading: "Vue De Monde",
      subheading: "Location: Australia",
      paragraph: "Stars: 5 Stars",
      callToAction: "Michelin: 3 Stars",
      Link: "/",
      Link2: "/",
    },
    {
      src: "/Restaraunts/Addison.jpg",
      alt: "Addison",
      heading: "Addison",
      subheading: "Location: United States",
      paragraph: "Stars: 5 Stars",
      callToAction: "Michelin: 3 Stars",
      Link: "https://www.addisondelmar.com/",
      Link2: "/",
    },
    {
      src: "/Restaraunts/Zafran.jpg",
      alt: "Zafran",
      heading: "Zafran",
      subheading: "Location: Saudi Arabia",
      paragraph: "Stars: 4 Stars",
      callToAction: "Michelin: No Stars",
      Link: "https://www.zafranrestaurants.com/",
      Link2: "/",
    },
    {
      src: "/Restaraunts/L'Enclume.jpg",
      alt: "L'Enclume",
      heading: "L'Enclume",
      subheading: "Location: United Kingdom",
      paragraph: "Stars: 5 Stars",
      callToAction: "Michelin: 2 Stars",
      Link: "https://www.lenclume.co.uk/",
      Link2: "/",
    },
    {
      src: "/Restaraunts/la pergola etterem and pizzeria.jpg",
      alt: "la pergola etterem and pizzeria",
      heading: "la pergola etterem and pizzeria",
      subheading: "Location: Italy",
      paragraph: "Stars: 5 Stars",
      callToAction: "Michelin: No Stars",
      Link: "https://www.lapergola-etterem.hu/",
      Link2: "/",
    },
    {
      src: "/Restaraunts/Onslow.jpg",
      alt: "Onslow",
      heading: "Onslow",
      subheading: "Location: New Zealand",
      paragraph: "Stars: 5 Stars",
      callToAction: "Michelin: No Stars",
      Link: "/",
      Link2: "/",
    },
    {
      src: "/Restaraunts/Iraqitouchrestaraunt.jpg",
      alt: "Iraqi Touch",
      heading: "Iraqi Touch",
      subheading: "Location: Iraq",
      paragraph: "Stars: 4 Staars",
      callToAction: "Michelin: No Stars",
      Link: "/",
      Link2: "/",
    },
    {
      src: "/Restaraunts/BrisketAmman.jpg",
      alt: "Brisket Amman",
      heading: "Brisket Amman",
      subheading: "Location: Jordan",
      paragraph: "Stars: 5 Stars",
      callToAction: "Michelin: 1 Stars",
      Link: "/",
      Link2: "/",
    },
    {
      src: "/Restaraunts/Babel.jpg",
      alt: "Babel",
      heading: "Babel",
      subheading: "Location: Kuwait",
      paragraph: "Stars: 5 Stars",
      callToAction: "Michelin: No Stars",
      Link: "/",
      Link2: "/",
    },
    {
      src: "/Restaraunts/Habib Beirut.jpg",
      alt: "Habib Beirut",
      heading: "Habib Beirut",
      subheading: "Location: Lebanon",
      paragraph: "Stars: 5 Stars",
      callToAction: "Michelin: No Stars",
      Link: "/",
      Link2: "/",
    },
    {
      src: "/Restaraunts/naranj.jpg",
      alt: "naranj",
      heading: "Naranj",
      subheading: "Location: Syria",
      paragraph: "Stars: 4 Stars",
      callToAction: "Michelin: No Stars",
      Link: "/",
      Link2: "/",
    },
    {
      src: "/Restaraunts/Siraj.jpg",
      alt: "Siraj",
      heading: "Siraj",
      subheading: "Location: Emirates",
      paragraph: "Stars: 5 Stars",
      callToAction: "Michelin: 1 Stars",
      Link: "/",
      Link2: "/",
    },
    {
      src: "/Restaraunts/OttoeMezzoBombana.jpg",
      alt: "Otto e Mezzo Bombana",
      heading: "Otto e Mezzo Bombana",
      subheading: "Location: Hong Kong",
      paragraph: "Stars: 5 Stars",
      callToAction: "Michelin: No Stars",
      Link: "/",
      Link2: "/",
    },
    {
      src: "/Restaraunts/pondoklaguna.jpg",
      alt: "Pondo Laguna",
      heading: "Pondo Laguna",
      subheading: "Location: Indonesia",
      paragraph: "Stars: 5 Stars",
      callToAction: "Michelin: No Stars",
      Link: "/",
      Link2: "/",
    },
    {
      src: "/Restaraunts/OkazakiSushi.jpg",
      alt: "Okazaki Sushi",
      heading: "Okazaki Sushi",
      subheading: "Location: Japan",
      paragraph: "Stars: 5 Stars",
      callToAction: "Michelin: 1 Stars",
      Link: "/",
      Link2: "/",
    },
    {
      src: "/Restaraunts/AlSultanRestaurantBukitBintang.jpg",
      alt: "Al Sultan Restaurant Bukit Bintang",
      heading: "Al Sultan Bukit Bintang",
      subheading: "Location: Malaysia",
      paragraph: "Stars: 5 Stars",
      callToAction: "Michelin: 1 Stars",
      Link: "/",
      Link2: "/",
    },
    
    // Add the next 16 groups here...

    {
      src: "/Restaraunts/AlSultanRestaurantBukitBintang.jpg",
      alt: "Al Sultan Restaurant Bukit Bintang",
      heading: "Al Sultan Bukit Bintang",
      subheading: "Location: Malaysia",
      paragraph: "Stars: 5 Stars",
      callToAction: "Michelin: 1 Stars",
      Link: "/",
      Link2: "/",
    },
    
  ];

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="FullPage">
      <div className="content" style={{ marginLeft: '20px', marginRight: '20px', marginTop: '50px' }}>
        {groups.slice((currentPage - 1) * 16, currentPage * 16).map((group, index) => (
          <a href={group.Link2} className="group" key={index} style={{ marginRight: '20px', width: 'calc(25% - 20px)', marginBottom: '20px' }}>
            <img
              className="img"
              src={group.src}
              alt={group.alt}
              style={{ width: '100%', height: '150px', objectFit: 'cover' }}
            />
            <div className="text">
              <p className="heading" style={{ textAlign: 'center' }}>{group.heading}</p>
              <p className="subheading">{group.subheading}</p>
              <p className="paragraph">{group.paragraph}</p>
              <p className="call-to-action">{group.callToAction}</p>
              <div className="Linkgroups">
                <a href={group.Link} className="Linkgroup">Main Website</a>
              </div>
            </div>
          </a>
        ))}
      </div>
      <div className="carousel-buttons">
        <a href="#" onClick={() => handlePageChange(1)} className="carousel-button">1</a>
        <span style={{ margin: '0 10px' }}></span>
        <a href="#" onClick={() => handlePageChange(2)} className="carousel-button">2</a>
        <span style={{ margin: '0 10px' }}></span>
        <a href="#" onClick={() => handlePageChange(3)} className="carousel-button">3</a>
        <span style={{ margin: '0 10px' }}></span>
        <a href="#" onClick={() => handlePageChange(4)} className="carousel-button">4</a>
      </div>
    </div>
  );
}

export default Component;