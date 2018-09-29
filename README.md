**Business Applictions Development**
=============
##**Description**
---------------
In this project I used the [Mercado Libre API](https://developers.mercadolibre.com/en_us/items-and-searches#close) where the main goal is to get some products and show some information about it.
The app, initially, was created with [create-react-app](https://github.com/facebook/create-react-app) command and then, when it's main functionallity was finished, the app was deployed in a [Docker](url) image and [Heroku](https://libre-mercado-juanfer.herokuapp.com/) to put in practice the terms studied in class.

###**Docker guide**
---------------
To get access to the docker images follow the steps below:
* Open the command line and type "docker pull juanferrgiraldo/libre-mercado-juanfer".
* Run the image with "docker run -p 8080:80 juanferrgiraldo/libre-mercado-juanfer".
* Use "Ctlr + c" to finish the image excecution.

###**Used Guides**
---------------
* [Dockerize your Rect app](https://hackernoon.com/so-you-want-to-dockerize-your-react-app-64fbbb74c217)
* [React app, deploy to Heroku](https://medium.com/@ianposton2/create-react-app-deploy-to-heroku-7c3c03f34382)
