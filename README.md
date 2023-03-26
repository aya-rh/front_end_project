# Maven Market Frontend Group Project

## Project Description
Our project involved creating a React front-end application that provides a user-friendly interface for one of the server-side APIs developed by another backend group during week 6 of the boot camp. By leveraging React's many tools and features, we were able to design an effective interface that showcases the functionality of our API.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

<hr />

## Diagrams
### Wireframe Diagram
 
The wireframe represents the skeleton of our e-commerce website and showcases our initial plan. However, the deal slider section was not included in the actual website due to time constraints.
 
<img width="895" alt = "UML_Diagram.png" src = "https://i.imgur.com/VT1OHlu.png">

### Component Diagram
 
The component diagram also showcases our initial plan. However, the Deal Slider component was left out due to time constraints.
 
<img width="895" alt = "UML_Diagram.png" src = "https://i.imgur.com/sUdSutN.png">

<hr />

## Tech Stack
The technologies we used to build the front end of this project include:
- JavaScript + React
- HTML
- CSS
- The [server-side API](https://github.com/ChinikaC/BackEnd_Project) assigned to our group

<hr />

## Setup Instructions

**Server-side API Instructions:**
1. Ensure the following are installed on your machine: 
- Intellij IDEA , running with JDK 17
- Postgres
- Postman
- Postico

2. Clone the repository from GitHub. Scroll to the top of this page and click on the green Code button. Ensure SSH is selected and copy the link provided. In your terminal, perform the following command:<br> 
`git clone git@github.com:ChinikaC/BackEnd_Project.git`

3. Create a new PostgreSQL database named 'grechimo_marketplace' anywhere in your terminal.<br>
`create db grechimo_marketplace`

4. Via Intellij IDEA, run the `GrechimoMarketplaceApplication` and make sure the API is running on port 8080.

5. To ensure the endpoints are working as expected, you can test them using Postman. All endpoints are available in this [link](https://github.com/ChinikaC/BackEnd_Project).

<hr />

**Client-side API Instructions:**
1. Ensure the following are installed on your machine: 
- Visual Studio Code

2. Clone the repository from GitHub. Scroll to the top of this page and click on the green Code button. Ensure SSH is selected and copy the link provided. In your terminal, perform the following command:<br> 
`git clone git@github.com:aya-rh/front_end_project.git`

3. Install node modules.<br>
 In your terminal, perform the following command: `npm install` or `npm i`

4. Install React Icons.<br>
In your terminal, perform the following command: `npm i react-icons`

5. Install React Slick.<br>
In your terminal, perform the following command: `npm i react-slick`

6. Install React Router.<br>
In your terminal, perform the following command: `npm install react-router-dom@6`

7. Run React App.<br>
In your terminal, perform the following command: `npm start`.
The App should automatically open in the browser. If it doesn't, you can manually navigate to `http://localhost:3000` using your preferred browser.

<hr />

## Routes

To navigate between pages on the React app, we configured the following routes using the React Router library:

Landing & Home Page: `http://localhost:3000/Home`

Contact Page: `http://localhost:3000/Contact`

Sellers Page: `http://localhost:3000/Sellers`

Subscribers Page: `http://localhost:3000/Subscribers`

Login Page: `http://localhost:3000/Login`

Cart Item Page: `http://localhost:3000/Cart`

Electronics Items Page: `http://localhost:3000/Electronics`

Gadget Page:
This page doesn't exist so when the Gadget Link is clicked via homepage, it redirects the user back to the Home Page.

<hr />

## Future
If we had been granted additional time, we would have liked to add the following features to our project:
- Update functionality that would allow users to edit product details.
- Implementation of a deals slider to showcase a slightly different list of discounted products.
- Further implementation of nested routes throughout the router to categorise products.
- The inclusion of a search bar for more efficient product searches.

<hr />

## Collaborators

- Aya Hezam (Github: [aya-rh](https://github.com/aya-rh))
- Diana Eboegbulem (Github: [PrincessDiana1](https://github.com/PrincessDiana1))
- Thinesan Manoseelan (Github: [thinesan29](https://github.com/thinesan29))