import React from 'react';
import styles from './Navbar.module.css';

import { EffectFade, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';

import ufpel from '../assets/ufpel.webp';
import fapergs from '../assets/fapergs.jpg';
import Accordion from './Accordion'; 

const Navbar = () => { 
  return (
    <header className={styles.nav_box}>
      <div className={styles.box_content}>
        <div className={styles.content_title}>
          <h1>Projeto de Iniciação Cientifica</h1>
          <span>Material Didático</span>
          <h2>Para o Ensino de Cálculo I</h2>
        </div>
        <div className={styles.content_promotion}>
          <div className={styles.promotion_top}>
            <span className={styles.top_title}>Agradecimentos</span>
          </div>
          <Swiper
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 3500,
                disableOnInteraction: false,
              }}
              loop={true}
              effect={"fade"}
              modules={[Autoplay, EffectFade]}
          >
              <SwiperSlide>
                <img
                  style={{width: "100%", height: "24em"}}
                  src={ufpel}
                  alt="Ícone da categoria celulares e tablets"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  style={{width: "100%", height: "24em"}}
                  src={fapergs}
                  alt="Ícone da categoria celulares e tablets"
                />
              </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <section className={styles.box_information}>
        <div className={styles.information_box}>
          <div className={styles.box_icon}>
            <i className="bi bi-person"></i>
          </div>
          <h3>Autor</h3>
          <div className={styles.box_data}>
            <ul>
              <li>William Brum dos Santos</li>
              <li>Universidade Federal de Pelotas (UFPEL)</li>
              <li>Curso de Licenciatura em Matemática</li>
            </ul>
          </div>
        </div>
        <div className={styles.information_box}>
          <div className={styles.box_icon}>
            <i className="bi bi-award"></i>
          </div>
          <h3>Objetivo</h3>
          <div className={styles.box_data}>
            <ul>
              <li>Desenvolver materiais didáticos para cálculo I</li>
              <li>Conforme os conteúdos do livro de Cálculo I em desenvolvimento pela orientadora e coautores</li>
              <li>Gerar QR Codes para o acesso do material deste site diretamente no livro</li>
              <li>Período: 01/09/2025 até 31/08/2026</li>
            </ul>
          </div>
        </div>
        <div className={styles.information_box}>
          <div className={styles.box_icon}>
            <i className="bi bi-gear"></i>
          </div>
          <h3>Ferramentas</h3>
          <div className={styles.box_data}>
            <ul>
              <li>Linguagem de Programação Python</li>
              <li>Biblioteca de código Manim criação de vídeos didáticos com animações</li>
              <li>GeoGebra criação de figuras didáticas interativas</li>
              <li>React.js e GitHub Pages criação e publicação deste site para armazenamento do material</li>
            </ul>
          </div>
        </div>
      </section>
      <section className={styles.box_material}>
        <Accordion 
          lettering={'Função'} 
          icon={<i className='bx bx-user bx-sm' style={{marginRight: '.5em'}}></i>} 
          aling={true} 
          option={'a'} 
          handleFunction={''}  
        //   setSituation={setChoice} 
        />
        <Accordion 
          lettering={'Imagem e domínimo'} 
          icon={<i className='bx bx-user bx-sm' style={{marginRight: '.5em'}}></i>} 
          aling={true} 
          option={'b'} 
          handleFunction={''}  
        //   setSituation={setChoice} 
        />
        <Accordion 
          lettering={'Achar valor'} 
          icon={<i className='bx bx-user bx-sm' style={{marginRight: '.5em'}}></i>} 
          aling={true} 
          option={'c'} 
          handleFunction={''}  
        //   setSituation={setChoice} 
        />
      </section>
    </header>
  );
};

export default Navbar;