import React from "react";

const Menu = ({allMenues}) => {
  console.log(allMenues);
  return (
    <div className="section-center">
      {allMenues.map((menuItem) => (
        <>

        <article className="menu-item">
          <img src={menuItem.img} className="photo" />
          <div className="item-info">
            <header>
              <h4>{menuItem.title}</h4>
              <h4 className="price">${menuItem.price}</h4>
            </header>
            <p className="item-text">{menuItem.desc}</p>
          </div>
        </article>
        </>
      ))}
    </div>
  );
};

export default Menu;
