import React from 'react';
import styled from 'styled-components'

import NavBar from './navbar'

const ContentContainer = styled.div`
  height: 90%;
  width: 100%;

  @media (max-width: 768px){
      height: 80%;
  }

`

const MainDiv = styled.div`
    height: 80%;
`

function ContentLevel(){
    return (
        <ContentContainer>

            <NavBar />

            <MainDiv></MainDiv>

        </ContentContainer>
    );
}

export default ContentLevel;