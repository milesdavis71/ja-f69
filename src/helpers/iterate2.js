// DeepSeek kód

module.exports = function(data, count, options) {
  if (!Array.isArray(data) || data.length < count) {
    return '';
  }

  const firstN = data.slice(0, count);

  let output = '';
  firstN.forEach((item) => {
    output += options.fn(item);
  });

  return output;
};