const local_app = function () {}

// * ———————————————————————————————————————————————————————— * //
// * 	init
// *
// *	gets called upon starting enduro.js production server
// *	@param {express app} app - express app
// *	@return {nothing}
// * ———————————————————————————————————————————————————————— * //
local_app.prototype.init = function (app) {
	// express app available here
	// don't forget these routes will be available on production server server (defaults to localhost:5000)
  const Trello = require("trello");
  const bodyParser = require('body-parser');
  const trello = new Trello("35ac1c7df19c10d6faf944741f579c1d", "e5c1c4e21dab120dae2c38e8bcad6bd3948d24e7ec1da3c91e80b22efbff0459");
  const listId = "5c8f6f746cf27f4cf7baf4f8";
  const { parse } = require('query-string');

  // app.use(bodyParser.json());
  // app.use(bodyParser.urlencoded({ extended: false }));

  app.post('/api/lead', function(req, res) {
    let jsonString = ''

		req.on('data', function (chunk) {

			jsonString += chunk
		})

		req.on('end', function () {
			jsonString = parse(jsonString);

      let body = jsonString;
      console.log(body);

      let cardHead = `${body.name} ${body.price}rub`;
      let cardBody = `${body.name}; \x0A ${body.email}; \x0A ${body.phone}; \x0A ${body.company} \x0A ${body.description} \x0A ${body.price}rub \x0A items: \x0A ${body.items}`;
      trello.addCard(cardHead, cardBody, listId, function (error, trelloCard) {
        if (error) {
          console.log('Could not add card:', error);
          res.json(error);
        }
        else {
          console.log('Added card:', trelloCard);
          res.json(trelloCard);
        }
      });
    })

  });
}





module.exports = new local_app()
