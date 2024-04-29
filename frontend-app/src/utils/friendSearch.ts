export function isEmptyArr<T>(arr: T[]) {
  if (Array.isArray(arr) && arr.length === 0) {
    return true;
  }

  return false;
}
