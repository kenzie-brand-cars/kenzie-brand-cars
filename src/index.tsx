import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { GlobalStyle } from './styles/globalStyle';
import { AuthContextProvider } from './context/AuthContext';
import { AnnouncesProvider } from './context/AnnouncesContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <AnnouncesProvider>
      <AuthContextProvider>
        <GlobalStyle />
        <App />
      </AuthContextProvider>
    </AnnouncesProvider>
  </React.StrictMode>
);

