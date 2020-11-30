import React from 'react';
import styled from 'styled-components'



const FaceContainer = styled.div`
    height: 250px;
    width: 200px;

    background-color: blue;
    border-radius: 100%;

    border-style: solid;

    animation: spin 4s infinite linear;
    
   
    @keyframes spin {

        100% {
            transform: rotate(720deg) translateX(calc(100vw - 60vw)) translateY(calc(100vh - 60vh)); 
        };
    }


`

const FaceImage = styled.img`
    height:100%;
    width:100%;
    object-fit: cover;

    border-radius: 100%;

`


function Face(props) {
    return (
      <FaceContainer>
        <FaceImage ref={props.dataPass}/>
      </FaceContainer>
    );
  }
  
  export default Face;
  