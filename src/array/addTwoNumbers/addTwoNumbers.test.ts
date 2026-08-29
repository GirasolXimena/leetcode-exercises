import { describe, it, expect } from 'vitest';
import { ListNode } from 'leetcode-class';
import { addTwoNumbers } from './addTwoNumbers';

// Helper function to create a linked list from an array
function createLinkedList(arr: number[]): ListNode | null {
    if (arr.length === 0) return null;
    let head = new ListNode(arr[0]);
    let current = head;
    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }
    return head;
}

// Helper function to convert linked list to array for easier testing
function linkedListToArray(node: ListNode | null): number[] {
    const result: number[] = [];
    while (node) {
        result.push(node.val);
        node = node.next;
    }
    return result;
}

describe('addTwoNumbers', () => {
    it('should add two numbers represented as linked lists - Example 1', () => {
        // 342 + 465 = 807
        const l1 = createLinkedList([2, 4, 3]);
        const l2 = createLinkedList([5, 6, 4]);
        const result = addTwoNumbers(l1, l2);
        expect(linkedListToArray(result)).toEqual([7, 0, 8]);
    });

    it('should add two numbers when both are zero - Example 2', () => {
        // 0 + 0 = 0
        const l1 = createLinkedList([0]);
        const l2 = createLinkedList([0]);
        const result = addTwoNumbers(l1, l2);
        expect(linkedListToArray(result)).toEqual([0]);
    });

    it('should add two numbers with different lengths and carry over - Example 3', () => {
        // 9999999 + 9999 = 10009998
        const l1 = createLinkedList([9, 9, 9, 9, 9, 9, 9]);
        const l2 = createLinkedList([9, 9, 9, 9]);
        const result = addTwoNumbers(l1, l2);
        expect(linkedListToArray(result)).toEqual([8, 9, 9, 9, 0, 0, 0, 1]);
    });

    it('should handle single digit numbers', () => {
        // 2 + 5 = 7
        const l1 = createLinkedList([2]);
        const l2 = createLinkedList([5]);
        const result = addTwoNumbers(l1, l2);
        expect(linkedListToArray(result)).toEqual([7]);
    });

    it('should handle numbers with no carry', () => {
        // 123 + 456 = 579
        const l1 = createLinkedList([3, 2, 1]);
        const l2 = createLinkedList([6, 5, 4]);
        const result = addTwoNumbers(l1, l2);
        expect(linkedListToArray(result)).toEqual([9, 7, 5]);
    });

    it('should handle numbers where first is larger', () => {
        // 9243 + 52 = 9295
        const l1 = createLinkedList([3, 4, 2, 9]);
        const l2 = createLinkedList([2, 5]);
        const result = addTwoNumbers(l1, l2);
        expect(linkedListToArray(result)).toEqual([5, 9, 2, 9]);
    });

    it('should handle numbers where second is larger', () => {
        // 52 + 9243 = 9295
        const l1 = createLinkedList([2, 5]);
        const l2 = createLinkedList([3, 4, 2, 9]);
        const result = addTwoNumbers(l1, l2);
        expect(linkedListToArray(result)).toEqual([5, 9, 2, 9]);
    });

    it('should handle carry that extends the result length', () => {
        // 999 + 999 = 1998
        const l1 = createLinkedList([9, 9, 9]);
        const l2 = createLinkedList([9, 9, 9]);
        const result = addTwoNumbers(l1, l2);
        expect(linkedListToArray(result)).toEqual([8, 9, 9, 1]);
    });

    it('should handle addition with one element as zero', () => {
        // 123 + 0 = 123
        const l1 = createLinkedList([3, 2, 1]);
        const l2 = createLinkedList([0]);
        const result = addTwoNumbers(l1, l2);
        expect(linkedListToArray(result)).toEqual([3, 2, 1]);
    });
});
