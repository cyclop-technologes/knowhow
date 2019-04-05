define(["handlebars"], function(Handlebars) { return Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "		<div class=\"project__title\">"
    + container.escapeExpression(((helper = (helper = helpers.project_title || (depth0 != null ? depth0.project_title : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"project_title","hash":{},"data":data}) : helper)))
    + "</div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<section class=\"project\">\n	<div class=\"wrapper project__container\">\n"
    + ((stack1 = helpers["with"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.forms : depth0),{"name":"with","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = container.invokePartial(partials["sculpture-img"],depth0,{"name":"sculpture-img","data":data,"indent":"\t\t","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n	</div>\n\n	<footer class=\"project__footer\">\n		<img class=\"--bright-wave\" src=\"assets/img/wave.png\" alt=\"\">\n		<img class=\"--dark-wave\" src=\"assets/img/wave-dark.png\" alt=\"\">\n	</footer>\n</section>\n";
},"usePartial":true,"useData":true}); });