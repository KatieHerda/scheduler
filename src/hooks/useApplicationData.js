import { useState, useEffect } from "react";
import axios from "axios";

export default function useApplicationData() {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {},
  });

  const setDay = (day) => setState({ ...state, day });

  //Request to api server that sets state for days, appointments, and interviewers.
  useEffect(() => {
    Promise.all([
      axios.get("api/days"),
      axios.get("api/appointments"),
      axios.get("api/interviewers"),
    ]).then((all) => {
      setState((prev) => ({
        ...prev,
        days: all[0].data,
        appointments: all[1].data,
        interviewers: all[2].data,
      }));
    });
  }, []);

  function bookInterview(id, interview) {
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview },
    };

    const appointments = {
      ...state.appointments,
      [id]: appointment,
    };

    return axios.put(`/api/appointments/${id}`, { interview }).then((res) => {
      const days = updateSpots(state, false, id);
      setState({
        ...state,
        appointments,
        days
      });
    });
  }

  function cancelInterview(id, interview) {
    const appointment = {
      ...state.appointments[id],
      interview: null,
    };

    const appointments = {
      ...state.appointments,
      [id]: appointment,
    };

    return axios
      .delete(`/api/appointments/${id}`, { interview })
      .then((res) => {
        const days = updateSpots(state, true, id);
        setState({
          ...state,
          appointments,
          days
        });
      });
  }

  function updateSpots(state, cancelInterview, id) {
    const { day, days, appointments } = state;

    //Find correct day object inside days array (array of day objects)
    const foundDay = days.find((d) => d.name === day);

    //find total number of spots for day
    let spots = 0;

    //Find available appointments for a given day
    for (let appointmentId of foundDay.appointments) {
      if (appointments[appointmentId].interview === null) {
        //how many nulls?
        spots++;
      }
    }

    /*
      If cancelling an interview, we can add an additional spot
      If adding interview, we can subtract a spot but only IF there is no interview (null)
      We don't want to add a spot on edit.
    */
    if (cancelInterview) {
      spots++
    } else if (!cancelInterview && appointments[id].interview === null) {
      spots --;
    } 

    //Create new 
    const newDay = {...foundDay, spots};
    const newDays = days.map(d => d.name === day ? newDay : d)

    return newDays;
  }

  //must return an object containing { state, setDay, bookInterview, cancelInterview }
  return { state, setDay, bookInterview, cancelInterview };
}
