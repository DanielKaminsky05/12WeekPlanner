import React from 'react'

export default function completionTracker(props) {
  return (
    <span>
      {props.completed}/{props.total}
    </span>
  )
}
