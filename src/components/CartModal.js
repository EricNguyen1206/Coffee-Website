import '../styles/cart.css'

const CartModal = ({ cartActive, CartList, onDeleteItem, changeAmount }) => {
  
  return (
    <div className={`cart-container ${cartActive ? "active" : ""}`}>
      <ul className="cart-list">
        {CartList.map((item) => (
          <li key={item.id} className="cart-item">
            <img src={item.image} alt="" />
            <div className="content">
              <h3>{item.name}</h3>
              <div className="price">{item.price}/-</div>
            </div>
            <div className="control">
              <span
                onClick={() => onDeleteItem(item.id)}
                className="fas fa-times"
              ></span>
              <div className="amount">
                <i onClick={()=>changeAmount(-1, item.id)} class="fas fa-minus-circle"></i>
                <span>{item.amount}</span>
                <i onClick={()=>changeAmount(1, item.id)} class="fas fa-plus-circle"></i>
                
              </div>
            </div>
          </li>
        ))}
      </ul>
      <a href="/" className="btn">
        checkout now
      </a>
    </div>
  );
};

export default CartModal;
