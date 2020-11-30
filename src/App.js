import React from 'react';
import styled from 'styled-components'

import ReactGA from 'react-ga'


import ContentLevel from './components/contentLevel'
import Face from './components/face'

ReactGA.initialize("UA-183942084-2")
ReactGA.pageview(window.location.pathname + window.location.search);

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

const UploadContainer = styled.div`
    height: 10vh;

    display:flex;
    justify-content: center;
    align-items: center;

  //   @media (max-width: 768px){
  //     flex-direction: column-reverse;
  // }



`

const UploadButton = styled.input`
    height: auto;
    margin: 0;
    margin-bottom: 5px;
`


function App() {

  // This blog post` was extremely useful for uploading on the client site https://dev.to/asimdahall/client-side-image-upload-in-react-5ffc

  const uploadedImage = React.useRef(null);

  const handleImageUpload = e => {

    const [file] = e.target.files;
    if (file) {
      const input = new FileReader();
      const {current} = uploadedImage;
      current.file = file
      input.onload = (e) => {
        current.src = e.target.result;
      }
      input.readAsDataURL(file);
    }
  };


  return (
    <Container>
      <ContentLevel />
        
      <FaceLevel>
        <Face dataPass = {uploadedImage} />        
      </FaceLevel>


      <UploadContainer>
            <UploadButton onChange={handleImageUpload} type="file" accept="image/*"  multiple = "false"/>
            <h4>Upload a friends image</h4>

      </UploadContainer>



    </Container>
  );
}

export default App;
