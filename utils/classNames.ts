/**
 * Joins all truthy parameters into one string using whitespace
 */
export default function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}
