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
import { RecoveryPassMailPage } from './pages/recovery_pass_email_page';
import { HomePage } from './pages/home';

function App() {

  const { userAuthenticated, setModalState } = useContext(AuthContext)

  return (
    <BrowserRouter>
      <Navbar setModalState={setModalState} userAuthenticated={userAuthenticated} />
      <Routes>
        <Route path='' element={userAuthenticated ? <Navigate to='/home' /> : <Login />} />
        <Route path='/register' element={userAuthenticated ? <Navigate to='/announce-detail' /> : <RegisterPage />} />
        <Route path='/announcer/:id' element={<Announce />} />
        <Route path='/user/reset_password' element={<RecoveryPassMailPage />} />
        <Route path='/user/reset_password/:token' element={<RecoveryPasswordPage />} />
        <Route path='/home' element={<HomePage />} />
        <Route element={<ProtectedRoutes />}>
          <Route path='/profile/' element={<ProfileViewUserPage />} />
          <Route path='/announce-detail/:id' element={<DetailAnnouncementPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
