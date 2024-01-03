import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Link from './components/link';
import Flow from './components/flow';
import Stack from './components/stack';
import Layout from './components/layout/layout';

export default function App() {
  return (
    <BrowserRouter>
      <main>
        <Layout />
        <Routes>
          <Route path='/' element={<Flow />} />
          <Route path='/link' element={<Link />} />
          <Route path='/stack' element={<Stack />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
