import React from "react"
import { Link, graphql } from "gatsby"
import { Helmet } from "react-helmet"
import Heading from "../components/heading"
import SimpleSlider from "../components/slider"
import PostBlock from "../components/postblock"
import CallToAction from "../components/calltoaction"
import Blockcontainer from "../components/blocksContainer"
import Layout from "../layouts/layout"
import '../styles/normalize.css'
import "../styles/webflow.css"
import "../styles/soynuevo.webflow.css"


export default function Home({data}) {
  
  return (
    
    <React.Fragment> 
      <Helmet title="Temas resumidos para antes del examen | Inicio">
                <meta name="description" content="Preparate para tu examen en 5 minutos con nuestros temas resumidos para preparatoria y universidad"/>
      </Helmet>
    <Layout>
    <SimpleSlider/>
    <CallToAction/>
    <div style={{marginLeft: "2%", marginRight: "2%"}}>
      <Link to="/categorias/"><Heading color="dark" >Encuentra temas resumidos de todas las materias </Heading></Link>

      <Link to="/categorias/"><h2 className="heading-categoria" style={{color:"#003049"}}>Nuestros últimos temas de examen {">"}</h2></Link>
      <Blockcontainer>
        {data.allMarkdownRemark.edges.map(({ node }) => { 
          return(
          <Link key={node.id} to={node.frontmatter.slug}>
              <PostBlock name={node.frontmatter.title} text={node.frontmatter.short_description} nivel={node.frontmatter.dificultad} background={node.frontmatter.featuredimage} />
          </Link>)
        })}
      </Blockcontainer>
{/*
      <Link to="/categorias/espanol/"><h2 className="heading-categoria" style={{color:"#003049"}}>Ve todo en Español {">"}</h2></Link>
      <Blockcontainer>
        {data.allMarkdownRemark.edges.map(({ node }) => {
          if(node.frontmatter.categoria.includes('Español')){ return(
            <Link key={node.id} to={node.frontmatter.slug}>
              <PostBlock name={node.frontmatter.title} text={node.frontmatter.short_description} nivel={node.frontmatter.dificultad} background={node.frontmatter.featuredimage} />
          </Link>)
          }else
          {
            return (null)
          }
        })}
      </Blockcontainer>
      <Link to="/categorias/literatura/"><h2 className="heading-categoria" style={{color:"#003049"}}>Ve todo en Literatura {">"}</h2></Link>
      <Blockcontainer>
        {data.allMarkdownRemark.edges.map(({ node }) => {
          if (node.frontmatter.categoria.includes('Literatura')) {
            return (
              <Link key={node.id} to={node.frontmatter.slug}>
                <PostBlock name={node.frontmatter.title} text={node.frontmatter.short_description} nivel={node.frontmatter.dificultad} background={node.frontmatter.featuredimage} />
              </Link>)
          }else
          { 
            return (null)
          }
        })}
      </Blockcontainer>
      <Link to="/categorias/geografia/"><h2 className="heading-categoria" style={{color:"#003049"}}>Ve todo en Geografía {">"}</h2></Link>
      <Blockcontainer>
        {data.allMarkdownRemark.edges.map(({ node }) => {
          if(node.frontmatter.categoria.includes('Geografía')){ return(
            <Link key={node.id} to={node.frontmatter.slug}>
              <PostBlock name={node.frontmatter.title} text={node.frontmatter.short_description} nivel={node.frontmatter.dificultad} background={node.frontmatter.featuredimage} />
          </Link>)
          }else
          {
            return (null)
          }
        })}
      </Blockcontainer>
      <Link to="/categorias/historia-universal/"><h2 className="heading-categoria" style={{color:"#003049"}}>Ve todo en Historia Universal {">"}</h2></Link>
      <Blockcontainer>
        {data.allMarkdownRemark.edges.map(({ node }) => {
          if (node.frontmatter.categoria.includes('Historia') && !node.frontmatter.categoria.includes('México')) {
            return (
              <Link key={node.id} to={node.frontmatter.slug}>
                <PostBlock name={node.frontmatter.title} text={node.frontmatter.short_description} nivel={node.frontmatter.dificultad} background={node.frontmatter.featuredimage} />
              </Link>)
          }else
          {
            return (null)
          } 
        })}
      </Blockcontainer>
      <Link to="/categorias/historia-de-mexico/"><h2 className="heading-categoria" style={{color:"#003049"}}>Ve todo en Historia de México {">"}</h2></Link>
      <Blockcontainer>
        {data.allMarkdownRemark.edges.map(({ node }) => {
          if (node.frontmatter.categoria.includes('México')) {
            return (
              <Link key={node.id} to={node.frontmatter.slug}>
                <PostBlock name={node.frontmatter.title} text={node.frontmatter.short_description} nivel={node.frontmatter.dificultad} background={node.frontmatter.featuredimage} />
              </Link>)
          }else
          {
            return (null)
          }
        })}
      </Blockcontainer>
      <Link to="/categorias/biologia/"><h2 className="heading-categoria" style={{color:"#003049"}}>Ve todo en Biología {">"}</h2></Link>
      <Blockcontainer>
        {data.allMarkdownRemark.edges.map(({ node }) => {
          if (node.frontmatter.categoria.includes('Biología')) {
            return (
              <Link key={node.id} to={node.frontmatter.slug}>
                <PostBlock name={node.frontmatter.title} text={node.frontmatter.short_description} nivel={node.frontmatter.dificultad} background={node.frontmatter.featuredimage} />
              </Link>)
          }else
          {
            return (null)
          }
        })}
      </Blockcontainer> */}
      </div>
      </Layout>
    </React.Fragment>

    
  )
  
}

export const query = graphql`
  query {
    
          allMarkdownRemark(limit: 12, sort: {fields: [frontmatter___date], order: DESC}) {
            totalCount
            edges {
              node {
                id
                frontmatter {
                  date(formatString: "DD MMMM, YYYY")
                  slug
                  dificultad
                  featuredimage
                  tags
                  title
                  categoria
                  short_description
                }
                excerpt
              }
            }
          }
  }
`