import assert from "node:assert/strict"
import { describe, it } from "node:test"
import { add } from "./add.ts"

describe("add", () => {
  it("should return the sum of two numbers", () => {
    // Arrange - Given
    const a = 5
    const b = 3

    // Act - When
    const actual = add(a, b)

    // Assert - Then
    const expected = 8
    assert.strictEqual(actual, expected)
  })
})
