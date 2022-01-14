import React from "react"
import ButtonLink from "./button-link"
import { Gatsby } from "@icons-pack/react-simple-icons"

const Footer = () => (
  <footer>
    <div>
      <strong>
        Made with&nbsp;
        <span>
          <Gatsby size={16} />
          &nbsp;
          <a
            href="https://www.gatsbyjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Gatsby
          </a>
        </span>
      </strong>
      &nbsp;© {new Date().getFullYear()} Brett Fouss
    </div>
    <ButtonLink
      href="https://github.com/brettfouss/brettfouss.com"
      external={true}
    >
      View website source code
    </ButtonLink>
    <br />
  </footer>
)

export default Footer
