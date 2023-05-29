import './cards.css';

function Cards({ title, subtitle, image }) {
  return (
    <>
      <div className="card" style={{ backgroundImage: `url(${image})` }}>
        <div className="card-front">
          <p className="title">{title}</p>
          <p className="subtitle">{subtitle}</p>
        </div>
        <div className="card-back">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
    </>
  );
}

export default Cards;
