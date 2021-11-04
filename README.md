# Interview Scheduler
Interview Scheduler is React Application that allows users to book and cancel interviews. It combines a concise API with a WebSocket server to build a realtime experience. 

A user can view the days of the week and see how many spots are available for bookings each day. A user can then click on a day with 1 or more spots remaining and book an interview or modify/delete existing interviews.
 
This project uses React, JSX, Storybook, Jest, Cypress, Node, Express.

## Final Product
Here are some examples of what "Interview Scheduler" looks like. 

<img alt="Full Day, No Spots Available" width="400" src="https://github.com/KatieHerda/scheduler/blob/master/docs/MondayNoSpots.png?raw=true"> <img/>

<img alt="Creating New Interview" width="400" src="https://github.com/KatieHerda/scheduler/blob/master/docs/SelectDayCreate.png?raw=true"> <img/>

<img alt="New Interview Booked" width="400" src="https://github.com/KatieHerda/scheduler/blob/master/docs/NewInterviewBooked.png?raw=true"> <img/>

<img alt="Delete Interview" width="400" src="https://github.com/KatieHerda/scheduler/blob/master/docs/DeleteInterview.png?raw=true"> <img/>

## Getting Started
 1. Clone a copy of the scheduler repo to your dev machine
 2. Install dependencies with `npm i`.

### Dependencies 
  - Axios
  - @testing-library/react-hooks
  - React
     - npm install react@^16.9.0
  - React-test-renderer
      - npm install --save-dev react-test-renderer@^16.9.0


### Running Webpack Development Server, Jest Test Framework, Storybook Visual Testbed
```sh
npm start
npm test
npm run storybook
```
