import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled"

const Container = styled.div`
  text-align: center;
`

const OuterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  height: 78vh;
`

const Description = styled.p`
  padding: 0;
  margin-bottom: 1rem;
  font-size: 1.4rem;
`

const NameHeader = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 0;
`

const Content = styled.div`
  text-align: left;
`

const UploanPHLink = styled.a`
`

const MozillaPHLink = styled.a`
`

const MozillaLink = styled.a`
`

const PythonPHLink = styled.a`
`

const TwitterLink = styled.a`
`

const LinkedinLink = styled.a`
`

const GithubLink = styled.a`
`

const LandingBio = () => (
  <StaticQuery
    query={graphql`
      query LandingSiteTitleQuery {
        site {
          siteMetadata {
            title
            subtitle
          }
        }
      }
    `}
    render={data => (
      <OuterContainer>
        <Container>
          <NameHeader>{data.site.siteMetadata.title}</NameHeader>
          <Description>{data.site.siteMetadata.subtitle}</Description>
          <Content>
            <p>
              Hi! I'm Ryan. I find joy in engineering softwares; the excitement, frustrations, and its complexity.
              I currently work at <UploanPHLink href="https://uploan.ph/">Uploan Philippines</UploanPHLink> as a Senior Software Engineer.
              Here, I'll share my learnings and thoughts in regards of software engineering.
            </p>

            <p>
              In my free time, I do volunteer work. Before I was one of the <MozillaPHLink href="https://reps.mozilla.org/">Mozilla Representatives in the Philippines</MozillaPHLink>,
              where I focused on the web literacy initiatives of <MozillaLink href="https://foundation.mozilla.org/en/">Mozilla</MozillaLink>;
              I facilitate workshops, organize events, and do tech talks in universities and other tech community events.
              Currently I'm volunteering at <PythonPHLink href="https://python.ph/">Python Philippines</PythonPHLink>, where I focused on Python training initiatives.
            </p>

            <p>
              You can also find me on these platforms: <TwitterLink href="https://twitter.com/ryanermita">Twitter</TwitterLink>, <LinkedinLink href="https://ph.linkedin.com/in/ryanermita">Linkedin</LinkedinLink>,
              and <GithubLink href="https://github.com/ryanermita">Github</GithubLink>
            </p>
          </Content>
        </Container>
      </OuterContainer>
    )}
  />
)

NameHeader.propTypes = {
  siteTitle: PropTypes.string,
  subtitle: PropTypes.string,
}

NameHeader.defaultProps = {
  siteTitle: ``,
  subtitle: ``,
}

export default LandingBio
