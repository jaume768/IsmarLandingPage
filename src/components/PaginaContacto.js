import React from 'react';
import { Modal, Button } from 'react-bootstrap';

class PaginaContacto extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showModal: false };
  }

  openPopup = () => {
    this.setState({ showModal: true });
    this.startVideos();
  };

  hidePopup = () => {
    this.setState({ showModal: false });
  };

  startVideos = () => {
    const video1 = document.getElementById('videoLogo1');
    const video2 = document.getElementById('videoLogo2');
    if (video1) video1.play();
    if (video2) video2.play();
  };

  render() {
    return (
      <div>
        <div className="text-center mt-5">
          <h1 className="giftHeader">¡Recibe tu regalo gratis!</h1>
          <Button variant="primary" className="mt-3" onClick={this.openPopup}>Ver regalo</Button>
        </div>

        <Modal show={this.state.showModal} onHide={this.hidePopup} centered>
          <Modal.Header>
            <Button variant="dark" className="close" onClick={this.hidePopup}>&times;</Button>
          </Modal.Header>
          <Modal.Body>
            <div className="text-center">
              <video id="videoLogo1" className="mw-100 mh-100 loop" muted>
                <source src={require('../assets/imagenes_videos/isf.mp4')} type="video/mp4" />
                Tu navegador no soporta la reproducción de video.
              </video>
              <video id="videoLogo2" className="mw-100 mh-100 loop">
                <source src={require('../assets/imagenes_videos/firma_Isma.mp4')} type="video/mp4" />
                Tu navegador no soporta la reproducción de video.
              </video>
              <h2>La mejor inversión empieza en ti</h2>
              <div className="w-100">
                <h3>OBTENER GUIA GRATUITA YA</h3>
                <a href="http://eepurl.com/iOvC1Y" name="subscribe" className="btn btn-success text-uppercase text-dark">Recíbela ya</a>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

export default PaginaContacto;
