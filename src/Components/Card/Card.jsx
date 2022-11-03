import styles from './Card.module.css';
import heartEmpty from '../../Pictures/heart-empty.png';
import heartLiked from '../../Pictures/heart-liked.png';
import { GoLocation } from 'react-icons/go';
import { MdKingBed } from 'react-icons/md';
import { FaBath } from 'react-icons/fa';
import { BiArea } from 'react-icons/bi';

function Card({ data, index, handleFavourite }) {
  return (
    <div className={styles.card}>
      <div>
        <img src={data.img} alt={'alternate name'} />
      </div>
      <div className={styles.priceRow}>
        <span className={styles.price}>
          {data.price}
          <span className={styles.month}>/month</span>
        </span>
        <img
          className={styles.heart}
          src={data.favourite ? heartLiked : heartEmpty}
          alt={'alternate text'}
          onClick={() => handleFavourite(index)}
        />
      </div>
      <div>{data.name}</div>
      <div>
        <GoLocation /> {data.address}
      </div>
      <div>
        {data.bedrooms} <MdKingBed className={styles.icon} /> | {data.bathrooms}{' '}
        <FaBath /> | {data.area} <BiArea className={styles.icon} />
      </div>
    </div>
  );
}

export default Card;
