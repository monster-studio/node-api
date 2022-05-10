import express from "express"
import _ from 'lodash';

const app = express();

app.use(express.json())

app.listen( 3000, () => console.log("running"))

app.post('/api', (req, res) => {

    const payload = req.body.payload;
    const config = req.body.config;
    const response = {};

    Object.entries(config).forEach(entry => {
        const [key, value] = entry;
        response[key] = "";
        for (let i = 0; i < config[key].length; i++) {
            let space = ""; if(i>0){space = " "}
            response[key] += space + _.get(payload, config[key][i]);
        }
    });
    
    res.json(response)
});
