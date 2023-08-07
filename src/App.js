import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Dashboard } from './Components/Dashboard';
import { Cart } from './Components/Cart';
import { RootyLayout } from './Components/RootyLayout';
import { MyComponent } from './Components/MyComponent';
import { Polling } from './Components/Polling';
import { Admin } from './Components/Admin';
import MessageComponent from './Components/MessageComponent';

function App() {
  const channels = ['ws', 'ws', 'ws'];
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<RootyLayout />}>
      <Route index element={<Dashboard />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/prefetch' element={<MyComponent />} />
      <Route path='/polling' element={<Polling />} />
      <Route path='/basiccrud' element={<Admin />} />
      {channels.map((channel) => (
        <Route path='/message' element={<MessageComponent key={channel} channel={channel} />} />
      ))}
    </Route>
  ))

  return (
    <div className="App">
      <RouterProvider router={router} >

      </RouterProvider>
    </div>
  );
}

export default App;
