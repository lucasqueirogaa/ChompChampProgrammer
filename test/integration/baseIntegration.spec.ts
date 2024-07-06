import { test } from 'node:test'
import assert from 'node:assert'

test("Expect 8 - 4 = 4", ()=>{
  const sum = 8 - 4;

  assert.equal(sum, 4, "Sum not correct")
})