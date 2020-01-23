export function retrieveFunds () {
  return new Promise((resolve) => {
    setTimeout(() => {
      return resolve(10.01);
    }, 2000);
  });
}
