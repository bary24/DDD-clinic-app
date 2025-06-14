export function hasDigits(value: string): boolean {
  return /\d/.test(value);
}

export function isValidObjectId(value: string): boolean {
  return /^[a-f\d]{24}$/i.test(value);
}
