import styled from 'styled-components';

export const VideoCardContainer = styled.a`
  width: 298px;
  height: 197px;
  border: 2px solid;
  text-decoration: none;
  overflow: hidden;
  background-image: ${({ url }) => `url(${url})`};
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  display: inline-block;
  padding: 16px;

  transition: opacity .3s;
  &:hover,
  &:focus {
    opacity: .5;
  }
  
  &:not(:first-child) {
    margin-left: 20px;
  }
`;
