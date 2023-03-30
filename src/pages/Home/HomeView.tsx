import { useTranslation } from 'react-i18next';
import Loader from '../../components/Loader/Loader';
import { useFetchJokeQuery } from '../../store/slices/jokes/apis/jokes';

import styles from './sass/HomeView.module.scss';

function HomeView(): JSX.Element {
  const { data, refetch, isFetching } = useFetchJokeQuery();
  const { t } = useTranslation();
  return (
    <div>
      <div className={styles.content}>
        {isFetching ? (
          <Loader />
        ) : (
          <>
            <button type="button" onClick={refetch}>{ t('home.getJoke') }</button>
            <p>{data?.value}</p>
          </>
        )}
      </div>
    </div>
  );
}

export default HomeView;
