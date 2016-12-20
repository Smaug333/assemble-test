module.exports.register = function (Handlebars, options)  { 

  Handlebars.registerHelper('panel2', function(name, options) {
        var partial = Handlebars.partials[name];
        var template = Handlebars.compile(partial);
        var para = options.hash
        para["body"] = options.fn(this);

        var output = template(para);

        console.log(this.data)

        return new Handlebars.SafeString(output); 
  });
};