export function retrieveFunds () {
  return new Promise((resolve) => {
    setTimeout(() => {
      return resolve(13.37);
    }, 2000);
  });
}
