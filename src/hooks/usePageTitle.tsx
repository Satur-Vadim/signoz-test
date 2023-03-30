import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function usePageTitle(): string {
  const { pathname } = useLocation();
  const { t } = useTranslation();
  const pageName: string = pathname.split('/')[1].toLowerCase() || 'home';
  return t(`${pageName}.pageTitle`);
}

export default usePageTitle;
