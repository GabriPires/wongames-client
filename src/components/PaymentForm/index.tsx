import { useEffect, useState } from 'react'
import { Session } from 'next-auth'
import { CardElement } from '@stripe/react-stripe-js'
import { StripeCardElementChangeEvent } from '@stripe/stripe-js'
import { ErrorOutline, ShoppingCart } from '@styled-icons/material-outlined'

import { useCart } from 'hooks/use-cart'
import Button from 'components/Button'
import Heading from 'components/Heading'
import { createPaymentIntent } from 'utils/stripe/methods'

import * as S from './styles'

type PaymentFormProps = {
  session: Session
}

const PaymentForm = ({ session }: PaymentFormProps) => {
  const { items } = useCart()
  const [error, setError] = useState<string | null>(null)
  const [disabled, setDisabled] = useState(true)
  const [clientSecret, setClientSecret] = useState('')
  const [freeGames, setFreeGames] = useState(false)

  useEffect(() => {
    async function setPaymentMode() {
      if (items.length) {
        const data = await createPaymentIntent({
          items,
          token: session.jwt as string
        })

        if (data.freeGames) {
          setFreeGames(true)

          return
        }

        if (data.error) {
          setError(data.error)
          return
        }

        setClientSecret(data.client_secret)
        console.log(clientSecret)
      }
    }
    setPaymentMode()
  }, [items, session, clientSecret])

  const handleChange = async (event: StripeCardElementChangeEvent) => {
    setDisabled(event.empty)
    setError(event.error ? event.error.message : '')
  }

  return (
    <S.Wrapper>
      <S.Body>
        <Heading lineBottom lineColor="primary" color="black" size="small">
          Payment
        </Heading>

        {freeGames ? (
          <S.FreeGames>Only free games, click buy and enjoy!</S.FreeGames>
        ) : (
          <CardElement
            options={{
              hidePostalCode: true,
              style: {
                base: {
                  fontSize: '16px'
                }
              }
            }}
            onChange={handleChange}
          />
        )}

        {error && (
          <S.Error>
            <ErrorOutline size={20} /> {error}
          </S.Error>
        )}
      </S.Body>
      <S.Footer>
        <Button as="a" fullWidth minimal>
          Continue shopping
        </Button>
        <Button
          fullWidth
          icon={<ShoppingCart />}
          disabled={!freeGames && (disabled || !!error)}
        >
          Buy now
        </Button>
      </S.Footer>
    </S.Wrapper>
  )
}

export default PaymentForm
