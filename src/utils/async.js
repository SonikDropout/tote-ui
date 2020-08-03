function debounce(fn,ms) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(fn, ms, ...args);
  } 
}

module.exports = {
  debounce
}