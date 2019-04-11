define(["handlebars"], function(Handlebars) { return Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression, alias5=container.lambda;

  return "	<div class=\"forms__container wrapper\">\n		<h1 class=\"forms__title --rubrica\">"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</h1>\n		<h3 class=\"forms__subtitle\">"
    + ((stack1 = (helpers.breaklines || (depth0 && depth0.breaklines) || alias2).call(alias1,(depth0 != null ? depth0.subtitle : depth0),{"name":"breaklines","hash":{},"data":data})) != null ? stack1 : "")
    + "</h3>\n\n		<form  class=\"forms__inputs\">\n			<div class=\"inputs\">\n				<input required id=\"user-name\" class=\"inputs__input form-input\" placeholder=\""
    + alias4(alias5(((stack1 = (depth0 != null ? depth0.placeholders : depth0)) != null ? stack1.name : stack1), depth0))
    + "\" type=\"text\">\n				<input required id=\"user-email\" class=\"inputs__input form-input\" placeholder=\""
    + alias4(alias5(((stack1 = (depth0 != null ? depth0.placeholders : depth0)) != null ? stack1.email : stack1), depth0))
    + "\" type=\"email\">\n				<input required id=\"phone\" class=\"inputs__input form-input\" placeholder=\""
    + alias4(alias5(((stack1 = (depth0 != null ? depth0.placeholders : depth0)) != null ? stack1.phone : stack1), depth0))
    + "\" type=\"tel\">\n				<input required id=\"company-name\" class=\"inputs__input form-input\" placeholder=\""
    + alias4(alias5(((stack1 = (depth0 != null ? depth0.placeholders : depth0)) != null ? stack1.company : stack1), depth0))
    + "\" type=\"text\">\n			</div>\n\n			<div class=\"forms__checkboxes\">\n\n				<div class=\"checkboxes__title forms__subtitle\">"
    + alias4(((helper = (helper = helpers.checkboxes_subtitle || (depth0 != null ? depth0.checkboxes_subtitle : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"checkboxes_subtitle","hash":{},"data":data}) : helper)))
    + "</div>\n\n				<div class=\"checkboxes__blocks\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.items : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "				</div>\n\n\n			</div>\n\n			<div class=\"forms__progressbar\">\n				<div class=\"forms__subtitle progressbar__title\">"
    + alias4(((helper = (helper = helpers.progressbar_title || (depth0 != null ? depth0.progressbar_title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"progressbar_title","hash":{},"data":data}) : helper)))
    + "</div>\n				<div class=\"progressbar wrapper\">\n					<div class=\"porgerssline\">\n						<div class=\"porgerssline__fill\">\n\n						</div>\n					</div>\n					<svg class=\"progressfill\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 119 119\">\n					  <defs>\n					    <style>\n					      .cls-1 {\n					        isolation: isolate;\n					      }\n\n					      .opacity {\n					        opacity: 0.2;\n					      }\n\n					      .cls-3 {\n					        fill: #adadad;\n					      }\n\n					      .cls-4 {\n					        fill: #aeaeae;\n					      }\n\n					      .cls-5 {\n					        fill: #afafaf;\n					      }\n\n					      .cls-6 {\n					        fill: #b0b0b0;\n					      }\n\n					      .cls-7 {\n					        fill: #b1b1b1;\n					      }\n\n					      .cls-8 {\n					        fill: #b2b2b2;\n					      }\n\n					      .cls-9 {\n					        fill: #b3b3b3;\n					      }\n\n					      .cls-10 {\n					        fill: #b4b4b4;\n					      }\n\n					      .cls-11 {\n					        fill: #b5b5b5;\n					      }\n\n					      .cls-12 {\n					        fill: #b6b6b6;\n					      }\n\n					      .cls-13 {\n					        fill: #b7b7b7;\n					      }\n\n					      .cls-14 {\n					        fill: #b8b8b8;\n					      }\n\n					      .cls-15 {\n					        fill: #b9b9b9;\n					      }\n\n					      .cls-16 {\n					        fill: #bababa;\n					      }\n\n					      .cls-17 {\n					        fill: #bbb;\n					      }\n\n					      .cls-18 {\n					        fill: #bcbcbc;\n					      }\n\n					      .cls-19 {\n					        fill: #bdbdbd;\n					      }\n\n					      .cls-20 {\n					        fill: #bebebe;\n					      }\n\n					      .cls-21 {\n					        fill: #bfbfbf;\n					      }\n\n					      .cls-22 {\n					        fill: silver;\n					      }\n\n					      .cls-23 {\n					        fill: #c1c1c1;\n					      }\n\n					      .cls-24 {\n					        fill: #c2c2c2;\n					      }\n\n					      .cls-25 {\n					        fill: #c3c3c3;\n					      }\n\n					      .cls-26 {\n					        fill: #c4c4c4;\n					      }\n\n					      .cls-27 {\n					        fill: #c5c5c5;\n					      }\n\n					      .cls-28 {\n					        fill: #c6c6c6;\n					      }\n\n					      .cls-29 {\n					        fill: #c7c7c7;\n					      }\n\n					      .cls-30 {\n					        fill: #c8c8c8;\n					      }\n\n					      .cls-31 {\n					        fill: #c9c9c9;\n					      }\n\n					      .cls-32 {\n					        fill: #cacaca;\n					      }\n\n					      .cls-33 {\n					        fill: #cbcbcb;\n					      }\n\n					      .cls-34 {\n					        fill: #ccc;\n					      }\n\n					      .cls-35 {\n					        fill: #cdcdcd;\n					      }\n\n					      .cls-36 {\n					        fill: #cecece;\n					      }\n\n					      .cls-37 {\n					        fill: #cfcfcf;\n					      }\n\n					      .cls-38 {\n					        fill: #d0d0d0;\n					      }\n\n					      .cls-39 {\n					        fill: #d1d1d1;\n					      }\n\n					      .cls-40 {\n					        fill: #d2d2d2;\n					      }\n\n					      .cls-41 {\n					        fill: #d3d3d3;\n					      }\n\n					      .cls-42 {\n					        fill: #d4d4d4;\n					      }\n\n					      .cls-43 {\n					        fill: #d5d5d5;\n					      }\n\n					      .cls-44 {\n					        fill: #d6d6d6;\n					      }\n\n					      .cls-45 {\n					        fill: #d7d7d7;\n					      }\n\n					      .cls-46 {\n					        fill: #d8d8d8;\n					      }\n\n					      .cls-47 {\n					        fill: #d9d9d9;\n					      }\n\n					      .cls-48 {\n					        fill: #dadada;\n					      }\n\n					      .cls-49 {\n					        fill: #dbdbdb;\n					      }\n\n					      .cls-50 {\n					        fill: #dcdcdc;\n					      }\n\n					      .cls-51 {\n					        fill: #ddd;\n					      }\n\n					      .cls-52 {\n					        fill: #dedede;\n					      }\n\n					      .cls-53 {\n					        fill: #dfdfdf;\n					      }\n\n					      .cls-54 {\n					        fill: #e0e0e0;\n					      }\n\n					      .cls-55 {\n					        fill: #e1e1e1;\n					      }\n\n					      .cls-56 {\n					        fill: #e2e2e2;\n					      }\n\n					      .cls-57 {\n					        fill: #e3e3e3;\n					      }\n\n					      .cls-58 {\n					        fill: #e4e4e4;\n					      }\n\n					      .cls-59 {\n					        fill: #e5e5e5;\n					      }\n\n					      .cls-60 {\n					        fill: #e6e6e6;\n					      }\n\n					      .cls-61 {\n					        fill: #e7e7e7;\n					      }\n\n					      .cls-62 {\n					        fill: #e8e8e8;\n					      }\n\n					      .cls-63 {\n					        fill: #e9e9e9;\n					      }\n\n					      .cls-64 {\n					        fill: #eaeaea;\n					      }\n\n					      .cls-65 {\n					        opacity: 0.58;\n					        mix-blend-mode: soft-light;\n					        fill: url(#Безымянный_градиент_29);\n					      }\n					    </style>\n					    <linearGradient id=\"Безымянный_градиент_29\" x1=\"60.24\" y1=\"-948.68\" x2=\"60.24\" y2=\"-990.91\" gradientTransform=\"matrix(1, 0, 0, -1, 0, -902.73)\" gradientUnits=\"userSpaceOnUse\">\n					      <stop offset=\"0\" stop-color=\"#fff\" />\n					      <stop offset=\"0.1\" stop-color=\"#d0d0d0\" />\n					      <stop offset=\"1\" stop-opacity=\"0\" />\n					    </linearGradient>\n					  </defs>\n					  <title>Ресурс 34</title>\n					  <g class=\"cls-1\">\n					    <g id=\"Слой_2\" data-name=\"Слой 2\">\n					      <g id=\"Слой_1-2\" data-name=\"Слой 1\">\n					        <g class=\"opacity\">\n					          <image width=\"119\" height=\"119\" xlink:href=\"data:image/png;base64,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\"\n					          />\n					        </g>\n					        <circle class=\"cls-3\" cx=\"60.24\" cy=\"59.04\" r=\"31.55\" />\n					        <ellipse class=\"cls-4\" cx=\"60.24\" cy=\"59.36\" rx=\"31.32\" ry=\"31.15\" />\n					        <ellipse class=\"cls-5\" cx=\"60.24\" cy=\"59.68\" rx=\"31.09\" ry=\"30.75\" />\n					        <ellipse class=\"cls-6\" cx=\"60.24\" cy=\"60\" rx=\"30.86\" ry=\"30.36\" />\n					        <ellipse class=\"cls-7\" cx=\"60.24\" cy=\"60.31\" rx=\"30.62\" ry=\"29.96\" />\n					        <ellipse class=\"cls-8\" cx=\"60.24\" cy=\"60.63\" rx=\"30.39\" ry=\"29.56\" />\n					        <ellipse class=\"cls-9\" cx=\"60.24\" cy=\"60.95\" rx=\"30.16\" ry=\"29.16\" />\n					        <ellipse class=\"cls-10\" cx=\"60.24\" cy=\"61.27\" rx=\"29.93\" ry=\"28.76\" />\n					        <ellipse class=\"cls-11\" cx=\"60.24\" cy=\"61.59\" rx=\"29.7\" ry=\"28.36\" />\n					        <ellipse class=\"cls-12\" cx=\"60.24\" cy=\"61.91\" rx=\"29.46\" ry=\"27.96\" />\n					        <ellipse class=\"cls-13\" cx=\"60.24\" cy=\"62.22\" rx=\"29.23\" ry=\"27.56\" />\n					        <ellipse class=\"cls-14\" cx=\"60.23\" cy=\"62.54\" rx=\"29\" ry=\"27.16\" />\n					        <ellipse class=\"cls-15\" cx=\"60.23\" cy=\"62.86\" rx=\"28.77\" ry=\"26.76\" />\n					        <ellipse class=\"cls-16\" cx=\"60.23\" cy=\"63.18\" rx=\"28.53\" ry=\"26.36\" />\n					        <ellipse class=\"cls-17\" cx=\"60.23\" cy=\"63.5\" rx=\"28.3\" ry=\"25.96\" />\n					        <ellipse class=\"cls-18\" cx=\"60.23\" cy=\"63.82\" rx=\"28.07\" ry=\"25.56\" />\n					        <ellipse class=\"cls-19\" cx=\"60.23\" cy=\"64.13\" rx=\"27.84\" ry=\"25.16\" />\n					        <ellipse class=\"cls-20\" cx=\"60.23\" cy=\"64.45\" rx=\"27.6\" ry=\"24.76\" />\n					        <ellipse class=\"cls-21\" cx=\"60.23\" cy=\"64.77\" rx=\"27.37\" ry=\"24.36\" />\n					        <ellipse class=\"cls-22\" cx=\"60.23\" cy=\"65.09\" rx=\"27.14\" ry=\"23.96\" />\n					        <ellipse class=\"cls-23\" cx=\"60.23\" cy=\"65.41\" rx=\"26.91\" ry=\"23.56\" />\n					        <ellipse class=\"cls-24\" cx=\"60.23\" cy=\"65.72\" rx=\"26.67\" ry=\"23.16\" />\n					        <ellipse class=\"cls-25\" cx=\"60.23\" cy=\"66.04\" rx=\"26.44\" ry=\"22.76\" />\n					        <ellipse class=\"cls-26\" cx=\"60.23\" cy=\"66.36\" rx=\"26.21\" ry=\"22.36\" />\n					        <ellipse class=\"cls-27\" cx=\"60.23\" cy=\"66.68\" rx=\"25.98\" ry=\"21.96\" />\n					        <ellipse class=\"cls-28\" cx=\"60.23\" cy=\"67\" rx=\"25.75\" ry=\"21.56\" />\n					        <ellipse class=\"cls-29\" cx=\"60.23\" cy=\"67.32\" rx=\"25.51\" ry=\"21.16\" />\n					        <ellipse class=\"cls-30\" cx=\"60.23\" cy=\"67.63\" rx=\"25.28\" ry=\"20.76\" />\n					        <ellipse class=\"cls-31\" cx=\"60.23\" cy=\"67.95\" rx=\"25.05\" ry=\"20.36\" />\n					        <ellipse class=\"cls-32\" cx=\"60.23\" cy=\"68.27\" rx=\"24.82\" ry=\"19.97\" />\n					        <ellipse class=\"cls-33\" cx=\"60.23\" cy=\"68.59\" rx=\"24.58\" ry=\"19.57\" />\n					        <ellipse class=\"cls-34\" cx=\"60.23\" cy=\"68.91\" rx=\"24.35\" ry=\"19.17\" />\n					        <ellipse class=\"cls-34\" cx=\"60.23\" cy=\"69.23\" rx=\"24.12\" ry=\"18.77\" />\n					        <ellipse class=\"cls-35\" cx=\"60.23\" cy=\"69.54\" rx=\"23.89\" ry=\"18.37\" />\n					        <ellipse class=\"cls-36\" cx=\"60.22\" cy=\"69.86\" rx=\"23.65\" ry=\"17.97\" />\n					        <ellipse class=\"cls-37\" cx=\"60.22\" cy=\"70.18\" rx=\"23.42\" ry=\"17.57\" />\n					        <ellipse class=\"cls-38\" cx=\"60.22\" cy=\"70.5\" rx=\"23.19\" ry=\"17.17\" />\n					        <ellipse class=\"cls-39\" cx=\"60.22\" cy=\"70.82\" rx=\"22.96\" ry=\"16.77\" />\n					        <ellipse class=\"cls-40\" cx=\"60.22\" cy=\"71.13\" rx=\"22.72\" ry=\"16.37\" />\n					        <ellipse class=\"cls-41\" cx=\"60.22\" cy=\"71.45\" rx=\"22.49\" ry=\"15.97\" />\n					        <ellipse class=\"cls-42\" cx=\"60.22\" cy=\"71.77\" rx=\"22.26\" ry=\"15.57\" />\n					        <ellipse class=\"cls-43\" cx=\"60.22\" cy=\"72.09\" rx=\"22.03\" ry=\"15.17\" />\n					        <ellipse class=\"cls-44\" cx=\"60.22\" cy=\"72.41\" rx=\"21.79\" ry=\"14.77\" />\n					        <ellipse class=\"cls-45\" cx=\"60.22\" cy=\"72.73\" rx=\"21.56\" ry=\"14.37\" />\n					        <ellipse class=\"cls-46\" cx=\"60.22\" cy=\"73.04\" rx=\"21.33\" ry=\"13.97\" />\n					        <ellipse class=\"cls-47\" cx=\"60.22\" cy=\"73.36\" rx=\"21.1\" ry=\"13.57\" />\n					        <ellipse class=\"cls-48\" cx=\"60.22\" cy=\"73.68\" rx=\"20.87\" ry=\"13.17\" />\n					        <ellipse class=\"cls-49\" cx=\"60.22\" cy=\"74\" rx=\"20.63\" ry=\"12.77\" />\n					        <ellipse class=\"cls-50\" cx=\"60.22\" cy=\"74.32\" rx=\"20.4\" ry=\"12.37\" />\n					        <ellipse class=\"cls-51\" cx=\"60.22\" cy=\"74.64\" rx=\"20.17\" ry=\"11.97\" />\n					        <ellipse class=\"cls-52\" cx=\"60.22\" cy=\"74.95\" rx=\"19.94\" ry=\"11.57\" />\n					        <ellipse class=\"cls-53\" cx=\"60.22\" cy=\"75.27\" rx=\"19.7\" ry=\"11.17\" />\n					        <ellipse class=\"cls-54\" cx=\"60.22\" cy=\"75.59\" rx=\"19.47\" ry=\"10.77\" />\n					        <ellipse class=\"cls-55\" cx=\"60.22\" cy=\"75.91\" rx=\"19.24\" ry=\"10.37\" />\n					        <ellipse class=\"cls-56\" cx=\"60.22\" cy=\"76.23\" rx=\"19.01\" ry=\"9.98\" />\n					        <ellipse class=\"cls-57\" cx=\"60.22\" cy=\"76.54\" rx=\"18.77\" ry=\"9.58\" />\n					        <ellipse class=\"cls-58\" cx=\"60.21\" cy=\"76.86\" rx=\"18.54\" ry=\"9.18\" />\n					        <ellipse class=\"cls-59\" cx=\"60.21\" cy=\"77.18\" rx=\"18.31\" ry=\"8.78\" />\n					        <ellipse class=\"cls-60\" cx=\"60.21\" cy=\"77.5\" rx=\"18.08\" ry=\"8.38\" />\n					        <ellipse class=\"cls-61\" cx=\"60.21\" cy=\"77.82\" rx=\"17.84\" ry=\"7.98\" />\n					        <ellipse class=\"cls-62\" cx=\"60.21\" cy=\"78.14\" rx=\"17.61\" ry=\"7.58\" />\n					        <ellipse class=\"cls-63\" cx=\"60.21\" cy=\"78.45\" rx=\"17.38\" ry=\"7.18\" />\n					        <ellipse class=\"cls-64\" cx=\"60.21\" cy=\"78.77\" rx=\"17.15\" ry=\"6.78\" />\n					        <ellipse class=\"cls-65\" cx=\"60.24\" cy=\"48.7\" rx=\"22.48\" ry=\"18.83\" />\n					      </g>\n					    </g>\n					  </g>\n					</svg>\n				</div>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "					<div class=\"checkboxes__block\">\n						<div class=\"block__img --"
    + alias4(((helper = (helper = helpers.key || (data && data.key)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"key","hash":{},"data":data}) : helper)))
    + "\"></div>\n						<div class=\"block__title --rubrica\">"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</div>\n						<ul class=\"block__list\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.subitems : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "						</ul>\n					</div>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "							<li class=\"block-list__item md-checkbox\">\n								<label class=\"pure-material-checkbox\">\n									<input class=\"checkbox-item\" data-price=\""
    + alias4(((helper = (helper = helpers.price || (depth0 != null ? depth0.price : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"price","hash":{},"data":data}) : helper)))
    + "\" type=\"checkbox\">\n									<span class=\"checkbox-label\"> "
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</span>\n								</label>\n							</li>\n";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.is_culture : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.program(8, data, 0),"data":data})) != null ? stack1 : "");
},"6":function(container,depth0,helpers,partials,data) {
    return "				<p class=\"wrapper progressbar__amount\">from $<span class=\"progressbar__totalamount\">0</span></p>	\n";
},"8":function(container,depth0,helpers,partials,data) {
    return "				<p class=\"wrapper progressbar__amount\">от <span class=\"progressbar__totalamount\">0</span>&#8381;</p>\n";
},"10":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression, alias5=container.lambda;

  return "			</div>\n\n			<div class=\"forms__textarea\">\n				<div class=\"forms__subtitle textarea__title\">"
    + alias4(((helper = (helper = helpers.textarea__title || (depth0 != null ? depth0.textarea__title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"textarea__title","hash":{},"data":data}) : helper)))
    + "</div>\n				<p><textarea class=\"form-input\" id=\"description\" name=\"text\"></textarea></p>\n			</div>\n			<div class=\"forms__privacy\">\n				<p>"
    + ((stack1 = (helpers.breaklines || (depth0 && depth0.breaklines) || alias2).call(alias1,(depth0 != null ? depth0.privacy : depth0),{"name":"breaklines","hash":{},"data":data})) != null ? stack1 : "")
    + "</p>\n				<p><a target=\"_blank\" href=\""
    + alias4(alias5(((stack1 = (depth0 != null ? depth0.privacy_link : depth0)) != null ? stack1.link : stack1), depth0))
    + "\">"
    + alias4(alias5(((stack1 = (depth0 != null ? depth0.privacy_link : depth0)) != null ? stack1.text : stack1), depth0))
    + "</a>.</p>\n			</div>\n			<div class=\"submit\">\n				<input class=\"submit__btn\" value=\""
    + alias4(((helper = (helper = helpers.button_value || (depth0 != null ? depth0.button_value : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"button_value","hash":{},"data":data}) : helper)))
    + "\" type=\"submit\">\n			</div>\n		</form>\n	</div>\n\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<section id=\"forms-block\" class=\"forms\">\n"
    + ((stack1 = helpers["with"].call(alias1,(depth0 != null ? depth0.forms : depth0),{"name":"with","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["with"].call(alias1,(depth0 != null ? depth0.header : depth0),{"name":"with","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["with"].call(alias1,(depth0 != null ? depth0.forms : depth0),{"name":"with","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</section>\n";
},"useData":true}); });