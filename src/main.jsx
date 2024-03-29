import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { InternalManagementContextProvider } from './context/Context';
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <BrowserRouter>
        <InternalManagementContextProvider>
          <App />
        </InternalManagementContextProvider>
      </BrowserRouter>
  </React.StrictMode>
)
