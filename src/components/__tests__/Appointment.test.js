//We are rendering `<Application />` down below, so we need React.createElement
import React from "react";

/*
  We import our helper functions from the react-testing-library
  The render function allows us to render Components
*/
import { render } from "@testing-library/react"


//We import the component that we are testing
import Appointment from "components/Appointment";

/*
We wrap related tests in a describe function
If props are required for your component, you need to fake them
*/

const interviewers = [
  {
    id: 1,
    avatar: "https://i.imgur.com/LpaY82x.png",
    name: "Sylvia Palmer"
  },
  {
    id: 4,
    avatar: "https://i.imgur.com/FK8V841.jpg",
    name: "Cohana Roy"
  },
  {
    id: 6,
    avatar: "https://i.imgur.com/TdOAdde.jpg",
    name: "Susan Reynolds"
  }
] 

//Fake data to pass as props
const appProps = {
  id: 6, 
  time: '12pm', 
  interview: null, 
  interviewers: interviewers,
  cancelInterview: () => {},
  bookInterview: () => {}
}

describe("Appointment", () => {
  // A test that renders a React Component
  it('renders without crashing', () => {
    render(< Appointment {...appProps} />);
  });

})