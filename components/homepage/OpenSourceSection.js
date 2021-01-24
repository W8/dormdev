import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Star } from 'react-feather'

import { countRepoStars } from 'utilities/countRepoStars'

const StyledSection = styled.section`
  margin: 2rem 0;
  text-align: center;

  p {
    margin: 2rem auto;
    padding: 0 1rem;
    max-width: 42rem;

    @media all and (max-width: 499px) {
      text-align: left;
    }
  }
`

const StarCount = styled.div`
  position: relative;
  display: inline-block;
  margin: 3rem 0;

  a {
    font-size: 1.25rem;

    @media screen and (min-width: 20rem) {
      font-size: calc(1.25rem + 0.5 * ((100vw - 20rem) / 50));
    }

    @media screen and (min-width: 70rem) {
      font-size: 1.75rem;
    }

    font-weight: bold;
    box-shadow: none;
  }
`

const StyledStar = styled(Star)`
  position: absolute;

  @media screen and (max-width: 305px) {
    display: none;
  }
`

const Star1 = styled(StyledStar)`
  transform: rotate(25deg);
  left: -3.5rem;
`

const Star2 = styled(StyledStar)`
  transform: rotate(-25deg);
  right: -4rem;
`

const Star3 = styled(StyledStar)`
  transform: rotate(15deg);
  right: 1rem;
  top: -2.5rem;
`

const Star4 = styled(StyledStar)`
  transform: rotate(-15deg);
  left: 1rem;
  bottom: -2.5rem;
`

const ButtonActions = styled.div`
  margin-top: 3rem;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  * {
    margin-left: 0.33rem;
    margin-right: 0.33rem;
  }

  @media all and (max-width: 499px) {
    margin-top: 1.5rem;

    * {
      margin-top: 0.33rem;
    }
  }
`

const OpenSourceSection = () => {
  const [starCount, setCount] = useState(null)

  useEffect(() => {
    async function getStars() {
      const user = 'dormdev'
      const repo = 'dormdev'
      const stars = await countRepoStars(user, repo)
      setCount(stars)
    }

    getStars()

    const script = document.createElement('script')
    script.src = 'https://buttons.github.io/buttons.js'
    script.async = true
    script.defer = true
    document.body.appendChild(script)

    return () => {
      script.parentNode.removeChild(script)
    }
  }, [])

  return (
    <StyledSection aria-label="open-source">
      <h2>Open Source</h2>
      <p>
        DormDev™ is free and open source, under the Apache 2.0 license.
        Contributors welcome!{' '}
        <a href="https://github.com/dormdev/dormdev/blob/master/CONTRIBUTING.md">
          Learn how to contribute.
        </a>
      </p>
      {starCount && (
        <StarCount>
          <a href="https://github.com/dormdev/dormdev/stargazers">
            {starCount} stars
          </a>
          <Star1 size={18} />
          <Star2 size={24} />
          <Star3 size={20} />
          <Star4 size={16} />
        </StarCount>
      )}
      <ButtonActions>
        <a
          className="github-button"
          href="https://github.com/dormdev/dormdev/issues/new/choose"
          data-icon="octicon-issue-opened"
          data-size="large"
          aria-label="Issue on GitHub"
          data-show-count="true"
        >
          Issue
        </a>
        <a
          href="https://github.com/dormdev/dormdev/subscription"
          className="github-button"
          data-icon="octicon-eye"
          data-size="large"
          aria-label="Watch on GitHub"
          data-show-count="true"
        >
          Watch
        </a>
        <a
          href="https://github.com/dormdev/dormdev"
          className="github-button"
          data-icon="star"
          data-size="large"
          aria-label="Star on GitHub"
          data-show-count="true"
        >
          Star
        </a>
        <a
          href="https://github.com/dormdev/dormdev/fork"
          className="github-button"
          data-icon="octicon-repo-forked"
          data-size="large"
          aria-label="Fork on GitHub"
          data-show-count="true"
        >
          Fork
        </a>
      </ButtonActions>
    </StyledSection>
  )
}

export default OpenSourceSection
