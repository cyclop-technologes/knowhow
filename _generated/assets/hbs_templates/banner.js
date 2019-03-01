define(["handlebars"], function(Handlebars) { return Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "\n	 <div class=\"banner__wrapper wrapper\">\n	 	<div class=\"banner__title\">\n	 		<h1 class=\"--rubrica-title\"><span class=\"--italic\">ПЛЕВАТЬ<br/>НА ЛОГИКУ</span><br/>ШЕДЕВР<br/>СОЗДАЮТ<br/>ЭМОЦИИ <span class=\"switcher\"><img src=\"assets/img/switcher.png\" alt=\"switcher\"></span></h1>\n	 		<h4 class=\"--avente-subtitle-big\">А ЭМОЦИИ СОЗДАЕМ <span class=\"--primary-color\">МЫ</span></h4>\n	 	</div>\n	 	<div class=\"banner__head\">\n	 		<div class=\"canvas-bg\">\n	 			<canvas height=\"810px\" id=\"canvas\"></canvas>\n	 		</div>\n	 		<div class=\"head-img\"></div>\n	 	</div>\n	 </div>\n	 <div class=\"banner__mob-contnent wrapper banner__toform-btn\">\n	 	<div class=\"toform-btn__btn\"><a href=\"#forms-block\">"
    + container.escapeExpression(((helper = (helper = helpers.to_form_btn || (depth0 != null ? depth0.to_form_btn : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"to_form_btn","hash":{},"data":data}) : helper)))
    + "</a></div>\n	 </div>\n	 <div class=\"banner__mob-contnent banner__mob-description wrapper\">\n	 	<p class=\"banner__mob-text\">Когда-то давно Микеланджело\n			<br/>вооружился инструментами\n			<br/>и создал из глыбы мрамора \n			<br/>произведение искусства — «Давида». \n			<br/>Скульптор даже пренебрег логикой и \n			<br/>исказил пропорции человеческого тела,\n			<br/>чтобы достичь большей художественной\n			<br/>выразительности.</p>\n		<div data-aos=\"fade-left\" class=\"headbg--mob-contnent\"><img src=\"asswets/img/head.png\" alt=\"\"></div>\n	 </div>\n\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<section class=\"banner\">\n"
    + ((stack1 = container.invokePartial(partials.header,depth0,{"name":"header","data":data,"indent":"\t","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = helpers["with"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.first_slide : depth0),{"name":"with","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</section>";
},"usePartial":true,"useData":true}); });