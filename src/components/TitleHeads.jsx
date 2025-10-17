import React from 'react'

const TitleHeads = ({title, sub }) => {
  return (
    <div className="flex flex-col item-center gap-5">
        <div className="hero-badge">
            <p>{sub}</p>
        </div>
    </div>
  )
}

export default TitleHeads