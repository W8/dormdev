import React from 'react'
import styled from 'styled-components'

import DocumentHead from 'components/Head'
import Global from 'layout/Global'

const StyledIframe = styled.iframe`
  width: 100vw !important;
  height: 100vh !important;
`

const Survey = () => (
  <>
    <DocumentHead />
    <Global>
      <StyledIframe
        title="survey"
        id="typeform-full"
        frameBorder="0"
        src="https://dormdev.typeform.com/to/mDeANr"
      />
    </Global>
  </>
)

export default Survey
