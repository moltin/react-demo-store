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

## Using this app with your own moltin store
The app expects a certain inventory setup to correctly function as an ILoveLamp store, if you'd like to build it from the ground up, here's what to do:

1. [Create a collection](https://docs.moltin.com/inventory/collection#creating-a-collection) with the slug `top_picks`
2. [Create at least one category](https://docs.moltin.com/inventory/category#creating-a-category)
3. [Create at least one product](https://docs.moltin.com/inventory/product#create-a-product)
4. [Create at least one file i.e. an image for your product](https://docs.moltin.com/content/files#upload-the-file)
5. [Attach the product/s to the category and collection](https://docs.moltin.com/inventory/product#adding-a-category-brand-or-collection)
6. [Attach the file to the product as a main image](https://moltin.api-docs.io/v2/product-relationships/create-product-to-main-image-relationships)