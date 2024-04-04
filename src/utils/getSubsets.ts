export function getAllSubsets<T>(arr: Array<T>) {
  return arr.reduce(
    (subsets: Array<Array<T>>, value) =>
      subsets.concat(subsets.map((set: Array<T>) => [value, ...set])),
    [[]]
  );
}
