import React from "react";

const OrderOnline = () => {
  return (
    <div className="order-online-container">
      <h2 className="order-title">Order Online</h2>
      <p className="order-desc">Enjoy your favorite Little Lemon dishes from the comfort of your home! Select your meal, customize your order, and we’ll deliver it fresh to your door.</p>
      <div className="order-steps">
        <div className="order-step">
          <span role="img" aria-label="menu" className="order-step-icon">📋</span>
          <h4>1. Browse Menu</h4>
          <p>Explore our full menu and discover new favorites.</p>
        </div>
        <div className="order-step">
          <span role="img" aria-label="customize" className="order-step-icon">🧑‍🍳</span>
          <h4>2. Customize</h4>
          <p>Choose your options, add notes, and make it your own.</p>
        </div>
        <div className="order-step">
          <span role="img" aria-label="delivery" className="order-step-icon">🚚</span>
          <h4>3. Fast Delivery</h4>
          <p>We’ll deliver your meal hot and fresh, right to your door.</p>
        </div>
      </div>
      <button className="order-action-btn">Start Your Order</button>
    </div>
  );
};

export default OrderOnline;
