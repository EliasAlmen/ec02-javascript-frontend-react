import React from 'react'

const ExternalLinkIconComponent = ({link, icon}) => {
  return (
    <a href={link} title="link" target="blank">
      <i className={"fa-brands "+ icon}></i>
    </a>
  )
}

export default ExternalLinkIconComponent