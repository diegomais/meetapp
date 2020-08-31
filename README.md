<h1 align="center">
    <img alt="Meetapp" src="/packages/web/src/assets/logo.svg" width="100px" /><br>
    <b>Meetapp (an acronym for Meetup + App)</b> 👥
</h1>

<p align="center">
  <img alt="GitHub license" src="https://img.shields.io/github/license/diegomais/meetapp?style=for-the-badge">
  <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/diegomais/meetapp?style=for-the-badge">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/diegomais/meetapp?style=for-the-badge">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/diegomais/meetapp?style=for-the-badge">
</p>

<p align="center">
  <a href="#rocket-technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#sparkles-features">Features</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;  <a href="#seat-getting-started">Getting started</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-how-to-contribute">How to contribute</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-license">License</a>
</p>

<br>

## :rocket: Technologies

This project was developed with the following technologies:

- [Node.js](https://nodejs.org)
- [React](https://reactjs.org)
- [React Native](https://facebook.github.io/react-native/)

Extras:

- Main Libs
  - [Express](https://expressjs.com)
  - [Sequelize ORM](https://sequelize.org)
  - [Redux](https://redux.js.org)
  - [redux-saga](https://redux-saga.js.org)
- Style
  - [EditorConfig](https://editorconfig.org)
  - [ESLint](https://eslint.org)
  - [Prettier](https://prettier.io)

## :sparkles: Features

### API

#### File upload

Create a file upload route that records the path and file name in a table and returns all data from the file.

#### Meetups management

The user can register meetups on the platform with meetup title, description, location, date and time and image (banner). All fields are required. Also add a user_id field that stores the user ID that organizes the event.

It is not possible to register meetups with dates that have passed.

User can edit all meetup data from meetups that has not yet happened and that is hosted by the user.

User can list meetups that are organized by the logged-in user.

User can delete meetups organized by him that have not yet happened. The delete action remove the meetup from database.

#### Meetups Subscription

User can subscribe for meetups that he does not organize.

User can not subscribe for meetups that have already happened.

User can not subscribe for the same meetup twice.

User can not join two meetups that happen at the same time.

Whenever a user subscribe for a meetup, an email is sent to host containing the data related to registered user.

#### List of meetups

User can filter and list meetups by date (not by time), results from that listing are paginated by 10 items per page. Below is an example call to the meetups listing route:

```
http://localhost:3333/meetups?date=2019-07-01&page=2
```

In this example, the API will list page 2 of the meetups that will take place on July 1st 2019.

In that list is also returned the organizer data.

#### List of subscriptions

User can list the meetups the logged-in user is enrolled in.

Are listed only meetups that have not yet happened and order closer meetups as the first on the list.

### Web

#### Sign in

User can authenticate using email and password.

#### Sign up

User can sign up with name, email and password.

#### Dashboard

User can list the meetups they organize and click to see details of a meetup.

From this page the user can navigate to meetup creation page.

#### Details

User can view details of a previously registered meetup.

In this page user can edit information of a meetup or even cancel a meetup.

#### Create or edit

User can create or edit information about meetups he organizes.

Display the meetup banner image preview when the user selects an image.

Fields are validated.

#### Profile

User can edit your profile.

Fields are validated.

### Mobile

#### Sign in

User can authenticate using email and password.

#### Sign up

User can sign up with name, email and password.

#### Dashboard

User can browse meetups by date. This screen use infinite scroll.

From this screen the user can subscribe for a Meetup.

#### Subscriptions

The user can view their meetup subscriptions.

In this screen user can unsubscribe.

#### Profile

The user can edit their profile.

Fields are validated.

## :seat: Getting started

These instructions will get you a copy of the full project up and running on your local machine for development and testing purposes.

#### Setting up the development environment

The project is developed using Git. Git is a free and open source distributed version control system. [Download Git](https://git-scm.com/downloads).

The project can be built with npm or Yarn, so choose one of the approach bellow in case you don't have any installed on your system.

- **npm** is distributed with Node.js which means that when you download Node.js, you automatically get npm installed on your computer. [Download Node.js](https://nodejs.org/en/download/).
- **Yarn** is a package manager built by Facebook Team and seems to be faster than npm in general. [Download Yarn](https://yarnpkg.com/en/docs/install).

#### Cloning the project

You can obtain the project by running the instruction bellow on your terminal:

`git clone https://github.com/diegomais/meetapp.git`

### API

#### Installing dependencies and running the server

Run the instructions bellow inside `packages/api` directory:

1. `npm install`
2. `npm run dev`

or

1. `yarn install`
2. `yarn dev`

### Web

#### Installing dependencies and running the web application

Run the instructions bellow inside `packages/web` directory:

1. `npm install`
2. `npm start`

or

1. `yarn install`
2. `yarn start`

### Mobile

#### Setting up the development environment

Follow the instructions for React Native CLI available in the official [React Native Documentation](https://reactnative.dev/docs/environment-setup).

#### Installing dependencies and running the mobile application

Run the instructions bellow inside `packages/mobile` directory:

1. `npm install`
2. `npm start`

or

1. `yarn install`
2. `yarn start`

## 🤔 How to contribute

- Fork this repository;
- Create a branch with your feature: `git checkout -b my-feature`;
- Commit your changes: `git commit -m '[feat](scope) My new feature'`;
- Push to your branch: `git push origin my-feature`.

After the merge of your pull request is done, you can delete your branch.

## :memo: License

This project is under the MIT license. See the [LICENSE](LICENSE) for more details.

---

Made with :heart: by [Diego Mais](https://diegomais.github.io/) :wave:.
