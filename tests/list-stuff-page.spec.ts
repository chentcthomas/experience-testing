import { test } from '@playwright/test';

test.use({
  storageState: 'john-auth.json',
});

test('test', async ({ page }) => {
  await page.goto('http://localhost:3000/list');
  await page.getByRole('link', { name: 'Next.js Application Template' }).click();
  await page.getByRole('link', { name: 'List Stuff' }).click();
  await page.getByRole('link', { name: 'Add Stuff' }).click();
  await page.getByRole('link', { name: 'List Stuff' }).click();
  await page.getByRole('heading', { name: 'Stuff' }).click();
  await page.getByRole('cell', { name: 'Name' }).click();
  await page.getByRole('cell', { name: 'Quantity' }).click();
  await page.getByRole('cell', { name: 'Condition' }).click();
  await page.getByRole('cell', { name: 'Actions' }).click();
  await page.getByText('Department of Information and').click();
});
