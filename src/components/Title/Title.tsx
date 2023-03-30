import ITitle from './interfaces/ITitle';
import styles from './sass/Title.module.scss';

export default function Title({ text }: ITitle): JSX.Element {
  return (
    <h1 className={styles.appTitle}>
      {text}
    </h1>
  );
}
