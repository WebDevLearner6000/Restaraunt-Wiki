import React, { useState } from 'react';

function UnitedStates() {
  const [currentPage, setCurrentPage] = useState(1);

  const groups = [
    {
      src: "/Restaraunts/Addison.jpg",
      alt: "Addison",
      heading: "Addison",
      subheading: "Location: United States",
      paragraph: "Stars: 5 Stars",
      callToAction: "Michelin: 3 Stars",
      Link: "https://www.addisondelmar.com/",
      Link2: "/Addison",
    },
  ];

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
    </div>
  );
}

export default UnitedStates;