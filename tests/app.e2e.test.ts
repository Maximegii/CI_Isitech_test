import { test, expect } from '@playwright/test';
 
test('should add a new task to the list', async ({ page }) => {
  await page.goto('http://localhost:5173');
 
  const todoList = page.locator('[data-testid="todo-list"]');
  await expect(todoList).toBeEmpty();
 
  await page.fill('[data-testid="new-todo-input"]', 'Ma première tâche');
 
  await page.click('[data-testid="add-todo-button"]');
 
  const todoItems = todoList.locator('li');
  await expect(todoItems).toHaveCount(1);
  await expect(todoItems).toContainText('Ma première tâche');
});