import { render, screen } from '@testing-library/react'

// import Profile from '.'

describe('<Profile />', () => {
  it('should render the heading', () => {
    render(<h1>Profile</h1>)

    expect(
      screen.getByRole('heading', { name: /Profile/i })
    ).toBeInTheDocument()

    // expect(container.firstChild).toMatchSnapshot()
  })
})
