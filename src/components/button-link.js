import React from "react"
import styled from "styled-components"

const ButtonAnchor = styled.a`
  display: inline-flex;
  align-items: center;
  padding: 0.1em 0.5em;
  border: 2px solid var(--blue-grey-extra-light);
  border-radius: 1em;
  font-family: "Work Sans";
  font-weight: 600;
  text-decoration: none !important;

  &:hover {
    cursor: pointer;
    background: linear-gradient(
          90deg,
          var(--blue-grey-light) calc(7.5px - 1px),
          transparent 1%
        )
        center,
      linear-gradient(var(--blue-grey-light) calc(7.5px - 1px), transparent 1%)
        center,
      var(--yellow);
    background-size: 7.5px 7.5px;
    border: 2px solid var(--yellow);
  }
`

const Button = ({ href, external = false, download = false, children }) => {
  const maybeExternal = external
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {}

  const props = { href, download, ...maybeExternal }

  return <ButtonAnchor {...props}>{children}</ButtonAnchor>
}

export default Button
