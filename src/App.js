import React from 'react';
import styled from 'styled-components'

import ContentLevel from './components/contentLevel'
import Face from './components/face'

const Container = styled.div`

  height:100vh;

`



const FaceLevel = styled(Container)`
  height: 100vh;
  width:100vw;

  display:flex;
  justify-content:center;
  align-items:center;

  position: absolute;
  z-index: -1;
  top:0;
  left:0;

`
function App() {
  return (
    <Container>
      <ContentLevel />
        
      <FaceLevel>
        <Face />
      </FaceLevel>

    </Container>
  );
}

export default App;
