import { Link, StaticQuery, graphql } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet';

export const PageContainer = ({ children }) => (
  <StaticQuery
    query={graphql`
      query HeadingQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <div>
        <Helmet>
          <title>{data.site.siteMetadata.title}</title>
        </Helmet>
        <header
          style={{
            background: '#61dafb',
            padding: 16,
            position: 'fixed',
            top: 0,
            width: '100%',
            zIndex: 1
          }}
        >
          <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
            {data.site.siteMetadata.title}
          </Link>
        </header>
        <main style={{ padding: '64px 32px 32px' }}>{children}</main>
      </div>
    )}
  />
);