import styled from 'styled-components'

import logo from '../assets/images/logo.svg'
import home from '../assets/images/home-icon.svg'
import search from '../assets/images/search-icon.svg'
import watchlist from '../assets/images/watchlist-icon.svg'
import originals from '../assets/images/original-icon.svg'
import movies from '../assets/images/movie-icon.svg'
import series from '../assets/images/series-icon.svg'

const Header = () => {
    return <>
        <Nav>
            <Logo src={logo} />

            <NavMenu>
                <a>
                    <img src={home} alt="inicio" />
                    <span>INICIO</span>
                </a>
                <a>
                    <img src={search} alt="buscar" />
                    <span>BÚSQUEDA</span>
                </a>
                <a>
                    <img src={watchlist} alt="lista" />
                    <span>MI LISTA</span>
                </a>
                <a>
                    <img src={originals} alt="originales" />
                    <span>ORIGINALES</span>
                </a>
                <a>
                    <img src={movies} alt="peliculas" />
                    <span>PELÍCULAS</span>
                </a>
                <a>
                    <img src={series} alt="series" />
                    <span>SERIES</span>
                </a>
            </NavMenu>
            <UserImg src='https://pps.whatsapp.net/v/t61.24694-24/291483763_3316118818675085_5448892912731441282_n.jpg?ccb=11-4&oh=01_AdRasaHMCMa9-wrRzvtPOkyp0JaxAQP5ZZCYOITEZadKIA&oe=6366F005' />
        </Nav>
    </>
}

const Nav = styled.div `
    height: 78px;
    background: #090b13;
    display: flex;
    align-items: center;
    padding: 0 36px;
`

const Logo = styled.img `
    width: 80px;
`

const NavMenu = styled.div `
    display: flex;
    flex: 1;
    margin-left: 25px;
    align-items: center;

    a {
        display: flex;
        align-items: center;
        padding: 0 12px;
        cursor: pointer;

        img {
            height: 25px;
        }

        span {
            font-size: 15px;
            letter-spacing: 1.42px;
            position: relative;

            &::after {
                left: 0;
                right: 0;
                height: 2px;
                bottom: -6px;
                opacity: 0;
                content: '';
                position: absolute;
                background: #fff;
                transform: scaleX(0);
                transform-origin: center left;
                transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
            }
        }

        &:hover {
            span:after {
                opacity: 1;
                transform: scaleX(1);
            }
        }
    }
`

const UserImg = styled.img`
    width: 48px;
    height: 48px;
    border-radius: 50%;
    cursor: pointer;
`

export default Header