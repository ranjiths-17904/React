import React from 'react';
import styled from 'styled-components';

const Pattern = () => {
  return (
    <StyledWrapper>
      <div className="container" />
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  /*
  More comprehensive version at shenanigans.shoghisimon.ca/collection/css-rain-bg/
   */

  .container {
    position: absolute;
    inset: 0;
    z-index: 1;
  }

  .container::before {
    content: "";
    position: absolute;
    inset: -145%;
    rotate: 45deg;
    background: transparent;
    background-image: radial-gradient(3px 60px at 0px 150px, #3b82f6, #0000),
      radial-gradient(3px 60px at 200px 150px, #3b82f6, #0000),
      radial-gradient(1px 1px at 100px 75px, #3b82f6 100%, #0000 150%),
      radial-gradient(3px 60px at 0px 200px, #3b82f6, #0000),
      radial-gradient(3px 60px at 200px 200px, #3b82f6, #0000),
      radial-gradient(1px 1px at 100px 100px, #3b82f6 100%, #0000 150%),
      radial-gradient(3px 60px at 0px 100px, #3b82f6, #0000),
      radial-gradient(3px 60px at 200px 100px, #3b82f6, #0000),
      radial-gradient(1px 1px at 100px 50px, #3b82f6 100%, #0000 150%),
      radial-gradient(3px 60px at 0px 250px, #3b82f6, #0000),
      radial-gradient(3px 60px at 200px 250px, #3b82f6, #0000),
      radial-gradient(1px 1px at 100px 125px, #3b82f6 100%, #0000 150%);
    background-size:
      200px 150px,
      200px 150px,
      200px 150px,
      200px 200px,
      200px 200px,
      200px 200px,
      200px 100px,
      200px 100px,
      200px 100px,
      200px 250px,
      200px 250px,
      200px 250px;
    animation: shootingStars 120s linear infinite;
  }

  @keyframes shootingStars {
    0% {
      background-position:
        0px 100px,
        200px 100px,
        100px 50px,
        0px 150px,
        200px 150px,
        100px 75px,
        0px 50px,
        200px 50px,
        100px 25px,
        0px 200px,
        200px 200px,
        100px 100px;
    }
    to {
      background-position:
        0px 5000px,
        200px 5000px,
        100px 2500px,
        0px 5500px,
        200px 5500px,
        100px 2750px,
        0px 4500px,
        200px 4500px,
        100px 2250px,
        0px 6000px,
        200px 6000px,
        100px 3000px;
    }
  }`;

export default Pattern;
