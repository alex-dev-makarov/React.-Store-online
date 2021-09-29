import styled from "styled-components";

import { NavLink } from "react-router-dom";

export const Line = styled.span`
  display: inline-block;
  width: 50%;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  border-bottom: 1px solid black;

  @media screen and (max-width: 800px) {
    display: none;
  }
`;

export const HeaderContainer = styled.div`
  min-height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
  position: relative;

  @media screen and (max-width: 800px) {
    min-height: 50px;
    margin-bottom: 15px;
  }
`;

export const LogoContainer = styled(NavLink)`
  height: 100%;
  width: 70px;
  padding: 25px @media screen and (max-width: 800px) {
    width: 50px;
    padding: 0;
  }
`;
export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  @media screen and (max-width: 800px) {
    width: 80%;
  }
`;

export const OptionNavLink = styled(NavLink)`
  padding: 10px 15px;
  cursor: pointer;
`;
