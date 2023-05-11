import { StyledNavbar } from "./style"
import logo from '../../assets/motos-shop-logo.png'
import barsIcon from '../../assets/bars.png'
import { useContext, useState } from "react"
import { GiHamburgerMenu } from 'react-icons/gi'
import { GrClose } from 'react-icons/gr'
import { useMatches, useNavigate } from 'react-router-dom'
import { AuthContext } from "../../context/AuthContext"
import { FilterContextMobile } from "../../context/FilterContext"

interface INavbar {
    setModalState: React.Dispatch<React.SetStateAction<boolean>>;
    userAuthenticated: boolean;
}

export const Navbar = ({ userAuthenticated, setModalState }: INavbar) => {
    const [showNavbarMobile, setShowNavbarMobile] = useState<boolean>(false)
    const { currentUser } = useContext(AuthContext)
    const {displayFilter, setDisplayFilter} = useContext(FilterContextMobile)
    const navigate = useNavigate()
    const currentPath = window.location.pathname

    const changeModalState = () => {
        setModalState((currentModalState: boolean) => !currentModalState);
    };

    return (
        <StyledNavbar>
            <nav>
                <img src={logo} alt="Logo da Motors Shop" className="logo" onClick={() => navigate('/home')} />
                <button className="menu-burger" onClick={() => {
                    setShowNavbarMobile(!showNavbarMobile)
                    setDisplayFilter(!displayFilter)
                }}>
                    {showNavbarMobile ? (
                        <GrClose size={20} />
                    ) : (
                        <GiHamburgerMenu size={20} />
                    )}
                </button>
                {userAuthenticated ? (
                    <div onClick={() => navigate('/profile')} className="profile-info">
                        <h2 className="profile-initials">{currentUser?.name[0].toUpperCase()}{currentUser?.name[1].toUpperCase()}</h2>
                        <p>{currentUser?.name}</p>
                    </div>
                ) : (
                    <div className="profile-info">
                        <button className="btn btn-login" onClick={() => navigate('')}>Fazer Login</button>
                        <button className="btn btn-register" onClick={() => navigate('/register')}>Cadastrar</button>
                    </div>
                )}
            </nav>
            {currentPath !== '/home' && (
                <ul className={showNavbarMobile ? "show" : "hidden"}>
                    <li>Carros</li>
                    <li>Motos</li>
                    <li>Leilão</li>
                    <hr />
                    <li onClick={() => navigate('')}>Fazer Login</li>
                    <li><button onClick={() => navigate('/register')}>Cadastrar</button></li>
                </ul>
            )}
        </StyledNavbar>
    )
}