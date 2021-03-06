import styled from "styled-components";

import CustomButton from "../custom-button/custom-button";

export const CollectionItemContainer = styled.div`
  width: 22vw;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;

  &:hover {
    .image {
      opacity: 0.8;
    }
    .button {
      display: block;
      opacity: 0.85;
    }
  }
  @media screen and (max-width: 800px) {
    width: 40vw;

    &:hover {
      .image {
        opacity: unset;
      }
      .button {
        opacity: unset;
      }
  }
`;

export const AddButton = styled(CustomButton)`
  width: 80%;
  opacity: 0.7;
  position: absolute;
  top: 255px;
  display: none;

  @media screen and (max-width: 800px) {
    display: block;
    opacity: 0.9;
    min-width: unset;
    padding: 0 10px;
  }
`;

export const CollectionFooterContainer = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  
  @media screen and (max-width: 800px) {
    font-size: 16px;
  }
`;

export const BackgroundImage = styled.div`
  width: 100%;
  height: 95%;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

export const NameContainer = styled.span`
  width: 90%;
  margin-bottom: 15px;
  @media screen and (max-width: 800px) {
    width: 80%;
    margin-bottom: 0;
  }
`;

export const PriceContainer = styled.span`
  width: 10%;
  text-align: right;
  @media screen and (max-width: 800px) {
    width: 20%;
  }
`;
