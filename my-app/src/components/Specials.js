import React from "react";

const specialsData = [
  {
    id: 1,
    name: "Greek Salad",
    price: "$12.99",
    description:
      "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
    image: "🥗",
  },
  {
    id: 2,
    name: "Bruschetta",
    price: "$8.99",
    description:
      "Grilled bread garlic, topped with olive oil and tomatoes.",
    image: "🍞",
  },
  {
    id: 3,
    name: "Lemon Dessert",
    price: "$5.00",
    description:
      "Authentic homemade Italian lemon dessert with a modern twist.",
    image: "🍋",
  },
];

const Specials = () => {
  return (
    <section className="specials-section">
      <h2 className="specials-title">This Week's Specials!</h2>
      <div className="specials-list">
        {specialsData.map((item) => (
          <div className="special-card" key={item.id}>
            <div className="special-img">{item.image}</div>
            <div className="special-info">
              <div className="special-header">
                <h3 className="special-name">{item.name}</h3>
                <span className="special-price">{item.price}</span>
              </div>
              <p className="special-desc">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Specials;
