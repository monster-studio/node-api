import express from "express"
import bodyParser from "body-parser"
import _ from 'lodash';

const app = express();

app.use(bodyParser.json())

var object = {
    "config": {
      "id": ".id",
      "email": ".details.email",
      "full_name": ".user_details.name + payload.user_details.last_name"
    },
    "payload": {
      "id": "123",
      "user_details": {
        "name": "Sam",
        "last_name": "One",
        "id": "111"
      },
      "details": {
        "email": "1@1.com"
      }
    }
  };

  const test = _.get(object, object.config.id);


app.listen( 3000, () => console.log(test))

app.post('/api', (req, res) => {

    const payload = req.body.payload;
    const config = req.body.config;
    const response = {};

    Object.entries(config).forEach(entry => {
        const [key, value] = entry;
        response[key] = "";
        for (let i = 0; i < config[key].length; i++) {
            response[key] += _.get(payload, config[key][i]);
        }
    });
    
    res.json(response)
});
