import logo from './logo.svg';
import './App.css';
import Portfolio from './Components/Home/Home/Portfolio';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import PortfolioDetails from './Components/Home/PortFolio/PortfolioDetails';


const router = createBrowserRouter([

  {
    path: '/',
    element: <Portfolio></Portfolio>
  },
  {
    path: '/details/:id',
    element: <PortfolioDetails></PortfolioDetails>,
  }

])

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
