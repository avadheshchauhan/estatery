import styles from './Header.module.css';
import { AiFillHome } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.left}>
        <div className={styles.logo}>
          <NavLink to="/">
            <AiFillHome /> Estatery
          </NavLink>
        </div>
        <div>
          <NavLink to="/">Rent</NavLink>
        </div>
        <div>
          <NavLink to="/">Buy</NavLink>
        </div>
        <div>
          <NavLink to="/">Sell</NavLink>
        </div>
        <div>
          <NavLink to="/favorite">Favorite</NavLink>
          {/* <img src={star} alt={'Favourite'} className="star" /> */}
        </div>
      </div>
      <div className={styles.right}>
        <button className={styles.loginBtn}>Login</button>
        <button className={styles.signUpBtn}>Sign Up</button>
      </div>
    </div>
  );
}

export default Header;
