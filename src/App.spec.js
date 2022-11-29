import { cleanup, configure, fireEvent, render } from '@testing-library/vue'
import { afterEach, beforeEach, expect, it } from 'vitest'
import { rest } from 'msw'
import { server } from '../test/mock-server'

import App from './App.vue'

configure({ testIdAttribute: 'data-qa' })

beforeEach(() => {
  server.use(
    rest.get(`https://v2.jokeapi.dev/joke/christmas`, (req, res, ctx) => {
      return res.once(ctx.json({ setup: `Foo setup`, delivery: `Foo delivery` }));
    }),
    rest.get(`https://v2.jokeapi.dev/joke/christmas`, (req, res, ctx) => {
      return res.once(ctx.json({ setup: `Foo setup 2`, delivery: `Foo delivery 2` }));
    }),
  )
})

afterEach(cleanup)

it('should show a joke setup', async () => {
  const { findByTestId } = render(App)

  const setup = await findByTestId('setup')
  expect(setup.innerHTML.length).toBeGreaterThan(0)
})

it('should show the delivery when clicking `Tell Me!`', async () => {
  const { findByRole, findByTestId } = render(App)

  await fireEvent.click(await findByRole('button', { name: 'Tell Me!' }))

  const delivery = await findByTestId('delivery')
  expect(delivery.innerHTML.length).toBeGreaterThan(0)
})

it('should show a new joke setup when clicking `Another` after seeing the delivery', async () => {
  const { findByRole, findByTestId } = render(App)

  const setupOldText = (await findByTestId('setup')).innerHTML
  await fireEvent.click(await findByRole('button', { name: 'Tell Me!' }))
  await fireEvent.click(await findByRole('button', { name: 'Another' }))

  const setup = await findByTestId('setup')
  expect(setup.innerHTML.length).toBeGreaterThan(0)
  expect(setup.innerHTML).not.toBe(setupOldText)
})
