import React from 'react'
import { GiCompass, GiDiamondHard } from 'react-icons/gi'
import {AiFillDollarCircle} from 'react-icons/ai'
export const links = [
  {
    id: 1,
    text: 'home',
    url: '/',
  },
  {
    id: 2,
    text: 'about',
    url: '/about',
  },
  {
    id: 3,
    text: 'products',
    url: '/products',
  },
]

export const services = [
  {
    id: 1,
    icon: <GiCompass />,
    title: 'our mission',
    text:
      'Our mission is to create Value for our customers through Reliability and Flexibility.We want our customers to experience the warmth and comfort through Respect and Trust.',
  },
  {
    id: 2,
    icon: <GiDiamondHard />,
    title: 'our vision',
    text:
      'Our vision is to be a leading international furniture manufacturer offering innovative and superior quality products.',
  },
  {
    id: 3,
    icon: <AiFillDollarCircle />,
    title: 'value for money',
    text:
      'We offer a wide range of well-designed, functional home furniture products at prices many people can enjoy.',
  },
]

export const products_url = 'https://course-api.com/react-store-products'

export const single_product_url = `https://course-api.com/react-store-single-product?id=`
