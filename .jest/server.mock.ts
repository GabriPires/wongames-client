import { server } from '../src/utils/mockServer/server'

beforeAll(() => {
  // ficar escutando todas as chamadas nos testes
  server.listen()
})

afterEach(() => {
  // reseta todos os handlers para caso sejam chamados novamente
  server.resetHandlers()
})

afterAll(() => {
  // fecha o server e limpas os testes
  server.close()
})
