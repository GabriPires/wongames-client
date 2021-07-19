import { GameCardProps } from 'components/GameCard'

import * as S from './styles'

export type GamesTemplateProps = {
  games?: GameCardProps[]
}

const GamesTemplate = ({ games = [] }: GamesTemplateProps) => (
  <S.Wrapper>
    <h1>GamesTemplate</h1>
    <p>{games}</p>
  </S.Wrapper>
)

export default GamesTemplate
