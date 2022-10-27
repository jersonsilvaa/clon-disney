import React from 'react'

import styled from 'styled-components'

import home from '/images/home-icon.svg'
import logo from '/images/logo.svg'
import series from '/images/series-icon.svg'
import search from '/images/search-icon.svg'
import movies from '/images/movie-icon.svg'
import originals from '/images/original-icon.svg'
import watchlist from '/images/watchlist-icon.svg'

const Header = () => {
  return <>
      <Nav>
        <Logo src={logo} />
        <NavMenu>
          <a>
            <img src={home} alt='inicio' />
            <span>INICIO</span>
          </a>
          <a>
            <img src={search} alt='buscar' />
            <span>BÚSQUEDA</span>
          </a>
          <a>
            <img src={watchlist} alt='lista' />
            <span>MI LISTA</span>
          </a>
          <a>
            <img src={originals} alt='originales' />
            <span>ORIGINALES</span>
          </a>
          <a>
            <img src={movies} alt='peliculas' />
            <span>PELÍCULAS</span>
          </a>
          <a>
            <img src={series} alt='series' />
            <span>SERIES</span>
          </a>
        </NavMenu>
        <UserImg src='https://pps.whatsapp.net/v/t61.24694-24/291483763_3316118818675085_5448892912731441282_n.jpg?ccb=11-4&oh=01_AdRasaHMCMa9-wrRzvtPOkyp0JaxAQP5ZZCYOITEZadKIA&oe=6366F005' />
      </Nav>
    </>
}

const Nav = styled.div`
  height: 78px;
  padding: 0 36px;
  display: flex;
  background: #090b13;
  overflow-x: hidden;
  align-items: center;
`

const Logo = styled.img`
  width: 80px;
`

const NavMenu = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  margin-left: 25px;

  a {
    cursor: pointer;
    padding: 0 12px;
    display: flex;
    align-items: center;

    img {
      height: 25px;
    }

    span {
      position: relative;
      font-size: 15px;
      letter-spacing: 1.42px;

      &::after {
        left: 0;
        right: 0;
        bottom: -6px;
        height: 2px;
        opacity: 0;
        content: '';
        position: absolute;
        transform: scaleX(0);
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        background: #fff;
        transform-origin: center left;
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