import { test, expect } from '@playwright/test';

//testing the dummy api get call from Next.js
test('Should respond with API response string', async ({ request }) => {
    const issues = await request.get('http://localhost:3000/api/hello');
    expect(issues.ok()).toBeTruthy();
    expect(await issues.json()).toMatchObject({
        message: "Hello from Next.js!"
    })
})
