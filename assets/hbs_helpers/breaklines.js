const helper = function () {}

helper.prototype.register = function () {
    enduro.templating_engine.registerHelper('breaklines', function(text) {
      text = enduro.templating_engine.Utils.escapeExpression(text);
      text = text.replace(/(\r\n|\n|\r)/gm, '<br/>');
      return text;
  });
}

module.exports = new helper()
