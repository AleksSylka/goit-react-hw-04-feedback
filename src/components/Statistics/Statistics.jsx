import React from "react";
import Notification from "components/Notification/Notification";
import css from './Statistics.module.css'

const Statistics = ({ good, neutral, bad, total, percentage, message }) => {
    return ((good > 0 || neutral > 0 || bad > 0) ? (<div className={css['card-stat']}>
        {<p className={css['stat-title']}>Statistics</p>}
        {<p className={css['text-stat']}>Good: {good}</p>}
        {<p className={css['text-stat']}>Neutral: {neutral}</p>}
        {<p className={css['text-stat']}>Bad: {bad}</p>}
        {total > 0 && (<p className={css['text-stat']}>Total: {total}</p>)}
        {percentage > 0 && (<p className={css['text-stat']}>Positive feedback: {percentage}%</p>)}
    </div>) : (<Notification message={message}/>)) };

export default Statistics;