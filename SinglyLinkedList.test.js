const ParrotSll = require("./SinglyLinkedList");

test("creates a List", () => {
  const list = ParrotSll();
});

test("has a size", () => {
  const list = ParrotSll();
  expect(list.size()).toBe(0);
});

test("should add alements", () => {
  const list = ParrotSll();
  const data = { some: "data" };
  const moreData = { some: "more data" };
  list.add(data);
  list.add(moreData);
  expect(list.size()).toBe(2);
});

test("should element elements", () => {
  const list = ParrotSll();
  const data = { some: "data" };
  const data2 = { some: "data" };
  const data3 = { some: "more data" };
  list.add(data);
  list.add(data2);
  list.add(data3);
  expect(list.get(0)).toEqual(data);
  expect(list.get(1)).toEqual(data2);
  expect(list.get(2)).toEqual(data3);
});

test("should remove last element", () => {
  const list = ParrotSll();
  const data = { some: "data" };
  const data2 = { some: "data" };
  const data3 = { some: "more data" };
  list.add(data);
  list.add(data2);
  list.add(data3);
  list.remove(2);
  expect(list.size()).toBe(2);
  expect(list.get(0)).toEqual(data);
  expect(list.get(1)).toEqual(data2);
});

test("should remove first element", () => {
  const list = ParrotSll();
  const data = { some: "data" };
  const data2 = { some: "data2" };
  const data3 = { some: "more data" };
  list.add(data);
  list.add(data2);
  list.add(data3);
  list.remove(0);
  expect(list.size()).toBe(2);
  expect(list.get(0)).toEqual(data2);
  expect(list.get(1)).toEqual(data3);
});

test("should remove middle element", () => {
  const list = ParrotSll();
  const data = { some: "data" };
  const data2 = { some: "data2" };
  const data3 = { some: "more data" };
  list.add(data);
  list.add(data2);
  list.add(data3);
  list.remove(1);
  expect(list.size()).toBe(2);
  expect(list.get(0)).toEqual(data);
  expect(list.get(1)).toEqual(data3);
});
