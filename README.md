# SupAut - (Dashboard)

## Project Description
Ardent is an all-you-need business partner, automating customer interaction while providing concise data related to your business in a simple dashboard. Aimed to help the management of small businesses, Ardent is both a culmination of a WhatsApp chat bot, and a business dashboard.

On one hand the chatbot intelligently communicates with your students, answering queries as well as tracking student skill while sending assigned assignment questions. While on the other hand, the dashboard displays the received information regarding answer details, and many other student skill related data, as well as perform many other functionalities. 

The application on the frontend is built using React.js which uses the CoreUI library to construct the dashboard, while integrating many Firebase products such as Firestore (database), Hosting (deployment), and Extensions (Twilio). Twilio (which is used to build the chatbot) itself is an incorporation of many services such as Autopilot (NLP), Functions and WhatsApp messaging API. Lastly the application also has a CI/CD pipeline which is handled by GitHub actions.

- [Watch Project Pitch](https://youtu.be/mBL9gokXN48)
- [Watch Project Demo](https://youtu.be/PNgmPYE9MPs)

> Note: The following installation focuses on running the frontend of the application. Click [here](https://github.com/Zainab-Fahim/ardent-partner/tree/main/ardent-chat-bot#readme) to checkout the process to run the chatbot.

## What you need

To run this repo you will need to have:

### Firebase Setup
1. Create a firebase project
2. Create a firestore database with three collections, namely: `customer`(1), `product`(2), `order`(3) 
3. Fill in with temparory values as you create a starting document for each collection with the following fields
4. Get the firebase credentials for the specifics of your project from the project settings (you will find it at the end of the page, with npm selected as your SDK setup), and replace the contents of `supaut-dashboard/src/firebase.js` with that of your project credentials. 

## How to run

Clone the repo and change into the new directory:

```bash
git clone https://github.com/SupAut/SupAut-Dashboard.git
cd SupAut-Dashboard
```

Install the dependencies:

```bash
npm install
```

With all that prepared, start the application with:

```bash
npm start
```
