import React from 'react';
import styled from 'styled-components'

import NavBar from './navbar'

const ContentContainer = styled.div`
  height: 100%;
  width: 100%;

`

const MainDiv = styled.div`
    height: 80%;
`

const BottomDiv = styled.div`
    height: 10%;


    display:flex;

    justify-content: center;
    align-items: end;

`

const UploadButton = styled.button`
    height: 30px;
    margin-bottom: 5px;
`
function ContentLevel(){
    return (
        <ContentContainer>

            <NavBar />

            <MainDiv></MainDiv>

            <BottomDiv>
                <UploadButton>Upload A Face</UploadButton>
            </BottomDiv>

        </ContentContainer>
    );
}

export default ContentLevel;