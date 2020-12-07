import React from "react"
import {reduxForm, Field} from "redux-form"
import "./form.css"

let EquationForm = ({handleSubmit}) => {
    return (
        <div class="equation-wrapper">
            <form class="equation" onSubmit={handleSubmit}>
                <div>
                    <label>y = </label>
                    <Field class="equation-field" name="expression" component="input" type="text" />
                </div>
                <div>
                    <label>Range of x </label>
                    <Field name="from" component="input" type="text" placeholder="from" />
                    <Field name="to" component="input" type="text" placeholder="to" />
                </div>
                <button type="submit">calc/build</button>
            </form>
        </div>
    )
}

EquationForm = reduxForm({
    form: "expression",
})(EquationForm)

export default EquationForm
