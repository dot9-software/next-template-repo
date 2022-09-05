/**
 * Resolves a given promise and returns the data and a possible
 * error that occured.
 * @param {Promise<T>} promise The promise that should be resolved
 * with error-handling.
 * @return {Promsie<[(T | null), (unknown | null)]>} An array that
 * contains the resolved data at index 0 ([data, null])
 * if there was no error and the error at index 1 ([null, error]) if
 * there was one.
 */
export async function safeResolvePromise<T>(
  promise: Promise<T>
): Promise<[T | null, unknown | null]> {
  try {
    const data = await promise;
    return [data, null];
  } catch (err) {
    console.error(err);
    return [null, err];
  }
}
