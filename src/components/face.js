import React from 'react';
import styled from 'styled-components'

const FaceContainer = styled.div`
    height: 250px;
    width: 200px;

    background-color: white;
    border-radius: 100%;

   animation: spin 3s infinite linear;
    
   
    @keyframes spin {

        100% {
            transform: rotate(720deg) translateX(calc(100vw - 60vw)) translateY(calc(100vh - 60vh)); 
        };
    }


`



function Face() {
    return (
      <FaceContainer>

      </FaceContainer>
    );
  }
  
  export default Face;
  