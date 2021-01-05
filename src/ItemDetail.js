import { useEffect, useState } from "react";

const ItemDetail = ({ match }) => {
  useEffect(() => {
    fetchItem();
  }, []);

  const [item, setItem] = useState({
    images: {},
  });

  const fetchItem = async () => {
    const fetchItem = await fetch(
      `https://fortnite-api.theapinetwork.com/item/get?id=${match.params.id}`
    );
    const item = await fetchItem.json();
    setItem(item.data.item);
  };

  return (
    <div>
      <h1>{item.name}</h1>
      <img src={item.images.background} alt="" />
    </div>
  );
};

export default ItemDetail;
