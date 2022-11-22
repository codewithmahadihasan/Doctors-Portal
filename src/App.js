import { useEffect, useState } from 'react';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import Loader from './Router/Loader/Loader';
import router from './Router/Router';
function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <div>
      {loading ? <Loader></Loader> :
        <div className='sm:max-w-xl md:max-w-full lg:max-w-screen-xl mx-auto' >
          <RouterProvider router={router}></RouterProvider>
        </div>
      }
    </div>
  );
}

export default App;
