import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import {
    container,
    heading,
    navLinks,
    navLinkItem,
    navLinkText,
    siteTitle
  } from './layout.module.css'
  import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap" 

  

const Layout = ({ pageTitle, children }) => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)
    return (
        <div> 
            <title>{pageTitle} | {data.site.siteMetadata.title}</title>
            <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/">Thijs Onwijs</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="/projects">Projects</Nav.Link>
                    <Nav.Link href="/about">About</Nav.Link>
                    <Nav.Link href="/contact">Contact</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        <div className={container}>

           
            <main>
                <h1 className={heading}>{pageTitle}</h1>
                {children}
            </main>
        </div>
        </div>
    )
}

export default Layout