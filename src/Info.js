import React from 'react'
import { AiOutlineDoubleLeft } from 'react-icons/ai'

export default function Info({ itemInfo }) {
    const { title, company, dates, duties } = itemInfo
    return (
        <article className="job-info">
            <h3>{title}</h3>
            <h4>{company}</h4>
            <p className="job-date">{dates}</p>
            {duties.map(duty => {
                return (
                    <div key={new Date().getTime() + Math.random()} className="job-desc">
                        <AiOutlineDoubleLeft />
                        <p>{duty}</p>
                    </div>
                )
            })}
        </article>
    )
}
