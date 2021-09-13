import styled  from "styled-components";

import { NavLink } from "react-router-dom";

export const Line = styled.span`
  width: 50%;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  border-bottom: 1px solid black;
`;

export const HeaderContainer = styled.div`
  min-height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
  position: relative;
`;

export const LogoContainer = styled(NavLink)`
  height: 100%;
  width: 70%;
  padding-left: 10px;
`;
export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const OptionNavLink = styled(NavLink)`
  padding: 10px 15px;
  cursor: pointer;
`;
