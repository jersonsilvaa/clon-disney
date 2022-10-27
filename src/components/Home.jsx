import React from 'react'
import styled from 'styled-components'

import ImgSlider from './ImgSlider'
// 3:20.30

const Home = () => {
  return <>
    <Content>
      <ImgSlider />
    </Content>
  </>
}

export default Home

const Content = styled.main`
  z-index: 1;
  padding: 0 calc(3.5vw + 5px);
  position: relative;
  overflow-x: hidden;
  min-height: calc(100vh - 78px);


  &::before {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    content: '';
    z-index: -1;
    position: absolute;
    background: url('/images/home-background.png') center center / cover no-repeat fixed;
  }
`