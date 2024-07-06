import { test } from 'node:test'
import assert from 'node:assert'

test("Expect 2 + 4 = 6", ()=>{
  const sum = 2 + 4;

  assert.equal(sum, 6, "Sum not correct")
})