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

## TODO

New functions:
1. Users can enter new log sources, and detection rules within the log source.
2. Users can select APT from the side bar, and relevant TTPs will be highlighted

Fixes:
1. <!> Formatting of the text in the modal popups

Aesthetics:
1. Sticky menu at the top when scrolling down

## Misc MongoDB operations

This section is out of scope, but putting here because they are frequently used

1. Dropping Database

`use <database>`

`db.dropDatabase()`

2. Dropping Collection

`use <database>`

`db.<collection>.drop()`

3. Adding user to the db

```
db.createUser(
{	user: "user",
	pwd: "password",

	roles:[{role: "readWrite" , db:<database>}]})
```
