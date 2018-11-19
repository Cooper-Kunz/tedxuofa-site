import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import Bio from '../components/Bio'
import Speaker from '../components/Speaker'
import Layout from '../components/Layout'
import { rhythm } from '../utils/typography'

import Pic1 from '../assets/headshots/robbins.png'
import Pic2 from '../assets/headshots/kapp.jpg'
import Pic3 from '../assets/headshots/cabrera.jpg'
import Pic4 from '../assets/headshots/bean.jpg'
import Pic5 from '../assets/headshots/cuello.jpg'
import Pic6 from '../assets/headshots/oberman.jpg'
import Pic7 from '../assets/headshots/warren.jpg'

class Index extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const siteDescription = get(
      this,
      'props.data.site.siteMetadata.description'
    )
    const posts = get(this, 'props.data.allMarkdownRemark.edges')

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={siteTitle}
        />
        <h1 style={{ textAlign: 'center'}}>Get involved in our 2019 conference</h1>
        <div style={{
          marginBottom: rhythm(2.5),
        }}>
          <h3 style={{ textAlign: 'center'}}><a href="https://uarizona.co1.qualtrics.com/jfe/form/SV_3Cqs9Go6bMboALj">Apply to become a Speaker</a></h3>
        </div>
        <h1 style={{ textAlign: 'center' }}>Our 2018 Speakers and Videos</h1>
        <Speaker name='Sherrard Robbins' bio='Under the Page: A Philosphical Look at the Darkside of Comics' picture={Pic1} />
        <iframe style={{ width: '100%' }} height="315" src="https://www.youtube.com/embed/zjXspIZ5bwI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <Speaker name='Jessica Kapp' bio='Taking Risks in Pursuit of Self-Discovery' picture={Pic2} />
        <iframe style={{ width: '100%' }} height="315" src="https://www.youtube.com/embed/aTcSJ5PVG0U" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <Speaker name='Nolan Cabrera' bio='"White Immunity": Working through the pitfalls of "privilege" discourse' picture={Pic3} />
        <iframe style={{ width: '100%' }} height="315" src="https://www.youtube.com/embed/JtLpAfB-DEc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <Speaker name='Jonathan Bean' bio='Demand Less: Making a Market for Better Buildings' picture={Pic4} />
        <iframe style={{ width: '100%' }} height="315" src="https://www.youtube.com/embed/2XwBcqBXH5w" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <Speaker name='Joel Cuello' bio='AI Does Food' picture={Pic5} />
        <iframe style={{ width: '100%' }} height="315" src="https://www.youtube.com/embed/LrDey_iTPIE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <Speaker name='Hester Oberman' bio='Belief Out of the Closet: Believing in the 21st Century' picture={Pic6} />
        <iframe style={{ width: '100%' }} height="315" src="https://www.youtube.com/embed/Yj8msuMoGKM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <Speaker name='Caleb Warren' bio='What makes things cool?' picture={Pic7} />
        <iframe style={{ width: '100%' }} height="315" src="https://www.youtube.com/embed/_Z7hkfkCEno" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <h1 style={{ textAlign: 'center' }}> Learn more about <span style={{ color: '#e62b1e'}}>TEDx</span>UofA </h1>
        {posts.map(({ node }) => {
          const title = get(node, 'frontmatter.title') || node.fields.slug
          return (
            <div key={node.fields.slug}>
              <h3
                style={{
                  marginBottom: rhythm(1 / 4),
                }}
              >
                <Link style={{ boxShadow: 'none', color: 'red', textDecoration: 'underline' }} to={node.fields.slug}>
                  {title}
                </Link>
              </h3>
              <small>{node.frontmatter.date}</small>
              <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
            </div>
          )
        })}
        <Bio />
      </Layout>
    )
  }
}

export default Index

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`
