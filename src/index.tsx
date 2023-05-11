import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { GlobalStyle } from './styles/globalStyle';
import { AuthContextProvider } from './context/AuthContext';
import { AnnouncesProvider } from './context/AnnouncesContext';
import { FilterProviderMobile } from './context/FilterContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { NavbarProvider } from './context/NavBarContext';
import { ModalProvider } from './context/ModalContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <NavbarProvider>
      <ModalProvider>
        <AnnouncesProvider>
          <AuthContextProvider>
            <FilterProviderMobile>
              <GlobalStyle />
              <App />
            </FilterProviderMobile>
          </AuthContextProvider>
        </AnnouncesProvider>
      </ModalProvider>
    </NavbarProvider>
    <ToastContainer />
  </React.StrictMode>
);

