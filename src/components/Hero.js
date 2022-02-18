import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import decore from '../assets/ded.jpg'
const Hero = () => {
  return (
    <Wrapper className='section-center'>
      <article className='content'>
        <h1>
          design your <br />
          comfort zone
        </h1>
        <img src={decore} alt='nice table' className='main-img' />
        <Link to='/products' className='btn hero-btn'>
          shop now
        </Link>
      </article>
      <article className='img-container'>
        
      </article>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  min-height: 60vh;
  display: grid;
  place-items: center;
  .img-container {
    display: block;
  }
  .main-img{
    width:100%;
    height:400px;
    background: var(--clr-primary-1);
    color: var(--clr-primary-10);
    padding: 0.375rem 0.75rem;
    letter-spacing: var(--spacing);
    display: inline-block;
    font-weight: 400;
    transition: var(--transition);
    font-size: 0.875rem;
    cursor: pointer;
    box-shadow: 0 1px 3px rgb(0 0 0 / 20%);
    border-radius: var(--radius);
    border-color: transparent;
  }
   

  h1 {
    color: var(--clr-primary-1);
  }
  @media (min-width: 992px) {
    height: calc(100vh - 5rem);
    grid-template-columns: 1fr 1fr;
    gap: 8rem;
    h1 {
      margin-bottom: 2rem;
    }
    p {
      font-size: 1.25rem;
    }
    .hero-btn {
      padding: 0.75rem 1.5rem;
      font-size: 1rem;
    }
    .img-container {
      display: block;
      position: relative;
    }
    .main-img {
      width: 230%;
      height: 400px;
    background: var(--clr-primary-1);
    color: var(--clr-primary-10);
    padding: 0.375rem 0.75rem;
    letter-spacing: var(--spacing);
    display: inline-block;
    font-weight: 400;
    transition: var(--transition);
    font-size: 0.875rem;
    cursor: pointer;
    box-shadow: 0 1px 3px rgb(0 0 0 / 20%);
    border-radius: var(--radius);
    border-color: transparent;

    }
    .accent-img {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 250px;
      transform: translateX(-50%);
      border-radius: var(--radius);
    }
   
  }
`

export default Hero
