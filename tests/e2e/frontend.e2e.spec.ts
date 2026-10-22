import { test, expect } from '@playwright/test'

test('homepage displays the portfolio', async ({ page }) => {
  await page.goto('/')

  await expect(page).toHaveTitle('Portfolio')
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Work in progress.')
})
