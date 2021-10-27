import React from 'react';
import classNames from 'classnames';
import "./styles.scss";


export default function Appointment(props) {

  return (
    <article className="appointment"> {props.time ? "Appointment at" + props.time : "No Appointment" }</article>
  )
}
