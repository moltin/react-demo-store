<p align="center">
  <a href="https://ilovelamp.now.sh">
    <img src="https://i.imgur.com/B1EZxsB.png" alt="Moltin React Demo Store" />
  </a>
</p>

# Moltin &mdash; React Demo Store

An example store built using [React](https://reactjs.org/), [Redux](https://redux.js.org/) and [moltin](https://moltin.com). This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

* [Demo](https://ilovelamp.now.sh)
* [API Reference](https://docs.moltin.com)

## Development

```bash
git clone https://github.com/moltin/react-demo-store.git
cd react-demo-store
yarn # or npm install
yarn start # or npm start
```

Note: You will want to change the `client_id` inside `src/moltin.js` with your own moltin store credentials.

This demo store uses the Redux "[ducks](https://github.com/erikras/ducks-modular-redux)" approach to bundling reducers and actions.

## Deployment

### Heroku

[![Deploy](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)

### Docker

1. [Download and install docker](https://docs.docker.com/engine/installation/)
2. Make sure docker is running locally
3. Run `docker build -t lamp .` at command line
4. Run the docker image with the command `docker run -p 5000 IMAGE_ID` where `IMAGE_ID` is the image ID shown in the result of step 3.
5. Access your app on port 5000

## Using this app with your own moltin store

The app expects a certain inventory setup to correctly function as an ILoveLamp store, if you'd like to build it from the ground up, here's what to do:

1. [Create a collection](https://docs.moltin.com/collection#create-a-collection) with the slug `top_picks`
2. [Create at least one category](https://docs.moltin.com/collection#create-a-category)
3. [Create at least one product](https://docs.moltin.com/collection#create-a-product)
4. [Create at least one file i.e. an image for your product](https://docs.moltin.com/collection#create-a-file)
5. [Attach the product/s to the category and collection](https://docs.moltin.com/collection#create-category-relationship-s-)
6. [Attach the file to the product as a main image](https://docs.moltin.com/collection#create-file-relationship-s-)
