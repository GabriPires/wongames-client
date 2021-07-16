import Profile from 'templates/Profile'

import mockCards from 'components/PaymentOptions/mock'

export default function Me() {
  return <Profile>{/* <PaymentHistory /> */}</Profile>
}

export function getServerSideProps() {
  return {
    props: {
      cards: mockCards
    }
  }
}
