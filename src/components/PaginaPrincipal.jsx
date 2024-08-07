import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'aos/dist/aos.js';
import 'jquery/dist/jquery.min.js';
import '../functionality/paginaprincipal.js';
import './PaginaPrincipal.css';
import logo from '../assets/imagenes_videos/Logo.png';
import diarioGif from '../assets/imagenes_videos/diario.gif';
import videoSrc from '../assets/imagenes_videos/PRESENTACION 5.mp4';
import carrouselImages from '../Utils/CarrouselImages';
import regaloImg from '../assets/imagenes_videos/regalo landing.png';
import benefitsImages from '../Utils/BenefitsImages';
import { trimestralItems, semestralItems } from '../Utils/AssessmentData';
import faqItems from '../Utils/FAQData';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import videoPoster from '../assets/imagenes_videos/video_poster.PNG';
import bannerImg from '../assets/imagenes_videos/BannerIsma.png';

const ModalPopup = ({ handleVideoStart }) => (
  <div className="modal fade show text-center rounded-5 bg-transparent" id="exampleModal" tabIndex="-1" role="dialog"
    aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered" role="document">
      <div className="modal-content">
        <div className="modal-header" style={{ border: 'none' }}>
          <h4 className="modal-title" style={{ fontFamily: 'MarvinVisions' }}>Primera edición del diario que revolucionará la forma en la entrenas</h4>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true" onClick={handleVideoStart} style={{ color: 'white' }}>&times;</span>
          </button>
        </div>
        <div className="modal-body">
          <img src={diarioGif} alt="diario" className="diarioBienvenida" />
          <h6 className="mt-2">No es solo lo que ves, sino lo que se encuentra en su interior</h6>
          <h6>Encuéntralo en mi asesoría semestral o resérvalo ya!</h6>
        </div>
      </div>
    </div>
  </div>
);

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-light" style={{ maxWidth: '100vw' }}>
    <div className="container">
      <Link className="navbar-brand flex-grow-1" to="/">
        <img src={logo} alt="Transforma tu Vida Fitness" width="100" height="50" />
      </Link>
      <button className="navbar-toggler bg-dark" type="button" data-toggle="collapse" data-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"
        style={{ fontSize: '0.8rem' }}>
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link btn btn-success text-light" href="https://chat.whatsapp.com/IZ1QwzSyZFX0fdMkcVNwEd">Acceso a la comunidad</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

const HeaderSection = () => (
  <header className="text-center" data-aos="flip-right">
    <div className="container">
      <h1 className="frase-motivadora mb-5">Transforma tu vida hoy, únete al 10% que alcanza sus metas fitness</h1>
      <h2 className="frase-motivadora mb-5">Tenemos más de 35.000 decisiones diarias</h2>
      <h2 className="frase-motivadora mb-5">Todo comienza cuando cambias tus decisiones. Descubre cómo cambiar tu vida conmigo.</h2>
    </div>
  </header>
);

const VideoSection = ({ videoStarted, handleVideoStart }) => (
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="d-flex justify-content-center align-items-center" style={{ height: '60vh', position: 'relative' }}>
          {!videoStarted ? (
            <>
              <img src={videoPoster} alt="Vista previa del video" className="mw-100 mh-100" style={{ objectFit: 'cover' }} />
              <button onClick={handleVideoStart} style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', padding: '10px 20px', backgroundColor: '#000', color: '#fff', border: 'none', cursor: 'pointer' }}>
                Reproducir Video
              </button>
            </>
          ) : (
            <video id="miVideo" className="mw-100 mh-100" controls autoPlay poster={videoPoster}>
              <source src={videoSrc} type="video/mp4" />
              Tu navegador no soporta la reproducción de video.
            </video>
          )}
        </div>
      </div>
    </div>
  </div>
);

