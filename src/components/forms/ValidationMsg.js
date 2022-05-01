import React, { useContext } from 'react'
import { ValidationContext } from "./ValidationContext";

const ValidationMsg = ({field}) => {
  const context = useContext(ValidationContext)
  return context.getMessagesForField(field).map((m, i) => <div className="error_field" key={i}>
        {m}</div>)

}
export default ValidationMsg
