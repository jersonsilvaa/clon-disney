import React from 'react'

import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import styled from 'styled-components'

const ImgSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    }
    return <>
        <Carousel { ...settings }>
            <Wrap>
                <img src='/images/slider-badging.jpg' alt='imagen' />
            </Wrap>
            <Wrap>
                <img src='/public/images/slider-scale.jpg' alt='imagen' />
            </Wrap>
            <Wrap>
                <img src='/images/slider-badag.jpg' alt='imagen' />
            </Wrap>
            <Wrap>
                <img src='/public/images/slider-scales.jpg' alt='imagen' />
            </Wrap>
        </Carousel>
    </>
}

const Carousel = styled(Slider)`
    margin-top: 20px;

    ul li button {
        &::before {
            font-size: 10px;
            color: rgb(150, 158, 171);
        }
    }

    li.slick-active button::before {
        color: #fff;
    }

    .slick-list {
        overflow: visible;
    }

    button {
        z-index: 1;
    }
`

const Wrap = styled.div`
    cursor: pointer;
    img {
        width: 100%;
        height: 100%;
        border: 4px solid transparent;
        box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
        border-radius: 4px;
        transition-duration: 300ms;

        &:hover {
            border: 2.5px solid rgba(249, 249, 249, .8);
        }
    }
`

export default ImgSlider