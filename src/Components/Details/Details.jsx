import { useEffect, useState } from 'react';
import Card from '../Card/Card';
import Filter from '../Filter/Filter';
import styles from './Details.module.css';
import dummyData from '../../dummyData';

function Details() {
  const [availableData, setAvailableData] = useState(dummyData);
  const [filteredData, setFilteredData] = useState(dummyData);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    let favoritesList = localStorage.getItem('favoriteList');
    if (favoritesList) {
      favoritesList = JSON.parse(favoritesList);
      setFavorites(favoritesList);
    }
  }, []);

  const applyFilters = (filters) => {
    let _filteredData = [...availableData];
    if (filters.search) {
      _filteredData = _filteredData.filter((property) =>
        Object.values(property).includes(filters.search)
      );
    }
    if (filters.location) {
      _filteredData = _filteredData.filter(
        (property) => property.address === filters.location
      );
    }

    if (filters.when) {
      switch (filters.when) {
        case '01 to 10':
          _filteredData = _filteredData.filter((property) => {
            let days = parseInt(property.movingIn.slice(0, 2));
            return days >= 1 && days <= 10;
          });
          break;
        case '10 to 20':
          _filteredData = _filteredData.filter((property) => {
            let days = parseInt(property.movingIn.slice(0, 2));
            return days >= 10 && days <= 20;
          });
          break;
        case '20 to 30':
          _filteredData = _filteredData.filter((property) => {
            let days = parseInt(property.movingIn.slice(0, 2));
            return days >= 20 && days <= 30;
          });
          break;
        default:
          break;
      }
    }

    if (filters.price) {
      switch (filters.price) {
        case '$3500-$4500':
          _filteredData = _filteredData.filter((property) => {
            let price = parseInt(
              property.price.slice(1, property.price.length)
            );
            return price >= 3500 && price <= 4500;
          });
          break;
        case '$4500-$6000':
          _filteredData = _filteredData.filter((property) => {
            let price = parseInt(
              property.price.slice(1, property.price.length)
            );
            return price >= 4500 && price <= 6000;
          });
          break;
        case '$6000-$10000':
          _filteredData = _filteredData.filter((property) => {
            let price = parseInt(
              property.price.slice(1, property.price.length)
            );
            return price >= 6000 && price <= 10000;
          });
          break;
      }
    }

    if (filters.type) {
      _filteredData = _filteredData.filter(
        (property) => property.type === filters.type
      );
    }
    setFilteredData(_filteredData);
  };

  const handleFavourite = (index) => {
    let _availableData = [...availableData];
    _availableData[index].favourite = !availableData[index].favourite;
    setAvailableData(_availableData);

    if (_availableData[index].favourite === true) {
      let _favorites = [...favorites];
      _favorites.push(_availableData[index]);
      setFavorites(_favorites);
      console.log(_favorites.length);
      const favoriteList = JSON.stringify(_favorites); // Object --> String
      localStorage.setItem('favoriteList', favoriteList);
    } else {
      let _favorites = [...favorites];
      _favorites.splice(index, 1);
      setFavorites(_favorites);
      const favoriteList = JSON.stringify(_favorites); // Object --> String
      localStorage.setItem('favoriteList', favoriteList);
      console.log(_favorites.length);
    }
  };

  return (
    <div className={styles.details}>
      <Filter applyFilters={applyFilters} />
      <div className={styles.cards}>
        {filteredData.map((property, index) => {
          return (
            <Card
              data={property}
              key={index}
              handleFavourite={() => handleFavourite(index)}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Details;
