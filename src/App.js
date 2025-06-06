import React, { useEffect } from 'react';
import { Route, Routes, HashRouter, Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { HelmetProvider, Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import About from './pages/About';
import CV from './pages/CV';
import Elsewhere from './pages/Elsewhere';
import cv from "./assets/cv.pdf";
import profileImage from "./assets/profile.jpg";

function AppContent() {
  const location = useLocation();

  useEffect(() => {
    // Send a pageview event to Google Analytics on route change
    window.gtag("event", "page_view", {
      page_path: location.pathname,
    });
  }, [location]);

  return (
    <div className="App">
      <HelmetProvider>
        <Helmet>
          <title>asicuima</title>
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://asicuima.github.io/myspace/" />
          <meta property="og:title" content="asicuima" />
          <meta property="og:description" content="A website all about Liangliang Ma." />
          <meta property="og:image" content={profileImage} />

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:url" content="https://asicuima.github.io/myspace/" />
          <meta name="twitter:title" content="asicuima" />
          <meta name="twitter:description" content="A website all about Liangliang Ma." />
          <meta name="twitter:image" content={profileImage} />

          <meta name="title" content="asicuima" />
          <meta name="description" content="A website all about Liangliang Ma." />
          <meta name="author" content="Liangliang Ma" />
        </Helmet>
        <Container className="pt-5">
          <Navbar expand="lg">
            <Navbar.Brand as={Link} to="/">Liangliang Ma</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link as={Link} to="/">About</Nav.Link>
                <Nav.Link href={cv} target="_blank" rel="noreferrer">CV</Nav.Link>
                <Nav.Link as={Link} to="/elsewhere">Elsewhere</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <hr className='mb-5' />

          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/cv" element={<CV />} />
            <Route path="/elsewhere" element={<Elsewhere />} />
          </Routes>
        </Container>
      </HelmetProvider>
    </div>
  );
}

function App() {
  return (
    <HashRouter>
      <AppContent />
    </HashRouter>
  );
}

export default App;
