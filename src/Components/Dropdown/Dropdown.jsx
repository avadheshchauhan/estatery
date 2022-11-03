import styles from './Dropdown.module.css';

function Dropdown({ show, options, setter }) {
  if (show) {
    return (
      <div className={styles.dropdown}>
        {options.map((option, index) => (
          <div onClick={() => setter(option)} key={index}>
            {option}
          </div>
        ))}
      </div>
    );
  }
  return <></>;
}

export default Dropdown;
