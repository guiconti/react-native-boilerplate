export function retrieveExample () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve('Delayed example retrieved');
    }, 2000);
  });
}
