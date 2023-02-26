import React from 'react';
import styled, { keyframes } from 'styled-components';

const SlotOne = (props) => {
  const scrollPoint = props.scrollpoint;
  return (
    <Flex>
      <Wrapper>
        {scrollPoint >= 0 && (
          <MainContentShow>
            Get Information on Medications you need
          </MainContentShow>
        )}
        {scrollPoint >= 0 && <LogoContent />}
      </Wrapper>
    </Flex>
  );
};

const Flex = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 1140px;
  height: 1080px;
  position: relative;
`;

const slide = keyframes`
    from {
        transform: translate3d(0, 100%, 0);
        opacity: 0;
    } to {
        transform: translateZ(0);
        opacity:1;
    }
`;

const LogoContent = styled.div`
  background-image: url('/assets/image/SearchBar.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  width: 917px;
  height: 147px;
  position: absolute;
  top: 500px;
  left: 130px;
  opacity: 0;
  animation: ${slide} 1s 0.5s ease-out forwards;
`;

const show = keyframes`
    from {
        opacity: 0;
    } to {
        opacity:1;
    }
`;

const MainContentShow = styled.h1`
  width: 511px;
  font-size: 55px;
  text-align: center;
  position: absolute;
  top: 200px;
  left: 320px;
  animation: ${show} 1s ease-in;
`;

export default SlotOne;
