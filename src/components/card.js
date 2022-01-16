import React from "react"
import PortfolioImage from "./portfolioImage"
import Content from "./content"
import styled from "styled-components"
import { timeFormat } from "d3-time-format"

const formatTime = timeFormat("%m/%Y")

const Container = styled(Content)`
  display: flex;
  flex-align: start;
  flex-direction: row;
  background-color: transparent;
  padding-top: 1em !important;
  padding-bottom: 1em !important;

  &:hover {
    cursor: pointer;
    background: linear-gradient(
          90deg,
          var(--blue-grey-light) calc(10px - 1px),
          transparent 1%
        )
        center,
      linear-gradient(var(--blue-grey-light) calc(10px - 1px), transparent 1%)
        center,
      var(--blue-grey-extra-light);
    background-size: 10px 10px;

    .header {
      text-decoration: underline var(--yellow);
    }
  }
`

const Meta = styled.small`
  font-family: "IBM Plex Mono";
  font-style: italic;
  color: var(--blue-grey);
`

const Header = styled.p`
  font-family: "Work Sans";
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 0.5em;
`

const Card = ({
  name,
  link,
  title,
  imagePath,
  description,
  type,
  tags,
  date,
}) => (
  <Container
    onClick={() => {
      window.open(link)
    }}
  >
    <div className="hide-mobile">
      {imagePath && <PortfolioImage imagePath={imagePath} />}
    </div>
    <Content>
      <Meta>
        <span>
          {formatTime(date)} &#8226; {type}
        </span>
      </Meta>
      <Header className="header">{title}</Header>
      {description}
    </Content>
  </Container>
)

export default Card
