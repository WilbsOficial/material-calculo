import React, { useState, useRef } from 'react';
import styles from './Accordion.module.css';
// import IOSButton from './IOSButton';
// import StarComment from './StarComment';
// import { useAuth } from '../AuthContext';
// import api from '../Services/api';

const Accordion = ({ lettering, icon, aling, option, handleFunction, setSituation }) => {

  const items = [
    { value: 'minha', label: 'Minha conta' },
    { value: 'anonima', label: 'Anônima' }
  ];

  const [selectedOption, setSelectedOption] = useState('minha');
  const [comment, setComment] = useState('');
  const contentRef = useRef(null);

  const grupStars = [1, 2, 3, 4, 5];
  const [activeIte, setActiveIte] = useState(1);

  const toggleAccordion = () => {
    if (contentRef.current) {
      contentRef.current.classList.toggle(styles.show);
      setSelectedOption('minha');
      setActiveIte(1);
      setComment('');
    };
  };

  const onClickedLoja = () =>
  {
      api.post("/api/send-code-email", { email: user.email}, { withCredentials: true }).then((res) => {
        console.log(res);
      }).catch((error) =>{
        console.log(error)
      })
  }

  const handleStar = (ite) => {
    setActiveIte(ite);
  };

  const handleGetComent = (e) => {
    e.preventDefault();
    setComment(e.target.value);
  };

  const handleSituationComment = () => {
    let commentObject = {
      privacity: selectedOption,
      stars: activeIte,
      opinion: comment,
    };

    console.log(commentObject)


    setSituation([commentObject]);
    toggleAccordion();
  };


  const [algo, setAlgo] = useState('');

  console.log(algo)

  const handleToggle = (state) => {
    console.log('Toggle está:', state ? 'Ligado' : 'Desligado');
  };
  
  return (
    <div className={styles.accordion}>
      <button
        className={styles.button}
        onClick={toggleAccordion}
        style={aling ? { display: 'flex', textAlign: 'start', alignItems: 'center' } : null}
      >
        {icon && icon}
        {lettering}
      </button>
      <div ref={contentRef} className={styles.content}>
        {option === "a" && (
          <div className={styles.cancel_buy_box}>
          </div>
        )}
        {option === "b" && (
          <div className={styles.avalie_buy_box}>
          </div>
        )}
      </div>
    </div>
  );
};

export default Accordion;