import logo from './logo.svg';
import './App.css';


import HeaderComponent from './componentes/HeaderComponent';
import ListClientesComponent from './componentes/ListClientesComponent';
import FooterComponent from './componentes/FooterComponent';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import InsertarClientesComponent from './componentes/InsertarClientesComponent';

function App() {
  return (
    <div>
      

      <BrowserRouter>
        <HeaderComponent />

          <div className='container'>
            
            <Routes>
              <Route exact path='/' element={<ListClientesComponent />}></Route>
              <Route path='/clientes' element={<ListClientesComponent />}></Route>
              <Route path='/insertar-cliente' element={<InsertarClientesComponent />}></Route>
              <Route path='/edit-cliente/:id' element={<InsertarClientesComponent />}></Route>
            </Routes>
          </div>

        <FooterComponent />
      </BrowserRouter>


      
    </div>
  );
}

export default App;
