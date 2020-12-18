import React from 'react'
import useForm from './useForm'
import validate from './validateInfo'

export const FormSignup = () => {
    const {Change, values, handleSubmit} = useForm();
    return (
        <div className="form-content-right">
            <form className="form" onSubmit={handleSubmit}>
                <h1>Sign up to our events today!</h1>
                <div className="form-inputs">
                    <label htmlFor="sliiteven" className="Form-Label">
                        Choose your event
                    </label>
                    <select type="text" id="sliiteven" name="sliiteven" value={values.sliiteven} onChange={Change} >
                        <option value="none" disabled="TRUE" selected="TRUE" >Select your event</option>
                        <option value="DummyEvent1">DummyEvent1</option>
                        <option value="DummyEvent2">DummyEvent2</option>
                    </select>
                </div>
                <div className="form-inputs">
                    <label htmlFor="studid" className="Form-Label">
                        StudentID
                    </label>
                    <input type="text" name="studid" id="studid" placeholder="Enter your student ID" value={values.studid} onChange={Change}></input>
                </div>
                <div className="form-inputs">
                <div className="form-inputs">
                    <label htmlFor="stud" className="Form-Label">
                        Name
                    </label>
                    <input type="text" id="stud" name="stud" placeholder="Enter your name here" value={values.stud} onChange={Change}></input>
                </div>
                    <label htmlFor="studemail" className="Form-Label">
                        Email
                    </label>
                    <input type="text" id="studemail" name="studemail" placeholder="Enter your email here" value={values.studemail} onChange={Change}></input>
                </div>
                <div className="form-inputs">
                    <label htmlFor="studcontact" className="Form-Label">
                        Contact Number
                    </label>
                    <input type="text" id="studcontact" name="studcontact" placeholder="Enter your contact number here" value={values.studcontact} onChange={Change}></input>
                </div>
                <button className="submit-btn">Submit</button>
            </form>
        </div>
        
        
    )
}
