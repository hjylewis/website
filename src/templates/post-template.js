import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Post from "../components/Post";

const PostTemplate = ({ data }) => {
  const {
    title: siteTitle,
    subtitle: siteSubtitle,
    url: siteUrl,
  } = data.site.siteMetadata;

  const { title: postTitle, description: postDescription } =
    data.markdownRemark.frontmatter;
  const { slug } = data.markdownRemark.fields;

  const metaDescription =
    postDescription !== null ? postDescription : siteSubtitle;

  return (
    <Layout
      title={`${postTitle} - ${siteTitle}`}
      description={metaDescription}
      meta={[
        <meta name="twitter:card" content="summary_large_image" />,
        <meta name="twitter:title" content={postTitle} />,
        <meta name="twitter:description" content={metaDescription} />,
        <meta name="twitter:creator" content="@hjylewis" />,
        <meta
          name="twitter:image"
          content={`${siteUrl}${slug}twitter-card.jpg`}
        />,
      ]}
    >
      <Post post={data.markdownRemark} />
    </Layout>
  );
};

export const query = graphql`
  query PostBySlug($slug: String!) {
    site {
      siteMetadata {
        author {
          name
          contacts {
            twitter
          }
        }
        disqusShortname
        subtitle
        title
        url
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      fields {
        slug
        tagSlugs
      }
      frontmatter {
        date
        description
        tags
        title
      }
    }
  }
`;

export default PostTemplate;
