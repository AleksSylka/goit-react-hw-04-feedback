import React from "react";
import css from './FeedbackButton.module.css'
import { getUpperCase } from "helper-js/helper";

const FeedbackButton = ({ options, onLeaveFeedback }) => 
(<div className={css['card-btn']}>
    {options.map(option => (
        <button className={css['btn']} type="button" key={option} onClick={() => onLeaveFeedback(option)}>{getUpperCase(option)}</button>
      ))}
    
</div>)


export default FeedbackButton;


