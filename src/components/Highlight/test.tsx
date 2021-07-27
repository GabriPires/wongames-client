import { screen, render } from 'utils/test-utils'

import Highlight from '.'
import * as S from './styles'

const props = {
  title: 'Heading 1',
  subtitle: 'Heading 2',
  backgroundImage: 'img/red-dead-img.jpg',
  buttonLabel: 'Buy now',
  buttonLink: '/rdr2'
}

describe('<Highlight />', () => {
  it('should render headings and button', () => {
    render(<Highlight {...props} />)

    expect(
      screen.getByRole('heading', { name: /heading 1/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /heading 2/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('link', { name: /buy now/i })).toBeInTheDocument()
  })

  it('should render background imamge', () => {
    render(<Highlight {...props} />)

    expect(screen.getByRole('img', { name: props.title })).toBeInTheDocument()
  })

  it('should render float imamge', () => {
    render(<Highlight {...props} floatImage="/float-image.png" />)

    expect(screen.getAllByRole('img', { name: props.title })).toHaveLength(2)
  })

  it('should render align right by default', () => {
    const { container } = render(<Highlight {...props} />)

    expect(container.firstChild).toHaveStyleRule(
      'grid-template-areas',
      "'floatimage content'"
    )

    expect(container.firstChild).toHaveStyleRule('text-align', 'right', {
      modifier: `${S.Content}`
    })
  })

  it('should render align left', () => {
    const { container } = render(<Highlight {...props} alignment="left" />)

    expect(container.firstChild).toHaveStyleRule(
      'grid-template-areas',
      "'content floatimage'"
    )

    expect(container.firstChild).toHaveStyleRule('text-align', 'left', {
      modifier: `${S.Content}`
    })
  })
})
