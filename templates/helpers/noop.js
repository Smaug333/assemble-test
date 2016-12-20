
module.exports.register = function (Handlebars, options)  { 
  Handlebars.registerHelper('noop', function(options) {
    return options.fn(this);
  });
};