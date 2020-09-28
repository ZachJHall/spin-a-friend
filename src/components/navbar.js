import React from 'react';
import styled from 'styled-components'

const NavContainer = styled.div`
    height: auto;
    min-height: 10%;
    width: 100%;
    
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

const LeftDiv = styled.div`
    width: auto;
    min-width: 10%;

    display: flex;
    justify-content: flex-start;    
    background-color: red;
`

const MiddleDiv = styled.div`
    background-color: green;

    display:flex;
    justify-content:center;
`

const RightDiv = styled(LeftDiv)`
`

const Text =styled.h1`
    margin:0;
`

function NavBar() {
    return (
        <NavContainer>
            <LeftDiv>
                <Text>Test</Text>
            </LeftDiv>
            <MiddleDiv>
                <Text>Spin A Friend</Text>
            </MiddleDiv>

            <RightDiv />
        </NavContainer>
        
    )
}

export default NavBar