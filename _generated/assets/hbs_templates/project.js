define(["handlebars"], function(Handlebars) { return Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<section class=\"project\">\r\n	<div class=\"wrapper project__container\">\r\n		<div class=\"project__title\">анатомия вашей компании</div>\r\n\r\n"
    + ((stack1 = container.invokePartial(partials["sculpture-img"],depth0,{"name":"sculpture-img","data":data,"indent":"\t\t","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\r\n	</div>\r\n\r\n	<footer class=\"project__footer\">\r\n		<img class=\"--bright-wave\" src=\"assets/img/wave.png\" alt=\"\">\r\n		<img class=\"--dark-wave\" src=\"assets/img/wave-dark.png\" alt=\"\">		\r\n	</footer>\r\n</section>";
},"usePartial":true,"useData":true}); });