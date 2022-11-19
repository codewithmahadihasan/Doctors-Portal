import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './Router/Router';
function App() {
  return (
    <div className='sm:max-w-xl md:max-w-full lg:max-w-screen-xl mx-auto' >
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
