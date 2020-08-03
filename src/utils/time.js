function padZeros(num, len) {
  return String(num).padStart(len, '0');
}

function formatTime(seconds) {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds - h * 3600) / 60);
  return `${padZeros(h, 2)}:${padZeros(m, 2)}:${padZeros(seconds % 60, 2)}`;
}

module.exports = {
  formatTime,
};
