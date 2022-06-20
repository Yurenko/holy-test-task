import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = (props) => (
    <ContentLoader 
    speed={2}
    width={352}
    height={256}
    viewBox="0 0 352 256"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="0" rx="24" ry="24" width="352" height="256" />
  </ContentLoader>
)

export default MyLoader