import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home'
// router 
function App() {
  return (
    <BrowserRouter basename='/'>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
