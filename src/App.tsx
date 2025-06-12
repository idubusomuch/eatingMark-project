import { Routes, Route } from 'react-router-dom';
import Layout from '@components/Layout';
import Home from '@pages/Home';
import { PageNotFound } from '@components/ErrorComponents';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="*" element={<PageNotFound />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
