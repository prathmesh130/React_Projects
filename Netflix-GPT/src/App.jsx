import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux';
import appStore from './utils/appStore';
import Layout from './components/Layout';
import Login from './components/Login';
import Browse from './components/Browse'
function App() {
  const appRouter = createBrowserRouter([
    {
      path: '/',
      element: <Login />
    },
    {
      path: '/browse',
      element: <Browse />
    },
  ]);

  return (
    <Provider store={appStore}>
      <div>
        <RouterProvider router={appRouter}>
        </RouterProvider>
      </div>
    </Provider>
  )
}

export default App
