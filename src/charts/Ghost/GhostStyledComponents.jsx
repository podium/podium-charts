import styled, { keyframes } from 'styled-components';

const pulsate = keyframes`
  to {
      background-position: -200% center;
  }
`;

export const Ghosting = styled.span`
  ${({ color }) =>
    color &&
    `
    color: ${color};
      > * {
        color: ${color};
      }
  `} ${({ size }) =>
  size &&
  `
    font-size: ${size};
      > * {
        font-size: ${size};
      }
  `} ${({ wordSpacing }) =>
  wordSpacing &&
  `
    word-spacing: ${wordSpacing};
      > * {
       word-spacing: ${wordSpacing};
      }
  `} ${({ letterSpacing }) =>
  letterSpacing &&
  `
    letter-spacing: ${letterSpacing};
      > * {
       letter-spacing: ${letterSpacing};
      }
  `} font-family: 'BLOKK';
  > * {
    font-family: 'BLOKK';
  }
  @supports (-webkit-background-clip: text) {
    animation: ${pulsate} 1.5s linear;
    -webkit-animation: ${pulsate} 1.5s linear;
    -webkit-animation-iteration-count: infinite;

    background: linear-gradient(
      to right,
      #eeeeee 20%,
      #dddddd 40%,
      #eeeeee 60%
    );
    background-size: 200% auto;

    background-clip: text;
    text-fill-color: transparent;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    > * {
      background: linear-gradient(
        to right,
        #eeeeee 8%,
        #dddddd 18%,
        #eeeeee 33%
      );
      background-size: 200% auto;
      background-clip: text;
      text-fill-color: transparent;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;

      text-overflow: unset;
      font-family: 'BLOKK';
      animation: ${pulsate} 1.5s linear;
      -webkit-animation: ${pulsate} 1.5s linear;
      -webkit-animation-iteration-count: infinite;
    }
  }
`;
