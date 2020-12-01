import React from "react"
import PropTypes from "prop-types"
import { Link, graphql } from "gatsby"
import Heading from "../components/heading"
import Layout from "../layouts/layout"
import CategoriesBlock from "../components/categoriesBlock"
import InfoBlock from "../components/infoblock"
// Utilities
import kebabCase from "lodash/kebabCase"

// Components
import { Helmet } from "react-helmet"

const imageMapper ={
  Español: require("../images/slider/espanol.jpg"),
  Literatura: require("../images/slider/literatura.jpg"),
  Geografía: require("../images/slider/geografia.jpg"),
  HistoriaUniversal: require("../images/slider/historia.jpg"),
  HistoriadeMéxico: require("../images/slider/historiamexico.jpg"),
  Biología: require("../images/slider/biologia.jpg"),
  Asar: require("../images/slider/asar.jpg")
}

const CategoriasPage = ({
  data: {
    allMarkdownRemark: { group},
    site: {
      siteMetadata: { title },
    },
  },
}) => (
        <Layout>
          <Helmet title={title} />
        <div>
            <div>
                <Heading color="dark" alignment="center">Todas las Materias</Heading>
                <div style={{paddingLeft:"15%", paddingRight:"15%"}}>
                    {group.map(categoria => (
                        <ul key={categoria.fieldValue}>
                            <Link to={`/categorias/${kebabCase(categoria.fieldValue)}/`}>
                                <InfoBlock title={categoria.fieldValue}  img={imageMapper[(categoria.fieldValue).split(' ').join('')]} description={`Ve todos los temas que tenemos para preparar tu examen de ${categoria.fieldValue}`}/>
                            </Link>
                        </ul>
                        
                    ))}
                </div>
            </div>
        </div>
        </Layout>
    )

CategoriasPage.propTypes = {
    data: PropTypes.shape({
        allMarkdownRemark: PropTypes.shape({
            group: PropTypes.arrayOf(
                PropTypes.shape({
                    fieldValue: PropTypes.string.isRequired,
                    totalCount: PropTypes.number.isRequired,
                }).isRequired
            ),
        }),
        site: PropTypes.shape({
            siteMetadata: PropTypes.shape({
                title: PropTypes.string.isRequired,
            }),
        }),
    }),
}

export default CategoriasPage

export const pageQuery = graphql`
  query {
  site {
    siteMetadata {
      title
    }
  }
  allMarkdownRemark(limit: 2000) {
    group(field: frontmatter___categoria) {
      fieldValue
      totalCount
    }
  }
}
`