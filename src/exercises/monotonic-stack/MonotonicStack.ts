
function largestRectangleAreaOn3(heights: number[]): number {
  let result = 0;

  for (let i = 0; i < heights.length; i++) {
    const p1 = heights[i];
    let minHeight = p1;

    for (let j = i; j < heights.length; j++) {
      const p2 = heights[j];

      if (p2 < minHeight) {
        minHeight = p2;
      }

      for (let k = i; k <= j; k++) {
        const p3 = heights[k];
        if (p3 < minHeight) {
          minHeight = p3;
        }
      }

      const width = 1 + j - i;
      const area = minHeight * width;
      if (area > result) {
        result = area;
      }
    }
  }
  return result;
}

function largestRectangleAreaOn2(heights: number[]): number {
  let result = 0;

  for (let i = 0; i < heights.length; i++) {
    let minHeight = heights[i];
    for (let j = i; j < heights.length; j++) {
      if (heights[j] < minHeight) {
        minHeight = heights[j];
      }

      const width = 1 + j - i;
      const area = minHeight * width;
      if (area > result) {
        result = area;
      }
    }
  }
  return result;
};

function largestRectangleAreaOlogn(heights: number[]): number {
    let result = 0;
    let minHeightIndex = 0

    // get minimum height
    // it determines how we will calculate
    // the 3 rectangles that could be the largest
    // possbile rectangle
    for (let i = 0; i <= heights.length; i++) {
        if (heights[i] < heights[minHeightIndex]) {
            minHeightIndex = i;
        }
    }
    const minHeight = heights[minHeightIndex]
    // largest rectangle by area will be one of the following:

    // 1) A rectangle that takes up max horizontal space
    // and is as tall as minimum height
    const horizontalRectangle = minHeight * heights.length;
    result = horizontalRectangle;

    // 2) The rectangle formed by bars to left of minium height bar
    const leftOfMinHeight = heights.slice(0, minHeightIndex)
    const largestLeftOfMinHeightRectangle = largestRectangleAreaOn2(leftOfMinHeight)
    if (largestLeftOfMinHeightRectangle > result) {
        result = largestLeftOfMinHeightRectangle
    }

    // 3) The rectangle formed by bars to the right of minimum height bar
    const rightOfMinHeight = heights.slice(minHeightIndex)
    const largestRightOfMinHeightRectangle = largestRectangleAreaOn2(rightOfMinHeight)
    if (largestRightOfMinHeightRectangle > result) {
        result = largestRightOfMinHeightRectangle
    }

    return result;
}

function largestRectangleAreaOn(heights: number[]): number {
  let result = 0;
  const stack: number[] = [];

  for (let i = 0; i <= heights.length; i++) {
    while (stack.length > 0 && (i === heights.length || heights[i] < heights[stack[stack.length - 1]])) {
      const h = heights[stack.pop()!];
      const w = i - (stack.length > 0 ? stack[stack.length - 1] : -1) - 1;
      result = Math.max(result, h * w);
    }
    stack.push(i);
  }

  return result;
}