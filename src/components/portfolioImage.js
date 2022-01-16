import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const PortfolioImage = ({ imagePath, className }) => {
  const data = useStaticQuery(graphql`
    {
      allFile(filter: { extension: { eq: "png" } }) {
        edges {
          node {
            childImageSharp {
              fixed(width: 225, height: 150) {
                ...GatsbyImageSharpFixed
                originalName
              }
            }
          }
        }
      }
    }
  `)

  const image = data.allFile.edges
    .map((edge) => edge.node.childImageSharp)
    .find((image) => image.fixed.originalName === imagePath)

  return (
    <Img
      fixed={image.fixed}
      className={className}
      style={{ display: "inherit" }}
    />
  )
}

export default PortfolioImage
