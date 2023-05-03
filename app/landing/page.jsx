'use client'
import React from 'react'
import { Button } from 'react-bootstrap'
import s from './landing.module.css'
import Link from "next/link";

const Landing = () => {
  return (
    <div className={s.contenedor}>
      <div className={s.botones}>
      <Link href={'/home'}>  <Button>Ingresá</Button> </Link>
        <Button>Contactame</Button>
      </div>
    </div>
  )
}

export default Landing
