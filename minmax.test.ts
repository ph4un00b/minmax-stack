import { assertEquals } from "testing/asserts.ts";

/* todo: add linked list implementation */
function MinMax() {
  const stack: number[] = [];
  const minmax: number[][] = [];

  function push(element: number) {
    let current_min = element;
    let current_max = element;
    if (minmax.length > 0) {
      const [prev_min, prev_max] = minmax[minmax.length - 1];
      current_max = Math.max(prev_max, element);
      current_min = Math.min(prev_min, element);
    }
    minmax.push([current_min, current_max]);
    stack.push(element);
  }

  function peek() {
    return stack.slice(0).pop();
  }

  function pop() {
    minmax.pop();
    return stack.pop();
  }

  function min() {
    const [min, _max] = minmax[minmax.length - 1];
    return min;
  }

  function max() {
    const [_min, max] = minmax[minmax.length - 1];
    return max;
  }

  return {
    push,
    peek,
    min,
    max,
    pop,
  };
}

Deno.test("#peek", function () {
  const stack = MinMax();

  stack.push(5);
  assertEquals(stack.peek(), 5);

  stack.push(7);
  assertEquals(stack.peek(), 7);

  stack.push(2);
  assertEquals(stack.peek(), 2);
});

Deno.test("#min", function () {
  const stack = MinMax();

  stack.push(5);
  assertEquals(stack.min(), 5);

  stack.push(7);
  assertEquals(stack.min(), 5);

  stack.push(2);
  assertEquals(stack.min(), 2);
});

Deno.test("#max", function () {
  const stack = MinMax();

  stack.push(5);
  assertEquals(stack.max(), 5);

  stack.push(7);
  assertEquals(stack.max(), 7);

  stack.push(2);
  assertEquals(stack.max(), 7);
});
