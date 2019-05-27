This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Importing data into mongo

In the folder `mitre`, `mitre_info.json` stores all the mitre attacks.

To import this json file to mongo, run the following command

`mongoimport --db <dbName> --collection <collectionName> --file mitre_info.json`

## Pulling of data

The mitre information is pulled using `mitre.py`, which calls the TAXII server, and massages the STIX file to a more useable format

The results are then written to `mitre_info.json`