const InformationSection = () => (
  <section className="py-3" data-aos="zoom-in">
    <div className="container">
      <div className="row">
        <div className="col-12 text-justify" data-aos="fade-right" data-aos-duration="2000">
          <h4 className="text-center" style={{ fontFamily: 'MarvinVision' }}>Maximiza tu éxito fitness con seguimiento científico</h4>
          <p style={{ fontFamily: 'AcuminPro' }}>El 90% de las personas no alcanzan sus objetivos fitness por sí solas.</p>
          <p style={{ fontFamily: 'AcuminPro' }}>
            La investigación demuestra que el seguimiento del progreso puede aumentar significativamente tus probabilidades de éxito.
            Mi asesoría personalizada está diseñada para guiarte hacia tus metas, basándome en principios científicamente probados.{' '}
            <small>[Fuente: Harkin et al., 2016]</small>
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-12 text-center" data-aos="fade-left" data-aos-duration="2000">
          <h4 className="text-uppercase" style={{ fontFamily: 'MarvinVision' }}>¿Qué crees que hace ese 10%?</h4>
          <p style={{ fontFamily: 'AcuminPro' }}>Resultados después de tomar la mejor decisión.</p>
          <ImageCarousel />
        </div>
      </div>
    </div>
  </section>
);

const ImageCarousel = () => (
  <Carousel showArrows={true} infiniteLoop={true} showThumbs={false} showStatus={false} autoPlay={false}>
    {carrouselImages.map((image, index) => (
      <div key={index} className="carousel-image-container">
        <img src={image} alt={`Slide ${index + 1}`} className="carousel-image" />
      </div>
    ))}
  </Carousel>
);

const GiftSection = ({ irAPaginaContacto }) => (
  <div className="container">
    <div className="row text-center pointer" data-aos="fade-up">
      <div className="col-12">
        <button onClick={irAPaginaContacto}>
          <p className="titulos-fondo mb-0 p-1 text-uppercase bg-primary text-light mx-5 rounded" style={{ fontSize: '1.2rem' }}>
            Recibe tu regalo gratuito
          </p>
          <img
            src={regaloImg}
            alt="Regalo Gratis"
            className="jump img-fluid mx-auto d-block"
            style={{ maxWidth: '50%' }}
          />
        </button>
      </div>
    </div>
  </div>
);

