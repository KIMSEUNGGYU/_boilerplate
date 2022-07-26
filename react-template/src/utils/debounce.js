let timer = null;

export const debounce = (func, delay = 500) => {
  if (timer) {
    clearTimeout(timer);
  }

  timer = setTimeout(() => {
    func();
  }, delay);
};
