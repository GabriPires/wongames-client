import Button from 'components/Button'
import Checkbox from 'components/Checkbox'
import Heading from 'components/Heading'
import Radio from 'components/Radio'
import * as S from './styles'

const ExploreSideBar = () => (
  <S.Wrapper>
    <Heading lineBottom lineColor="secondary" size="small">
      Price
    </Heading>
    <Checkbox name="under-50" label="Under $50" labelFor="under-50" />

    <Heading lineBottom lineColor="secondary" size="small">
      Sort by
    </Heading>
    <Radio
      id="high-to-low"
      name="sort-by"
      label="High to low"
      labelFor="high-to-low"
      value="high-to-low"
    />
    <Radio
      id="low=to-high"
      name="sort-by"
      label="Low to high"
      labelFor="low=to-high"
      value="low=to-high"
    />

    <Heading lineBottom lineColor="secondary" size="small">
      System
    </Heading>

    <Heading lineBottom lineColor="secondary" size="small">
      Genre
    </Heading>

    <Button fullWidth size="medium">
      Filter
    </Button>
  </S.Wrapper>
)

export default ExploreSideBar
