import React, { useState, useEffect } from 'react'
import StoreItem from './StoreItem';

function Store() {
  const [storeItems, setStoreItems] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=20")
      .then((response) => {
        if (response.status >= 400) {
          // throw new Error("server error");
        }
        return response.json();
      })
      .then((data) => setStoreItems(data))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);
  if (loading) return <div>loading</div>
  return (
    <>
      <div className='container'>store </div>
      <ul>{[...storeItems].map((item) => {
        return <StoreItem key={item.id}
          title={item.title}
          price={item.price}
          image={item.image} />
      })}
      </ul>
    </>
  )
}

export default Store