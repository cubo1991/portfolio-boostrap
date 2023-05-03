'use client'
import React from 'react'
import Link from "next/link";
import Nav from 'react-bootstrap/Nav';
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
    <header>
          <Nav
   >
      <Nav.Item>
        <Nav.Link href="/home">Inicio</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/about">Acerca de mi</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/projects">Proyectos</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/contacto">Contacto</Nav.Link>
      </Nav.Item>
    </Nav>
        </header>
  )
}

export default Navigation