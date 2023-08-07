import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Dashboard } from './component/Dashboard';
import { Cart } from './component/Cart';
import { NavBarPanel } from './component/NavBarPanel';

function App() {
  return (
    <div className="App">
      <Router>
      <div className='container'>
        <NavBarPanel />
        <main>
          <Outlet />
        </main>
      </div>
        <Routes>
          <Route index element={<Dashboard />} />
          <Route path='/cart' element={<Cart />} />
          {/* Add more routes here if needed */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
