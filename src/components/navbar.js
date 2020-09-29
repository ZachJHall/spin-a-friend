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
`

const MiddleDiv = styled.div`

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
                <a target="_blank" href="https://twitter.com/intent/tweet?original_referer=https%3A%2F%2Fspinafriend.com%2F&text=Spin%20A%20Friend%20by%20%40zachjohnhall%0a&url=https%3A%2F%2Fspinafriend.com%2F">
                    <button>Tweet this</button>
                </a>
                
            </LeftDiv>

            <MiddleDiv>
                <Text>Spin A Friend</Text>
            </MiddleDiv>

            <RightDiv />
        </NavContainer>
        
    )
}

export default NavBar