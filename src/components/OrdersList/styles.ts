import styled from 'styled-components'

import * as GameItemsStyle from 'components/GameItem/styles'

export const Wrapper = styled.main`
  ${GameItemsStyle.Wrapper} {
    &:last-child {
      border-bottom: 0;
    }
  }
`
