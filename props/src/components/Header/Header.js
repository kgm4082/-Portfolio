import React from 'react';
import { Nav, Navbar, Container, NavDropdown, Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import isrc from '../../pages/ImgSrc'; // 이미지 경로
import headCSS from './Header.module.css'; // 헤더 CSS

function Head() {
  return (
    <Container fluid>
      <Navbar variant='dark' className='d-flex justify-content-between'>
        <Navbar.Brand className={`${headCSS.head} ms-5`}>
          <Link to='/'>
            몰입형 사이버 모의훈련을 위한 AI 기반 온라인 사이버 레인지 학습
          </Link>
        </Navbar.Brand>
        <Navbar.Brand className='d-flex me-5'>
          <Dropdown className='mx-4'>
            <Dropdown.Toggle className={headCSS.transparent}>
              <i className={`fa-solid fa-circle-user ${headCSS.icons}`} />
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item>01</Dropdown.Item>
              <Dropdown.Item>02</Dropdown.Item>
              <Dropdown.Item>03</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Navbar className={`mx-4 ${headCSS.cursor}`}>
            <i className={`fa-solid fa-bars ${headCSS.icons}`} />
          </Navbar>
          <Navbar className={`mx-4 ${headCSS.cursor}`}>
            <i className={`fa-solid fa-gear ${headCSS.icons}`} />
          </Navbar>
        </Navbar.Brand>
      </Navbar>
    </Container>
  );
}

export default Head;