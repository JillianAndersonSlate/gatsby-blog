import React from "react";
import { css } from "@emotion/core";
import { useStaticQuery, Link, graphql } from "gatsby";
import { rhythm } from "../utils/typography";

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `0.8rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
);

const Layout = ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  );
  return (
    <div
      css={css`
        margin: 0 auto;
        max-width: 700px;
        padding: ${rhythm(2)};
        padding-top: ${rhythm(1.5)};
      `}
    >
      <header style={{ marginBottom: `1.5rem` }}>
        <Link to="/">
          <h3
            css={css`
              margin-bottom: ${rhythm(2)};
              display: inline-block;
              font-style: normal;
            `}
          >
            {data.site.siteMetadata.title}
          </h3>
        </Link>
        <ul style={{ float: `right` }}>
          <ListLink to="/">Home</ListLink>
          <ListLink to="/about/">About</ListLink>
        </ul>
        {children}
      </header>
    </div>
  );
};

export default Layout;
