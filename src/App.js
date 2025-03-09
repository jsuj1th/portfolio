// import logo from './logo.svg';
import './App.scss';
import Home from './components/Home';
import Layout from './components/Layout';
import { Routes, Route } from 'react-router-dom';
// import { Route } from 'react-router-dom';
function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />} >
        < Route index element={<Home />} />
        </Route>
    </Routes>
    </>  );
}

export default App;
