import React from 'react';
import styled from 'styled-components'

import Face from './components/face'

const Container = styled.div`
  background-color:green;

  height:100vh;

  display:flex;
  justify-content:center;
  align-items:center;
`
function App() {
  return (
    <Container>
      <Face />
    </Container>
  );
}

export default App;
