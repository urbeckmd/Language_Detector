const express = require('express');
const { spawnSync, spawn } = require('child_process');
const { readFile } = require('fs/promises');
const { appendFile } = require('fs/promises')
const { join } = require('path');
const { log, error } = require('console');
const bodyParser = require('body-parser');
var cors = require('cors');
const { read } = require('fs');

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.post('/inputData', async (req, res) => {
    // log the input data for reference
    console.log(req.body);
    // write the input to args.json file
    await appendFile(
        join('../pythonData/args.json'),
        JSON.stringify(req.body),
        {
            encoding: 'utf-8',
            flag: 'w',
        },
    );

    const pythonProcess = await spawnSync('python', [
        '../pythonData/pythonPredict.py',
        'makePrediction',
        '../pythonData/args.json',
        '../pythonData/results.json'
    ]);
    const result = pythonProcess.stdout?.toString()?.trim();
    const error = pythonProcess.stderr?.toString()?.trim();
    console.log(result);
    const status = result != '';

    if (status) {
        const raw_prediction = await readFile('../pythonData/results.json');
        json_predictions = JSON.parse(raw_prediction?.toString())
        console.log(json_predictions);
        res.send(raw_prediction)
    }



})


app.listen(5000, () => console.log("Server is listening..."));