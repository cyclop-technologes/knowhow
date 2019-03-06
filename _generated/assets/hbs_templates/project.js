define(["handlebars"], function(Handlebars) { return Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<section class=\"project\">\n	<div class=\"wrapper project__container\">\n		<div class=\"project__title\">анатомия вашей компании</div>\n\n"
    + ((stack1 = container.invokePartial(partials["sculpture-img"],depth0,{"name":"sculpture-img","data":data,"indent":"\t\t","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n	</div>\n\n	<footer class=\"project__footer\">\n		<img class=\"--bright-wave\" src=\"assets/img/wave.png\" alt=\"\">\n		<img class=\"--dark-wave\" src=\"assets/img/wave-dark.png\" alt=\"\">		\n	</footer>\n</section>";
},"usePartial":true,"useData":true}); });