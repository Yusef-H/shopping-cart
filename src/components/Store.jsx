import React, { useState, useEffect } from 'react'
import StoreItem from './StoreItem';
import '../styles/Store.css'
import Error from './Error';

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
  if (error) return <Error />
  return (
    <div className='store'>

      <ul className='store-items'>
        {[...storeItems].map((item) => {
          return <StoreItem key={item.id}
            title={item.title}
            price={item.price}
            image={item.image} />
        })}
      </ul>
    </div>
  )
}

export default Store