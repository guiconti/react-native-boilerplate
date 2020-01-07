export function retrieveExample () {
  return new Promise((resolve) => {
    setTimeout(() => {
      return resolve("Example retrieved");
    }, 2000);
  });
}
