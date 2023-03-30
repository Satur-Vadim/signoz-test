import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Page from './layout/Page/Page';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Login from './pages/Login/Login';

import './i18n';
import './styles/global.scss';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Page />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
