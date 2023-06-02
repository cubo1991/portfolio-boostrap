"use client"
import React from 'react';
import { Button } from 'react-bootstrap';
import s from './about.module.css';

const About = () => {
 

  return (
    <div className={s.container}>
     
    
      <h3 className={s.title}>Sobre Mi</h3>
        <p className={s.paragraph}>Me llamo David Lopez, nací en 1991 en la ciudad de Mar del Plata, Argentina. A los 6 años junto a mi familia nos fuimos a vivir al sur de la provincia de Mendoza, para en 1999 instalarnos definitivamente en la capital provincial, la Ciudad de Mendoza.</p>
        <br />
        <p className={s.paragraph}>En el 2009, tras completar mis estudios secundarios en la Escuela de Comercio Martín Zapata, dependiente de la Universidad Nacional de Cuyo, empecé la licenciatura en Comunicación Social en esta casa de altos estudios. Sin embargo, y debido a la incompatibilidad de tiempos con mi trabajo, tuve que abandonar la carrera en el 2015. No obstante, en el 2016 empecé a estudiar la tecnicatura en Comunicación Social en el Instituto Fabián Calle. De esta forma, y solo habiendo desaprobado un parcial en toda la carrera, me recibí como Técnico Superior en el 2019. </p>
        <br />
        <p className={s.paragraph}>En el año 2014 entré a trabajar en la Municipalidad de la Ciudad de Mendoza en el área de Prensa de la institución. Desde entonces he trabajado en distintos aspectos de la comunicación del municipio, que incluyen la redacción de notas periodísticas hasta el moderamiento de las redes sociales.</p>
        <br />
        <p className={s.paragraph}>En el 2021 decidí que mi vida iba a tomar un giro impensado hasta ese momento. Fue en julio cuando decidí empezar a navegar por los océanos del desarrollo web. Así fue que empecé el curso de Desarrollo Web de Coderhouse, seguido por uno de Javascript y otro de React. Sin embargo, en febrero del 2022 llegué a la conclusión de que no era suficiente y por eso decidí empezar en Henry mi carrera como Fullstack. Si de algo me arrepiento es de no haberme decidido antes por este camino</p>
        <br />
        <p className={s.paragraph}>En mis tiempos libres aprovecho para jugar juegos de mesa con amigos o videojuegos. También siento un cariño especial por la radio, por lo que siempre está pendiente hacer algo que la involucre.</p>
        <br />
        <span className={s.span}>Si leíste hasta acá, ¡gracias por tomarte el tiempo de conocerme! Espero que podamos trabajar juntos.</span>
      </div>
   
  );
};

export default About;
