import React, { useState } from "react";

const Tour = ({ id, image, info, name, price, removeTour }) => {
  const [isReadMore, setIsReadMore] = useState(false);
  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>
        <p>
          {isReadMore ? info : `${info.substring(0, 200)}...`}
          <button onClick={() => setIsReadMore(!isReadMore)}>
            {isReadMore ? "show less" : "Read more"}
          </button>
        </p>
        <button className="delete-btn" onClick={() => removeTour(id)}>
          Not Intrested
        </button>
      </footer>
    </article>
  );
};

export default Tour;
