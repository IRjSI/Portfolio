import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {NextUIProvider} from '@nextui-org/react'
import './index.css';
import App from './App.jsx';
import About from './Components/About.jsx';
import Projects from './Components/Projects.jsx';
import Contact from './Components/Contact.jsx';
import Home from './Components/Home.jsx';

// Create the router
const router = createBrowserRouter([
  {
    path: '/', // Base path
    element: <App />, // Wrap all child routes with App
    children: [
      {
        path: '/', // Default route
        element: <Home />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/projects',
        element: <Projects />
      },
      {
        path: '/contact',
        element: <Contact />
      }
    ]
  }
]);

// Render the app
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NextUIProvider>
      <App />
    </NextUIProvider>
  </StrictMode>
);