const BenefitsSection = () => (
  <section id="beneficios" className="py-3 mt-5">
    <div className="container">
      <h2 className="titulos-fondo text-center mb-5 text-uppercase text-light bg-primary" style={{ fontWeight: 'bold' }} data-aos="zoom-in">
        Beneficios de Entrenar con un Coach
      </h2>
      <div className="row justify-content-around mb-4 fw-bold">
        {benefitsImages.map((benefit, index) => (
          <div key={index} className="col-6">
            <div className="card benefitsCard">
              <img src={benefit.src} className="benefits card-img-top w-75 align-self-center" alt={`Beneficio ${index + 1}`} />
              <div className="card-body">
                <p className="card-text text-center text-light">{benefit.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const AssessmentsSection = () => (
  <section id="beneficios" className="py-5">
    <div className="container">
      <h2 className="text-center mb-3 text-uppercase text-light bg-primary" style={{ fontWeight: 'bold' }} data-aos="zoom-in">
        Asesorías Únicas
      </h2>
      <AssessmentPlan title="Trimestral" items={trimestralItems} />
      <AssessmentPlan title="Semestral" items={semestralItems} />
    </div>
  </section>
);

const AssessmentPlan = ({ title, items }) => (
  <>
    <h3 className="text-center text-uppercase" style={{ fontWeight: 'bold' }}>{title}</h3>
    <div className="list-group" id="myList" role="tablist">
      {items.map((item, index) => (
        <a key={index} className={`list-group-item list-group-item-action ${index === 0 ? 'active' : ''}`} data-toggle="list" href={`#${item.id}`} role="tab">{item.text}</a>
      ))}
    </div>
    <div className="tab-content bg-secondary text-light p-4 m-3 rounded-5">
      {items.map((item, index) => (
        <div key={index} className={`tab-pane ${index === 0 ? 'active' : ''}`} id={item.id} role="tabpanel">{item.content}</div>
      ))}
    </div>
  </>
);

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleItem = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section className="py-5" data-aos="fade-right" data-aos-duration="1000">
      <div className="container">
        <h2 className="text-center mb-5 text-uppercase" style={{ color: '#c5c5c5', fontWeight: 'bold' }}>Preguntas Frecuentes</h2>
        <div className="accordion" id="accordionExample">
          {faqItems.map((item, index) => (
            <div key={index} className="card mb-3 box-spacing preguntas">
              <div
                className="card-header"
                id={`heading${index}`}
                onClick={() => toggleItem(index)}
                style={{ cursor: 'pointer' }}
              >
                <h2 className="mb-0">
                  <div
                    className="btn btn-link btn-block text-left btn-custom"
                    aria-expanded={activeIndex === index}
                    aria-controls={`collapse${index}`}
                  >
                    <span className="btn-text">{item.question}</span>
                    <span className="float-right">
                      <i className={`fas fa-chevron-${activeIndex === index ? 'up' : 'down'}`} aria-hidden="true"></i>
                    </span>
                  </div>
                </h2>
              </div>
              <div
                id={`collapse${index}`}
                className={`collapse ${activeIndex === index ? 'show' : ''}`}
                aria-labelledby={`heading${index}`}
                data-parent="#accordionExample"
              >
                <div className="card-body">
                  <p className="body-text">{item.answer}</p>
                  {item.link && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline-primary btn-block text-center rounded-5 btn-lg"
                    >
                      Consulta los términos y condiciones
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CallToActionSection = () => (
  <div className="call-to-action-section text-center" style={{ backgroundImage: `url(${bannerImg})`, backgroundSize: 'cover', backgroundPosition: 'center', padding: '50px 0' }}>
    <div className="container">
      <h2 className="text-light fw-bold mb-4" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>¿Tienes dudas?</h2>
      <a href="https://calendly.com/ismarodriguezfit/transforma-tu-vida-ahora" className="btn btn-success btn-lg" data-aos="fade-right">Agenda tu llamada ya</a>
    </div>
  </div>
);

const LimitedSlotsSection = () => (
  <>
    <h3 className="text-center bg-primary text-light mx-3 mb-0 mt-3" style={{ fontWeight: 'bold' }} data-aos="zoom-in">¡LAS PLAZAS SON LIMITADAS!</h3>
    <h3 className="text-center bg-primary text-light mx-3 mb-3" style={{ fontWeight: 'bold' }} data-aos="zoom-in">¿A QUÉ ESPERAS?</h3>
  </>
);

const Footer = () => (
  <footer className="text-white text-center py-4">
    <div className="container">
      <p>&copy; 2024 - ISMARFIT - Transforma tu Vida Fitness</p>
    </div>
  </footer>
);

const PaginaPrincipal = () => {
  const [videoStarted, setVideoStarted] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    function isElementInViewport(el) {
      if (!el) {
        return false;
      }
      const rect = el.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      return rect.top <= windowHeight / 2 && rect.bottom >= windowHeight / 2;
    }

    const handleScroll = () => {
      document.querySelectorAll('.benefits').forEach((benefit) => {
        if (isElementInViewport(benefit)) {
          benefit.style.backgroundColor = 'hsla(217, 89%, 51%, 0.5)';
          benefit.style.borderRadius = '50%';
        } else {
          benefit.style.backgroundColor = 'transparent';
        }
      });
    };

    const handleVisibilityChange = () => {
      document.title = document.visibilityState === 'hidden' ? '¡Vuelve pronto!' : 'Transforma tu Vida Fitness';
    };

    const handleAOSIn = (event) => {
      const detail = event.detail;
      if (detail.classList.contains('fade-up')) {
        detail.classList.remove('aos-init', 'fade-up');
        setTimeout(() => {
          detail.classList.add('aos-init', 'fade-up');
        }, 100);
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    document.addEventListener('aos:in', handleAOSIn);
    window.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      document.removeEventListener('aos:in', handleAOSIn);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleVideoStart = () => {
    setVideoStarted(true);
  };

  return (
    <div>
      <ModalPopup handleVideoStart={handleVideoStart} />
      <Navbar />
      <HeaderSection />
      <VideoSection videoStarted={videoStarted} handleVideoStart={handleVideoStart} />
      <InformationSection />
      <GiftSection />
      <BenefitsSection />
      <LimitedSlotsSection />
      <CallToActionSection />
      <AssessmentsSection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default PaginaPrincipal;

