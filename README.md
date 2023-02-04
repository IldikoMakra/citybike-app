# Citybike App

## Description

This is a single page web application to provide data about citibike stations and journeys made in the Helsinki capital area in June 2021.

## Functionalities

- Get data about all citybike journeys
- Get listed the names of citybike stations
- Get journey and location data of a selected station

## Technologies

NodeJS Express, MongoDB and ReactJS

Only one month data has been imported to MongoDB for the purpose of demonstration, due to the free available size restictions on Atlas DB service.

## Live App

Demo app is served from CSC cloud.

[Check out the working application from here](http://86.50.228.198/)

:blush:

## Get Started with Development

Clone this repository first

```bash

git clone https://github.com/IldikoMakra/citybike-app.git

```

Step into the root folder and install server

```bash

cd citybike-app
npm install

```

Change directory to the client folder, install packages

```bash

cd client
npm install

```

Step back to the root folder, rename and set the .env file
Email me to get your own DB password.

```bash

cd ..
mv .envtochange .env

```

After password set you should be able to start developing with one command only from the root folder:

```bash

npm run dev

```

- See frontend on port localhost:3000
- API on port localhost:8080

## Testing only from your local computer

Clone the repository

```bash

git clone https://github.com/IldikoMakra/citybike-app.git

```

Step into the root folder and install server

```bash

cd citybike-app
npm install

```

Change directory to the client folder, install packages and build the frontend to be served from localhost:8080 too.

```bash

cd client
npm install
npm run build

```

Step back to the root folder, rename and set the .env file

Email me to get your own DB password.

```bash

cd ..
mv .envtochange .env

```

- Set password to be correct
- Set NODE_ENV = production
- Run **npm start** from the root folder
- Chek out the port localhost:8080

## API has three GET endpoints

- GET /api/journeys
- GET /api/stations
- GET /api/stations/:name

## Frontend has three React Components

- ListOfJourneys
- ListOfSations
- SingleStation

Besides the landing page there is two pages routed

- Journeys
- Stations

To see details of one certain station, select and click the station´s name from the list view.

Happy testing, happy hacking!
:heart:
