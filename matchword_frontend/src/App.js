import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home'
import ProblemSets from './pages/ProblemSets';
import CreateProb from './pages/CreateProb';
// router 
function App() {
  return (
    <BrowserRouter basename='/'>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>} />
          <Route path='/problems' element={<ProblemSets/>}/>
          <Route path='/createProb' element={<CreateProb/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
