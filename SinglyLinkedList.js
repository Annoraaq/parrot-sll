const Node = data => ({ data: data, next: null });

module.exports = () => {
  let head = null;
  let size = 0;

  const getNode = index => {
    const invertedIndex = size - index - 1;
    if (invertedIndex === 0) return head;
    let currentIndex = 0;
    let currentNode = head;
    while (currentIndex < invertedIndex && currentNode.next !== null) {
      currentIndex++;
      currentNode = currentNode.next;
    }
    if (currentIndex == invertedIndex) return currentNode;
    return null;
  };

  const getNodeData = index => {
    const node = getNode(index);
    if (node === null) return null;
    return node.data;
  }

  const getSize = () => size;

  const add = data => {
    if (head == null) {
      head = Node(data);
      size = 1;
    } else {
      const oldHead = head;
      head = Node(data);
      head.next = oldHead;
      size++;
    }
  };

  const remove = index => {
    const invertedIndex = size - index - 1;
    if (invertedIndex === 0) {
      const oldHead = head;
      head = head.next;
      size--;
      return oldHead;
    }

    const prev = getNode(index + 1);
    if (prev === null) return null;
    size--;
    const deletedNode = prev.next;
    prev.next = deletedNode.next;
    return deletedNode;
  };

  return {
    size: getSize,
    add,
    get: getNodeData,
    remove,
  };
};
