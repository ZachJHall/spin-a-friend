import React from 'react';
import styled from 'styled-components'

const NavContainer = styled.div`
    height: auto;
    min-height: 10%;
    width: 100%;
    

    display: flex;

    justify-content: center;
    align-items: center;
`

const LeftDiv = styled.div`
    width: 10%;
`

const MiddleDiv = styled.div`

`

const RightDiv = styled(LeftDiv)`
`

const Text =styled.h1`
    margin:0;
`

function NavBar() {
    return (
        <NavContainer>
            <LeftDiv />

            <MiddleDiv>
                <Text>Spin A Friend</Text>
            </MiddleDiv>
            
            <RightDiv />
        </NavContainer>
        
    )
}

export default NavBar