import { test, expect } from '@playwright/test';

test('resume-led content, working navigation and no removed widgets', async ({ page, request }) => {
  const errors: string[] = [];
  page.on('pageerror', error => errors.push(error.message));
  await page.goto('/');
  await expect(page.getByRole('heading', { name: 'Rayyan Ahmed', exact: true })).toBeVisible();
  await expect(page.getByRole('button', { name: /Q&A|assistant/i })).toHaveCount(0);
  await expect(page.getByText(/testimonials|99\.05%|460\+|GSOC|eliminate mathematical/i)).toHaveCount(0);
  await page.getByRole('navigation', { name: 'Main navigation' }).getByRole('link', { name: 'Work', exact: true }).click();
  await expect(page).toHaveURL(/#portfolio$/);
  await expect(page.getByRole('heading', { name: 'Selected work' })).toBeInViewport();
  const resume = await request.get('/Rayyan_Ahmed_AI_Engineer_Resume.pdf');
  expect(resume.ok()).toBeTruthy();
  expect((await resume.body()).subarray(0, 4).toString()).toBe('%PDF');
  expect(errors).toEqual([]);
});

test('project filters and accessible case study disclosure', async ({ page }) => {
  await page.goto('/#portfolio');
  await expect(page.locator('[data-project]')).toHaveCount(3);
  await page.getByRole('button', { name: 'Healthcare', exact: true }).click();
  await expect(page.locator('[data-project]')).toHaveCount(1);
  await expect(page.getByRole('button', { name: 'Healthcare', exact: true })).toHaveAttribute('aria-pressed', 'true');
  await page.getByText('Read MedCodex case study', { exact: true }).click();
  await expect(page.getByText('Provider-agnostic routing, PHI masking, structured outputs, and audit trails.', { exact: true })).toBeVisible();
  await page.getByRole('button', { name: 'All work', exact: true }).click();
  await expect(page.locator('[data-project]')).toHaveCount(3);
});

test('mobile reflow, keyboard focus and reduced motion', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('/');
  await page.keyboard.press('Tab');
  await expect(page.getByRole('link', { name: 'Skip to content' })).toBeFocused();
  await expect(page.getByRole('link', { name: 'Skip to content' })).toBeInViewport();
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBeTruthy();
  for (const width of [320, 375, 768, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBeTruthy();
  }
});

async function fillContact(page: import('@playwright/test').Page) {
  await page.getByLabel('Full name').fill('Portfolio reviewer');
  await page.getByLabel('Email address').fill('reviewer@example.com');
  await page.getByLabel('Message', { exact: true }).fill('A test inquiry that must never be sent to a real recipient.');
}

test('unconfigured contact prepares a draft without losing input', async ({ page }, info) => {
  test.skip(info.project.name === 'email-configured');
  await page.goto('/#contact');
  await fillContact(page);
  await page.getByRole('button', { name: 'Prepare email draft' }).click();
  await expect(page.getByRole('status')).toContainText('Your message is ready');
  await expect(page.getByRole('link', { name: 'Open email draft' })).toHaveAttribute('href', /^mailto:rayyanahmed265@yahoo\.com\?subject=/);
  await expect(page.getByLabel('Full name')).toHaveValue('Portfolio reviewer');
});

test('delivery failure retains input; retry success clears it', async ({ page }, info) => {
  test.skip(info.project.name !== 'email-configured');
  let attempts = 0;
  await page.route('https://api.emailjs.com/**', async route => {
    attempts++;
    await route.fulfill({ status: attempts === 1 ? 500 : 200, body: attempts === 1 ? 'Unavailable' : 'OK' });
  });
  await page.goto('/#contact');
  await fillContact(page);
  await page.getByRole('button', { name: 'Send message', exact: true }).click();
  await expect(page.getByRole('alert')).toContainText('could not be sent');
  await expect(page.getByLabel('Full name')).toHaveValue('Portfolio reviewer');
  await page.getByRole('button', { name: 'Send message', exact: true }).click();
  await expect(page.getByRole('status')).toContainText('Message sent');
  await expect(page.getByLabel('Full name')).toHaveValue('');
  expect(attempts).toBe(2);
});
