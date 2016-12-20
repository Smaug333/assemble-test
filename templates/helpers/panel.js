module.exports.register = function (Handlebars, options)  { 

  

  Handlebars.registerHelper('panel', function(options) {

  var 	start = Handlebars.compile(Handlebars.partials['block-start']),
    		end = Handlebars.compile(Handlebars.partials['block-end']),
        panelcontent,
        _self = this;

        if(typeof(this.panelcontent) === "string" ) {
          panelcontent = Handlebars.compile(Handlebars.partials[this.panelcontent])
        }
  
  console.log('##############################')   
  console.log(this)
  console.log('##############################')		

    return new Handlebars.SafeString(
  			start({paneltitle: 'inscript'}) +
    		panelcontent(this) +
  			end(this) 
    	)
  });
};