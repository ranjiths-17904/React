// import React from 'react';
import styled from 'styled-components';

const Loader = () => {
  return (
    <StyledWrapper>
      <div className="loader" />
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999; /* Ensure it's above everything */
  margin: 0;
  padding: 0;
  box-sizing: border-box;

  * {
    box-sizing: inherit;
  }

  .loader {
    position: relative;
    width: 120px;
    height: 90px;
    background: transparent; /* ✅ Ensure no default white background */
  }

  .loader:before,
  .loader:after {
    background: transparent; /* ✅ Ensure these don't create white boxes */
  }

  .loader:before {
    content: "";
    position: absolute;
    bottom: 30px;
    left: 50px;
    height: 30px;
    width: 30px;
    border-radius: 50%;
    background: linear-gradient(to right, #f64f59, #c471ed, #12c2e9);
    animation: loading-bounce 0.5s ease-in-out infinite alternate;
  }

  .loader:after {
    content: "";
    position: absolute;
    right: 0;
    top: 0;
    height: 7px;
    width: 45px;
    border-radius: 4px;
    box-shadow:
      0 5px 0 #f2f2f2,
      -35px 50px 0 #f2f2f2,
      -70px 95px 0 #f2f2f2;
    animation: loading-step 1s ease-in-out infinite;
  }

  @keyframes loading-bounce {
    0% {
      transform: scale(1, 0.7);
    }

    40% {
      transform: scale(0.8, 1.2);
    }

    60% {
      transform: scale(1, 1);
    }

    100% {
      bottom: 140px;
    }
  }

  @keyframes loading-step {
    0% {
      box-shadow:
        0 10px 0 rgba(25, 25, 25, 0),
        0 10px 0 #ffffff,
        -35px 50px 0 #f2f2f2,
        -70px 90px 0 #f2f2f2;
    }

    100% {
      box-shadow:
        0 10px 0 #f2f2f2,
        -35px 50px 0 #f2f2f2,
        -70px 90px 0 #f2f2f2,
        -70px 90px 0 rgba(0, 0, 0, 0);
    }
  }
`;

export default Loader;
