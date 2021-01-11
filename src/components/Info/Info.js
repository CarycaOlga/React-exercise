import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import {contentInfo} from '../../data/dataStore';

const Info = () => (
  <Container>
    <Hero title={contentInfo.title} image={contentInfo.image}></Hero>
    <p>{contentInfo.text}</p>
  </Container>
);

export default Info;