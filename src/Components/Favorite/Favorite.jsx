import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import styles from './Favorite.module.css';

const Favorite = () => {
  const [list, setList] = useState([]);
  const [msg, setMsg] = useState('');

  useEffect(() => {
    let favorites = localStorage.getItem('favoriteList');
    if (favorites) {
      favorites = JSON.parse(favorites);
      setMsg('');
      setList(favorites);
    } else {
      setMsg('Nothing to show');
    }
  }, []);

  return (
    <div className={styles.details}>
      <h1>Your Favorite list</h1>
      <h3>{msg}</h3>
      <div className={styles.cards}>
        {list.map((property, index) => {
          return <Card data={property} key={index} />;
        })}
      </div>
    </div>
  );
};

export default Favorite;
