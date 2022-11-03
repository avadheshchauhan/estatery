import styles from './Filter.module.css';
import { useState } from 'react';
import Dropdown from '../Dropdown/Dropdown';

const filtersData = {
  location: ['India', 'USA', 'Japan'],
  when: ['01 to 10', '10 to 20', '20 to 30'],
  price: ['$3500-$4500', '$4500-$6000', '$6000-$10000'],
  type: ['Houses', 'Apartments', 'Luxury'],
};

function Filter({ applyFilters }) {
  const [search, setSearch] = useState('');

  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedWhen, setSelectedWhen] = useState('');
  const [selectedPrice, setSelectedPrice] = useState('');
  const [selectedType, setSelectedType] = useState('');

  const [showLocation, setShowLocation] = useState(false);
  const [showWhen, setShowWhen] = useState(false);
  const [showPrice, setShowPrice] = useState(false);
  const [showType, setShowType] = useState(false);

  const handleSearch = () => {
    let selectedFilters = {
      search: search,
      location: selectedLocation,
      when: selectedWhen,
      price: selectedPrice,
      type: selectedType,
    };
    applyFilters(selectedFilters);
  };

  return (
    <div className={styles.filter}>
      <div className={styles.search}>
        <span>Search Properties to rent</span>
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder={'Search with Search Bar'}
        />
      </div>

      <div className={styles.filters}>
        <div
          className={styles.section}
          onMouseOver={() => setShowLocation(true)}
          onMouseOut={() => setShowLocation(false)}
        >
          <div className={styles.title}>
            Location
            <div className={styles.selected}>
              {selectedLocation || 'Select Desired Location'}
            </div>
          </div>
          <Dropdown
            show={showLocation}
            options={filtersData.location}
            setter={setSelectedLocation}
          />
        </div>

        <div
          className={styles.section}
          onMouseOver={() => setShowWhen(true)}
          onMouseOut={() => setShowWhen(false)}
        >
          <div className={styles.title}>
            When
            <div className={styles.selected}>
              {selectedWhen || 'Select Move-in Date'}
            </div>
          </div>
          <Dropdown
            show={showWhen}
            options={filtersData.when}
            setter={setSelectedWhen}
          />
        </div>

        <div
          className={styles.section}
          onMouseOver={() => setShowPrice(true)}
          onMouseOut={() => setShowPrice(false)}
        >
          <div className={styles.title}>
            Price
            <div className={styles.selected}>
              {selectedPrice || 'Select Price Range'}
            </div>
          </div>
          <Dropdown
            show={showPrice}
            options={filtersData.price}
            setter={setSelectedPrice}
          />
        </div>

        <div
          className={styles.section}
          onMouseOver={() => setShowType(true)}
          onMouseOut={() => setShowType(false)}
        >
          <div className={styles.title}>
            Property
            <div className={styles.selected}>
              {selectedType || 'Select Property Type'}
            </div>
          </div>
          <Dropdown
            show={showType}
            options={filtersData.type}
            setter={setSelectedType}
          />
        </div>

        <div className={styles.button}>
          <button onClick={handleSearch}>Search</button>
        </div>
      </div>
    </div>
  );
}

export default Filter;
