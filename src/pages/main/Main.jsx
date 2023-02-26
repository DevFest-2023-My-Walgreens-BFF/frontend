import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import SlotOne from './SlotOne';
import SlotTwo from './SlotTwo';
const Main = () => {
  const [scrollPoint, setScrollPoint] = useState(0);

  const updateScroll = () => {
    setScrollPoint(window.scrollY || document.documentElement.scrollTop);
  };

  useEffect(() => {
    window.addEventListener('scroll', updateScroll);
  }, []);

  return (
    <Wrapper>
      <SlotOne scrollpoint={scrollPoint} />
      <SlotTwo scrollpoint={scrollPoint} />
    </Wrapper>
  );
};
const Wrapper = styled.div`
  height: 400vh;
  display: flex;
  flex-direction: column;
`;
export default Main;
