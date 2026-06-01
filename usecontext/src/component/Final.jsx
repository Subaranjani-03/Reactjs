import React, { useContext } from 'react'

import { formDetails } from './Main'


const Final = () => {

  let form = useContext(formDetails)

  console.log(form)

  return (
    <div className="final">
      final
      <p>Name : {form.formValue.name}</p>
      <p>Phone :{form.formValue.phone}</p>
      <p>Email : {form.formValue.email}</p>
      <p>Address : {form.formValue.address}</p>

      {/* <p>Theme : {form.color}</p> */}
      <button onClick={()=> form.setColor(prev => prev === 'dark' ? 'light' : 'dark')} >theme</button> <p>{form.color}</p>
    </div>
  )
}

export default Final
