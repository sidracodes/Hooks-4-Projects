const MenuCard = ({menuData}) => {
  return (
    <>
    <section className="main-card--cointainer">
        {
        menuData.map((currentElement) => {
          const { id, name, image, category, price, description } = currentElement;
          return (
            <>
        <div className="card-container">
        <div className="card">
          <div className="card-body" key={id}>
            <span className="card-number card-circle card-subtitle">{id}</span>
            <span className="card-author card-subtitle">{category}</span>
            <h2 className="card-title">{name}</h2>
            <span className="card-description card-subtitle">{description}</span>
            <div className="card-read">Read</div>
          </div>
          <img src={image} alt="" className="card-media" />
          <span className="card-tag card-subtitle">Order Now</span>
          <span className="card-tag">{price}</span>
        </div>
      </div>
     
            </>
          );
        })}
      </section>
    </>
  );
};

export default MenuCard;
