import { expect, test } from "vitest";
import { generateKey } from './helper';
 
test("should generate a key", () => {
    const value = "task";
    const idx = 1;
    const result = generateKey(value, idx);
    expect(result).toBe('task-1');
})