import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Page from './layout/Page/Page';
import Home from './pages/Home/Home';

import './i18n';
import './styles/global.scss';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Page />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
