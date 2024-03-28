import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import G20 from './components/G20';
import G7 from './components/G7';
import Countries from './components/Countries';
import Country from './components/Country';


function App() {
  return (
    <BrowserRouter>
      <div className="App">

        <nav className="navbar navbar-expand-sm  bg-dark navbar-dark ">
          <div className="container">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to={'/g20'}>G20</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={'/g7'}>G7</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={'/countries'}>Countries</Link>
              </li>

            </ul>
          </div>

        </nav>

        <div className='container pt-2'>
          <Routes>
            <Route path='/g20' element={<G20 />}></Route>
            <Route path='/g7' element={<G7 />}></Route>
            <Route path='/countries' element={<Countries />}></Route>
            <Route path='/countries/:name' element={<Country />}></Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
