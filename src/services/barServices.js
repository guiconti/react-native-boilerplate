export function retrieveExample () {
  return new Promise((resolve) => {
    setTimeout(() => {
      return resolve('Delayed example retrieved');
    }, 2000);
  });
}
