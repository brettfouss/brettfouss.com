import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import ButtonLink from "../components/button-link"
import Card from "../components/card"
import Content from "../components/Content"
import Layout from "../components/layout"
import ExternalLink from "../components/external-link"
import Seo from "../components/seo"
import styled from "styled-components"
import portfolio from "../data/portfolio"
import { StaticImage } from "gatsby-plugin-image"
import {
  Bandcamp,
  Hubspot,
  Github,
  Linkedin,
  Notion,
} from "@icons-pack/react-simple-icons"

const Section = styled.div`
  margin: 3em 0em;
`

// header section
const HeaderContainer = styled(Section)`
  display: flex;
  flex-direction: row;
  align-items: start;
  justify-content: space-between;

  #header-text {
    max-width: 60%;
    @media only screen and (max-width: 768px) {
      max-width: 100%;
    }
  }
`

const useResumePdfFile = () => {
  const {
    allFile: {
      edges: [{ node: data }],
    },
  } = useStaticQuery(graphql`
    {
      allFile(
        filter: { name: { eq: "brett-fouss-resume" }, extension: { eq: "pdf" } }
      ) {
        edges {
          node {
            publicURL
            name
          }
        }
      }
    }
  `)

  return data
}

const Header = () => {
  const { publicURL: resumePublicUrl } = useResumePdfFile()

  return (
    <HeaderContainer>
      <div id="header-text">
        <h1>Brett Fouss</h1>
        <Content>
          👋 Hi, I'm Brett&mdash;software engineer, data visualization fan,
          music collector, and food eater. Right now, I'm a Technical Lead at
          <span>
            &nbsp;
            <Hubspot size={16} />
            &nbsp;HubSpot
          </span>
          , where I'm helping build the next generation of visual analytics and
          data operations tools.
          <br />
          <br />
          <ButtonLink href={resumePublicUrl} download>
            Click to download my resume
          </ButtonLink>
          <br />
          <br />
          Reach out at bmfouss (at) gmail (dot) com
          <br />
          <ExternalLink
            href="https://www.linkedin.com/in/brett-fouss-697635a9"
            icon={<Linkedin size={16} />}
          >
            LinkedIn
          </ExternalLink>
          <br />
          <ExternalLink
            href="https://www.github.com/brettfouss/"
            icon={<Github size={16} />}
          >
            GitHub
          </ExternalLink>
        </Content>
      </div>
      <StaticImage
        src="../images/profile.jpg"
        className="hide-mobile"
        alt="profile"
        placeholder="blurred"
        layout="fixed"
        height={200}
        width={200}
      />
    </HeaderContainer>
  )
}

// portfolio section
const Portfolio = () => (
  <Section>
    <h2>Portfolio</h2>
    <Content>
      <p>Click on a card to learn more!</p>
      {portfolio
        .sort((a, b) => (a.date > b.date ? -1 : 1))
        .map((portfolioProps) => (
          <>
            <Card {...portfolioProps} />
            <br />
          </>
        ))}
    </Content>
  </Section>
)

// music collection section
const MusicCollection = () => (
  <Section>
    <h2>Music</h2>
    <Content>
      <p>
        I love all kinds of music&mdash;especially ambient, electronic, indie,
        hip hop, and punk. Explore my collection using the links below!
        <br />
        <br />
        <ExternalLink
          href="https://brettfouss.notion.site/ed353328799947ea8e8711720cc8dcd2?v=816a31920dcb40ccaf832bf0cf29dffe"
          icon={<Notion size={16} />}
        >
          Record collection
        </ExternalLink>
        <br />
        <ExternalLink
          href="https://bandcamp.com/brettfouss"
          icon={<Bandcamp size={16} />}
        >
          Bandcamp
        </ExternalLink>
      </p>
    </Content>
  </Section>
)

// page
const IndexPage = () => (
  <Layout>
    <Seo
      title="Home"
      keywords={[`brett`, `fouss`, `brett fouss`, `brettfouss`]}
    />
    <div className="Fluid">
      <Header />
      <Portfolio />
      <MusicCollection />
    </div>
  </Layout>
)

export default IndexPage
