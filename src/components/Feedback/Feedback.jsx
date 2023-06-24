import React from "react";
import css from './Feedback.module.css'


const Feedback = ({title, children}) => (
    <div className={css['card-title']}>
        <span className={css['title']}>{title}</span>
        {children}
    </div>
)

export default Feedback;