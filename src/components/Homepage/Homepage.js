import React from 'react'
import '../../pages/style.css'
import './BirdAnimation.css'
import { Container, Row, Col } from 'react-bootstrap'
import Text from '../Homepage/Text'
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from 'react-icons/ai'
import { FaLinkedinIn } from 'react-icons/fa'
import tree from '../../Assets/tree1.png'

function Home() {
  return (
    <div className='homepagebackground'>
      {/* bird animation */}
      <div className='bird-container bird-container-one'>
        <div className='bird bird-one'></div>
      </div>
      <div className='bird-container bird-container-two'>
        <div className='bird bird-two'></div>
      </div>
      <div className='bird-container bird-container-three'>
        <div className='bird bird-three'></div>
      </div>
      <div className='bird-container bird-container-four'>
        <div className='bird bird-four'></div>
      </div>

      <Container>
        <Row>
          <Col md={8}>
            <h2 className='headtext'>
              Hello <span className='wave'>👋 </span>
            </h2>
            <h2 className='nametext'>I'm Gurnoor Deol</h2>
            <span></span>
            <Text />
            <div style={{ display: 'flex', gap: '20px', marginTop: '16px' }}>
              <a
                href='https://github.com/Deol7777'
                target='_blank'
                rel='noopener noreferrer'
                className='socialLink'
              >
                <AiFillGithub className='icon' />
              </a>
              <a
                href='https://www.linkedin.com/in/rahulvijay81/'
                target='_blank'
                rel='noopener noreferrer'
                className='socialLink'
              >
                <FaLinkedinIn className='icon' />
              </a>
              <a
                href='https://twitter.com/rahulvijay8156'
                target='_blank'
                rel='noopener noreferrer'
                className='socialLink'
              >
                <AiOutlineTwitter className='icon' />
              </a>
              <a
                href='https://instagram.com/rahulvijay81'
                target='_blank'
                rel='noopener noreferrer'
                className='socialLink'
              >
                <AiFillInstagram className='icon' />
              </a>
            </div>
          </Col>

          <Col md={4}>
            <img id='tree' src={tree} alt='Tree' />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Home