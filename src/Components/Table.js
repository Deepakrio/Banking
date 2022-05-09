import React from 'react'

export default function Table(props) {
    const classes = "table stripped" + props.className;

  return (
    <table className={classes}>{props.children}</table>
  )
}
