define(["handlebars"], function(Handlebars) { return Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "	<div class=\"forms__container wrapper\">\n		<h1 class=\"forms__title --rubrica\">"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</h1>\n		<h3 class=\"forms__subtitle\">"
    + alias4(((helper = (helper = helpers.subtitle || (depth0 != null ? depth0.subtitle : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"subtitle","hash":{},"data":data}) : helper)))
    + "</h3>\n\n		<form action=\"\" class=\"forms__inputs\">\n			<div class=\"inputs\">\n				<input class=\"inputs__input\" placeholder=\"имя\" type=\"text\">\n				<input class=\"inputs__input\" placeholder=\"E-mail\" type=\"email\">\n				<input id=\"phone\" class=\"inputs__input\" placeholder=\"номер телефона\" type=\"tel\">\n				<input class=\"inputs__input\" placeholder=\"название компании\" type=\"text\">\n			</div>\n\n			<div class=\"forms__checkboxes\">\n\n				<div class=\"checkboxes__title forms__subtitle\">отметьте необходимое</div>\n\n				<div class=\"checkboxes__blocks\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.items : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "				</div>\n\n\n			</div>\n\n			<div class=\"forms__progressbar\">\n				<div class=\"forms__subtitle progressbar__title\">примерный бюджет</div>\n				<div class=\"progressbar wrapper\">\n					<div class=\"progressfill\"></div>\n				</div>\n				<p class=\"wrapper progressbar__amount\">0&#8381;</p>\n			</div>\n\n			<div class=\"forms__textarea\">\n				<div class=\"forms__subtitle textarea__title\">опишите проект</div>\n				<p><textarea name=\"text\"></textarea></p>\n			</div>\n\n			<div class=\"submit\">\n				<input class=\"submit__btn\" value=\"отправить\" type=\"submit\">\n			</div>\n		</form>\n\n	</div>\n\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "					<div class=\"checkboxes__block\">\n						<div class=\"block__img --"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\"></div>\n						<div class=\"block__title --rubrica\">"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</div>\n						<ul class=\"block__list\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.subitems : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "						</ul>\n					</div>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "							<li class=\"block-list__item md-checkbox\">\n								<label class=\"pure-material-checkbox\">\n									<input class=\"checkbox-item\" data-price=\""
    + alias4(((helper = (helper = helpers.price || (depth0 != null ? depth0.price : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"price","hash":{},"data":data}) : helper)))
    + "\" type=\"checkbox\">\n									<span> "
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</span>\n								</label>\n							</li>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<section id=\"forms-block\" class=\"forms\">\n"
    + ((stack1 = helpers["with"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.forms : depth0),{"name":"with","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</section>\n";
},"useData":true}); });