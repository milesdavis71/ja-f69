module.exports =  function(context, options) {
    let result = '';
    for (let i = 0; i < 3 && i < context.length; i++) {
      result += options.fn(context[i]);
    }
    return result;
  };
  