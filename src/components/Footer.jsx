import React from 'react'
import styles from './Footer.module.css';
import pngFapergs from '../assets/pngFapergs.png';
import pngUfple from '../assets/pngUfpel.png';

const Footer = () => {
  return (
    <footer style={{marginTop: "5em"}}>
      <div className={styles.box_content}>
        <div className={styles.content_personal}>
          <span className={styles.footer_span}>Contato</span>
          <div className={styles.personal_item}>
            <i className="bi bi-person" style={{marginRight: ".5em"}}></i>
            <a target="_blank" href="https://lattes.cnpq.br/7056014700140445">Curriculo Lattes</a>
          </div> 
          <div className={styles.personal_item}>
            <i className="bi bi-envelope"></i>
            <span style={{marginLeft: ".5em", fontSize: "14px", fontWeight: "400", color: "#4a4a4a"}}>william.brum@ufpel.edu.br</span>
          </div>
        </div>
        <div className={styles.content_institutional}>
          <span className={styles.footer_span}>Instituições</span>
          <div className={styles.institutional_img}>
            <img src={pngUfple} alt="" style={{marginRight: "1em", marginLeft: ".6em"}} />
            <img src={pngFapergs} alt="" />
          </div>
        </div>
      </div>
      <div className={styles.box_bottom}>
        <span>&#169; 2026, Todos os direitos reservados</span>
      </div>
    </footer>
  );
}

export default Footer;