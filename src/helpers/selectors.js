// // GET APPTS FOR DAY // //
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
}

// // GET INTERVIEWERS FOR DAY // //
export function getInterviewersForDay(state, dayName) {
  const foundDay = state.days.find((day) => day.name === dayName);

  if (!foundDay) {
    return [];
  }

  //return an array of the interviewers for the day
  const result = foundDay.interviewers.map((Id) => {
    return state.interviewers[Id];
  });

  //return final array
  return result;
}

// // GET INTERVIEW // //
export function getInterview(state, interview) {
  if (!interview) {
    return null;
  }

  const interviewerId = interview.interviewer;

  return {
    ...interview,
    interviewer: state.interviewers[interviewerId],
  };
}
