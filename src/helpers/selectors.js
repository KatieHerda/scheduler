export function getAppointmentsForDay(state, dayName) {
  const foundDay = state.days.find((day) => day.name === dayName);

  //if no day found, return empty array
  if (!foundDay) {
    return [];
  }

  //return an array of the appointments for the day
  const result = foundDay.appointments.map((Id) => {
    return state.appointments[Id];
  });

  //return final array
  return result;
};

export function getInterview(state, interview) {
  if (!interview) {
    return null;
  }

  const interviewerId = interview.interviewer;

  //if no interview is booked, return null

  // console.log("interviewer", state.interviewers)
  // console.log("interviewerId", interviewerId)


  return {
    ...interview, interviewer: state.interviewers[interviewerId]
  }
}
