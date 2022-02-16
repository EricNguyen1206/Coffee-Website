const ProductItem = ({ key, infor, onAddItem }) => {
  return (
    <div key={key} id={infor.id} className="box">
      <img src={infor.image} alt="coffee images" />
      <h3>{infor.title}</h3>
      <div className="price">
        {infor.price} <span>{infor["old-price"]}</span>
      </div>
      <button
        onClick={() =>
          onAddItem({
            id: infor.id,
            image: infor.image,
            name: infor.title,
            price: infor.price,
          })
        }
        type="button"
        className="btn"
      >
        add to cart
      </button>
    </div>
  );
};

export default ProductItem
