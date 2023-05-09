import { useContext } from 'react';
import { DetailAnnouncementPage } from './pages/detail_announce';
import Login from './pages/login_page';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { RegisterPage } from './pages/register_page';
import { Navbar } from './components/navbar';
import { AuthContext } from './context/AuthContext';
import { ProfileViewUserPage } from './pages/profile_view_user_page';
import { ProtectedRoutes } from './components/protected_routes';
import Announce from './pages/announce_page';
import { RecoveryPasswordPage } from './pages/recovery_password_page';

function App() {

  const { userAuthenticated, modalState, setModalState } = useContext(AuthContext)

  return (
    <BrowserRouter>
      <Navbar setModalState={setModalState} userAuthenticated={userAuthenticated} />
      <Routes>
        <Route path='' element={userAuthenticated ? <Navigate to='/home' /> : <Login />} />
        <Route path='/register' element={userAuthenticated ? <Navigate to='/announce-detail' /> : <RegisterPage />} />
        <Route path='/announcer/:id' element={<Announce />} />
        <Route path='/profile/' element={<ProfileViewUserPage />} />
        <Route path='/recovery' element={<RecoveryPasswordPage />} />
        <Route element={<ProtectedRoutes />}>
          <Route path='/announce-detail' element={<DetailAnnouncementPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
