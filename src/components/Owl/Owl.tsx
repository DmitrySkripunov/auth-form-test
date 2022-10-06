import React from 'react';
import css from './Owl.module.css';
import owlHead from './owl-head.png';
import owlNose from './owl-nose.png';
import owlLeftWing from './owl-left-wing.png';
import owlRightWing from './owl-right-wing.png';

type TOwlProps = {
  shy: boolean
};

function Owl({shy}: TOwlProps) {
  return (
    <div className={css.owl}>
        <img src={owlHead} className={css.owlHead} alt="Owl head"/>
        <div className={css.wingsBlock}>
          <img src={owlLeftWing} className={`${css.owlLeftWing} ${shy ? css.hide : ''}`} alt="Owl left wing"/>
          <img src={owlRightWing} className={`${css.owlRightWing} ${shy ? css.hide : ''}`} alt="Owl right wing"/>
        </div>
        <img src={owlNose} className={css.owlNose} alt="Owl nose"/>
    </div>
  );
}

export default Owl;
