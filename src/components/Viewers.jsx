import React from 'react'

import styled from 'styled-components'

const Viewers = () => {
    return <>
        <Content>
            <Wrap>
                <img src='images/viewers-disney.png' />
            </Wrap>
            <Wrap>
                <img src='images/viewers-pixar.png' />
            </Wrap>
            <Wrap>
                <img src='images/viewers-marvel.png' />
            </Wrap>
            <Wrap>
                <img src='images/viewers-starwars.png' />
            </Wrap>
            <Wrap>
                <img src='images/viewers-national.png' />
            </Wrap>
        </Content>
    </>
}

const Content = styled.div`
    display: grid;
    margin-top: 30px;
    grid-gap: 25px;
    padding: 30px 0 26px;
    grid-template-columns: repeat(5, minmax(0, 1fr));
`

const Wrap = styled.div`
    border: 1.5px solid rgba(249, 249, 249, .1);
    cursor: pointer;
    box-shadow: rgba(0 0 0 / 69%) 0 26px 30px -10px, rgb(0 0 0 / 73%) 0 16px 10px -10px;
    transition: all 250ms cubic-bezier(.25, .46, .45, .94) 0s;
    border-radius: 10px;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    &:hover {
        transform: scale(1.05);
        box-shadow: rgb(0 0 0 / 80%) 0 40px 58px -15px, rgb(0 0 0 / 72%) 0 30px 27px 22px -10px;
        border-color: rgba(249, 249, 249, .8);
    }
`

export default Viewers