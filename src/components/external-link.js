import React from "react"

const ExternalLink = ({ href, icon, children }) => {
  const anchor = (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  )

  if (icon) {
    return (
      <>
        {icon}
        &nbsp;
        {anchor}
      </>
    )
  }

  return anchor
}

export default ExternalLink
