function formatTime(date) {
  return date.toLocaleTimeString("en-US");
}

function emailTest(email) {
  const r = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
  return r.test(email);
}

module.exports = { formatTime, emailTest };
