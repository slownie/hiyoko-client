import { test, expect } from "@playwright/test";

test("correct endpoints", async ({ page }) => {
  await page.goto("https://hiyoko-client.vercel.app/");
  await page.getByText("Lessons").click();
  await page.waitForURL("**/lessons/0");
});
