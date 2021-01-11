import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import {contentFaq} from '../../data/dataStore';

const Faq = () => (
  <Container>
    <Hero title={contentFaq.title} image={contentFaq.image}></Hero>
    <p>{contentFaq.text}</p>
  </Container>
);
  
export default Faq;