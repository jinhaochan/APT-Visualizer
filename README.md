This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Populating Mongo DB with MITRE data

In the folder `mitre`, run 

`python mitre.py`

The python script will pull data from MITRE's TAXII server and obtain all the information in a STIX format before inserting them into Mongo DB.

There is one collection to hold the Tactic information, and multiple collections to hold each of the Techniques in a Tactic

