import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Shop = () => {
  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch("https://fortnite-api.theapinetwork.com/upcoming/get");
    const items = await data.json();
    setItems(items.data);
  };

  return (
    <div>
      {items.map((item) => (
        <h1>
          <Link to={`/shop/${item.itemId}`}>{item.item.name}</Link>
        </h1>
      ))}
    </div>
  );
};

export default Shop;
