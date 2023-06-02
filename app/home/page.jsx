'use client'
import React from 'react'
import s from './home.module.css'
import { Button } from 'react-bootstrap'
import Link from "next/link";

const HomePage = () => {
  return (
    <div className={s.container}>
      <div className={s.buttons}>
        <Link href="/projects">
          <Button className={s.button}>Mis proyectos</Button>
        </Link>
        <Link href="/about">
          <Button className={s.button}>Acerca de mí</Button>
        </Link>
        <Link href="/contacto">
          <Button className={s.button}>Contáctame</Button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage
