/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function(k, nums) {
  this.k = k;
  this.heap = new MinHeapByArray();
  nums.forEach(n => this.add(n));
};

/**
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
  if (this.heap.size() < this.k) {
    this.heap.heappush(val);
  } else if (val > this.heap.peak()) {
    this.heap.heappush(val);
    this.heap.pophead();
  }

  return this.heap.peak();
};

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */

class MinHeapByArray {
  constructor(data = []) {
    this.data = data;
    this.comparator = (a, b) => a - b;
    this.heapify();
  }

  // O(nlog(n))
  heapify() {
    if (this.size() < 2) return;
    for (let i = 1; i < this.size(); i++) {
      this.bubbleUp(i);
    }
  }

  swap(index1, index2) {
    [this.data[index1], this.data[index2]] = [this.data[index2], this.data[index1]];
  }

  bubleUp(index) {
    while (index > 0) {
      const parentIndex = (index - 1) >> 1;
      if (this.comparator(this.data[index], this.data[parentIndex]) < 0) {
        this.swap(index, parentIndex);
        index = parentIndex;
      } else {
        break;
      }
    }
  }

  bubbleDown(index) {
    const lastIndex = this.size() - 1;

    while (true) {
      const leftIndex = index * 2 + 1;
      const rightIndex = index * 2 + 2;
      let findIndex = index;
      if (
        leftIndex <= lastIndex &&
        this.comparator(this.data[leftIndex], this.data[findIndex]) < 0
      ) {
        findIndex = leftIndex;
      }
      if (
        rightIndex <= lastIndex &&
        this.comparator(this.data[rightIndex], this.data[findIndex]) < 0
      ) {
        findIndex = rightIndex;
      }
      if (index !== findIndex) {
        this.swap(index, findIndex);
        index = findIndex;
      } else {
        break;
      }
    }
  }

  heappush(value) {
    this.data.push(value);
    this.bubleUp(this.size() - 1);
  }

  pophead() {
    if (this.size() === 0) return null;
    const head = this.data[0];
    const last = this.data.pop();
    if (this.size() !== 0) {
      this.data[0] = last;
      this.bubbleDown(0);
    }
    return head;
  }

  size() {
    return this.data.length;
  }

  peak() {
    if (this.size() === 0) return null;
    return this.data[0];
  }
}
