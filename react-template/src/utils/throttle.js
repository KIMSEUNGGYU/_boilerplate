let timer = null;

export const throttle = (func, delay = 500) => {
  if (!timer) {
    timer = setTimeout(() => {
      func();
      timer = null;
    }, delay);
  }
};
