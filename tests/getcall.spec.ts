import { test, expect } from '@playwright/test';

test.describe('Test group', () => {
  test('getcall', async ({ request }) => {
    const response = await request.get('https://jsonplaceholder.typicode.com/posts/1');
    //await expect(response).toBeOK();
    console.log(response);
  });
});
