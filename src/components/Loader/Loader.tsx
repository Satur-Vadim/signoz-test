import styles from './sass/Loader.module.scss';
import loader from '../../assets/images/loader.svg';

export default function Loader(): JSX.Element {
  return (
    <div>
      <img
        src={loader}
        className={styles.appLoader}
        alt="loader"
      />
    </div>
  );
}
