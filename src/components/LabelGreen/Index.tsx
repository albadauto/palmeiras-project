import React from 'react'
interface labelModel{
    label: string,
    size?: number
}
export default function LabelGreen(props: labelModel) {
  return (
    <div>
        <label style={{color: "#006437", fontSize: props.size}}><b>{props.label}</b></label>
    </div>
  )
}
