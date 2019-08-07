import React from "react";
import styled, { css } from "styled-components";
import { rhythm } from "../../utils/typography";
import Image from "gatsby-image";
import DevBadge from "../../../content/assets/dev-badge.svg";
import SOBadge from "../../../content/assets/so-icon.svg";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: ${rhythm(1)};
  padding: ${rhythm(0.5)};
`;

export const ProfileImage = styled(Image)`
  margin-right: ${rhythm(1 / 2)};
  margin-bottom: 0;
  min-width: 50;
  border-radius: 100%;
`;

export const AboutMe = styled.p`
  margin-bottom: ${rhythm(0.5)};
`;

export const ContactMe = styled.div`
  display: flex;
  justify-content: start;
  margin: 0;
  width: 100%;
`;

export const PersonalLink = styled.a`
  background-image: initial;
`;

const ContactCSS = css`
  margin-right: ${rhythm(1)};
  margin-bottom: 0;
  width: 25px;
  height: 25px;
`;

export const ContactImage = styled(Image)`
  ${ContactCSS}
`;

export const ContactDevBadge = styled(({ themeName, ...rest }) => (
  <DevBadge {...rest} />
))`
  ${ContactCSS}

  ${({ themeName }) =>
    themeName === "dark"
      ? css`
          filter: invert(95%);
        `
      : undefined}
`;

export const ContactSOBadge = styled(({ themeName, ...rest }) => (
  <SOBadge {...rest} />
))`
  ${ContactCSS}
  & path {
    fill: ${({ themeName }) => (themeName === "dark" ? "white" : "#121212")};
  }
`;
