import 'match-media-mock'
import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Gallery from '.'

import mockItems from './mock'

describe('<Gallery />', () => {
  it('should render thumbnails as buttons', () => {
    renderWithTheme(<Gallery items={mockItems.slice(0, 2)} />)

    expect(
      screen.getByRole('button', { name: /thumb - gallery image 1/i })
    ).toHaveAttribute('src', mockItems[0].src)

    expect(
      screen.getByRole('button', { name: /thumb - gallery image 2/i })
    ).toHaveAttribute('src', mockItems[1].src)
  })

  it('should handle open/close modal', () => {
    renderWithTheme(<Gallery items={mockItems.slice(0, 2)} />)

    // const modal = screen.getByLabelText('modal')

    // expect(modal.getAttribute('aria-hidden')).toBe('true')
    // expect(modal).toHaveStyle({ opacity: 0 })

    // fireEvent.click(screen.getByLabelText(/open menu/i))
    // expect(modal.getAttribute('aria-hidden')).toBe('false')
    // expect(modal).toHaveStyle({ opacity: 1 })

    // fireEvent.click(screen.getByLabelText(/close menu/i))
    // expect(modal.getAttribute('aria-hidden')).toBe('true')
    // expect(modal).toHaveStyle({ opacity: 0 })
  })
})
