import { test, expect } from '@playwright/test';
 
test('should add a new task to the list', async ({ page }) => {
  await page.goto('http://localhost:4173');
 
  const todoList = page.getByTestId("list");
  await expect(todoList).toBeEmpty();
 
  await page.fill('[data-testid="new-todo-input"]', 'Ma première tâche');

  const input = page.getByTestId("new-todo-input");

  const button = page.getByTestId("add-todo-button");
 
  await input.fill("Première tache");
  await button.click();
  await expect(todoList).toHaveCount(1);
  await expect(todoList).toContainText('Première tache');
});