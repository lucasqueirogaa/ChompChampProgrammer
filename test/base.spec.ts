import { test } from 'node:test'
import assert from 'node:assert'

test("Expect 2 + 2 = 4", ()=>{
  const sum = 2 + 2;

  assert.equal(sum, 4, "Sum not correct")
});
