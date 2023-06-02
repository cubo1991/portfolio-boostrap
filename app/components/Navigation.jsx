'use client'
import React from 'react'
import Link from "next/link";
import Nav from 'react-bootstrap/Nav';
import s from './Navigation.module.css'
const links = [{
  label: "Home",
  route: "/"
}, {
  label: "About",
  route: "/about"
}, {
  label: "Proyectos",
  route: "/projects"
}, {
  label: "Contacto",
  route: "/contacto"
}]


const Navigation = () => {
  return (
    <header className={s.header}>
          <Nav className={s.nav}
   >
      <Nav.Item className={s.navItem}>
        <Nav.Link className={s.navLink} href="/home">Inicio</Nav.Link>
      </Nav.Item>
      <Nav.Item className={s.navItem}>
        <Nav.Link className={s.navLink} href="/about">Acerca de mi</Nav.Link>
      </Nav.Item>
      <Nav.Item className={s.navItem}>
        <Nav.Link className={s.navLink} href="/projects">Proyectos</Nav.Link>
      </Nav.Item>
      <Nav.Item className={s.navItem}>
        <Nav.Link className={s.navLink} href="/contacto">Contacto</Nav.Link>
      </Nav.Item>
    </Nav>
        </header>
  )
}

export default Navigation