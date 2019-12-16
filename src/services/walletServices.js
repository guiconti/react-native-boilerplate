export function retrieveFunds () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve(13.37);
    }, 2000);
  });
}
