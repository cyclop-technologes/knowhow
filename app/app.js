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

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));

  app.post('/api/lead', function(req, res) {

    console.log(req.body);
    let cardHead = `${req.body.name} ${req.body.price}`;
    let cardBody = `${req.body.name}; \x0A ${req.body.email}; \x0A ${req.body.phone}; \x0A ${req.body.company} \x0A ${req.body.description} \x0A ${req.body.price} \x0A items: \x0A ${req.body.items}`;
    trello.addCard(cardHead, cardBody, listId, function (error, trelloCard) {
      if (error) {
        console.log('Could not add card:', error);
        res.send(error);
      }
      else {
        console.log('Added card:', trelloCard);
        res.send(trelloCard);
      }
    });
  })


}


module.exports = new local_app()
