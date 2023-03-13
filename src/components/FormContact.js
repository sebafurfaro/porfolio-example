import React, {useState} from "react";
import { Formik, Form, Field } from "formik";

export const FormContact = () => {

  const [msgSuccess, setMsgSuccess] = useState(false)

  const validateEmail = (value) => {
    let error;
    if (!value) {
      error = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = 'Invalid email address';
    }
    return error;
  }

  const validateName = (value) => {
    let error;
    if (value === 'John Doe') {
      error = 'Nice try!';
    }
    return error;
  }

  const handleSuccess = () => {
    setMsgSuccess(true);
  }

  return(
    <>
      <Formik
        className="w-full"
        initialValues={{
          fullName: '',
          email: ''
        }}
        onSubmit={handleSuccess}>
        <Form autoComplete="off">
          <div className="flex flex-col mb-4">
            <label htmlFor="fullName">What Is Your Name:</label>
            <Field
              validate={validateName}
              id="fullName"
              name="fullName"
              placeholder="Name"
              className="form-input focus:ring-0 bg-transparent border-x-0 border-t-0 border-b-2 border-white border-solid placeholder:text-slate-200 focus:border-x-0 focus:border-t-0 focus:border-pink-400"/>
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="email">Your Email Address:</label>
            <Field
              validate={validateEmail}
              id="email"
              name="email"
              placeholder="Email"
              type="email"
              className="form-input focus:ring-0 bg-transparent border-x-0 border-t-0 border-b-2 border-white border-solid placeholder:text-slate-200 focus:border-x-0 focus:border-t-0 focus:border-pink-400"/>
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="message">How Can I Help You?</label>
            <Field
              id="message"
              name="message"
              type="textarea"
              className="form-textarea focus:ring-0 h-40 bg-transparent border-x-0 border-t-0 border-b-2 border-white border-solid placeholder:text-slate-200 focus:border-x-0 focus:border-t-0 focus:border-pink-400"/>
          </div>
          <button type="submit" className="btn bg-pink-500 text-white flex items-center">Send <span className="material-icons ml-2">arrow_right_alt</span></button>
        </Form>
      </Formik>
      {msgSuccess && (
        <div className="text-green-500 bg-green-200 border-solid border-2 w-fit border-green-800 mt-5 p-2 rounded-sm">Enviado!</div>
      )}
    </>
  );
}