This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

You can find a guide to some of the most common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

---

## Deploying the app with Heroku

[![Deploy](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)

---

## Deploying the app with Docker

1. [Download and install docker](https://docs.docker.com/engine/installation/)
2. Make sure docker is running locally
3. Run `docker build -t lamp ` at command line
4. Run the docker image with the command `docker run -p 3000 IMAGE_ID` where `IMAGE_ID` is the image ID shown in the result of step 3.
5. Access your app on port 3000

---

## Deploying the app with Digital Ocean
**Not ready**
[![Install on DigitalOcean](http://installer.71m.us/button.svg)](http://installer.71m.us/install?url=https://github.com/matthew1809/ILoveLamp-React)

---

## Running this app locally
1. Clone this repository & `cd` into it.
2. Run `npm install`.
3. In `src/utils/moltin.js`, on line 3, replace `client_id` with your own moltin client_id
4. Run `npm start`.
