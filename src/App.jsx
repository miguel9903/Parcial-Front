import React, { useState } from "react";
import Button from "./components/Button";
import Form from "./components/Form";
import TextField from "./components/TextField";
import useForm from "./hooks/useForm";
import Card from "./components/Card";
import './App.css';
import "./styles/components.css";

const initialFormValues = {
  name: "",
  email: "",
  subject: "",
  comments: "",
};

const valideteForm = (form) => {
  let errors = {};

  if (form.name.trim().length < 3) {
    errors.name = "This field must have at least 3 characters";
  }

  if (form.email.trim().length < 6) {
    errors.email = "This field must have at least 6 characters";
  }

  if (form.subject.trim().length < 6) {
    errors.subject = "This field must have at least 6 characters";
  }

  if (form.comments.trim().length < 6) {
    errors.comments = "This field must have at least 6 characters";
  }

  return errors;
};

function App() {

  const [cardInfo, setCardInfo] = useState({});

  const submitFunction = (form) => {
    setCardInfo(form);
  };

  const {
    name,
    email,
    subject,
    comments,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useForm(initialFormValues, valideteForm, submitFunction);


  return (
    <div className="app">
      <Form 
        title="Contact us" 
        onSubmit={handleSubmit}
      >
        <TextField
          type="text"
          name="name"
          value={name}
          placeholder="Enter your name"
          onChange={handleChange}
          onBlur={handleBlur}
          message={errors.name}
          modifier={errors.name && "error"}
        />
        <TextField
          type="email"
          name="email"
          value={email}
          placeholder="Enter your email"
          onChange={handleChange}
          onBlur={handleBlur}
          message={errors.email}
          modifier={errors.email && "error"}
        />
        <TextField
          type="text"
          name="subject"
          value={subject}
          placeholder="Enter the subject"
          onChange={handleChange}
          onBlur={handleBlur}
          message={errors.subject}
          modifier={errors.subject && "error"}
        />
        <TextField
          type="textarea"
          name="comments"
          value={comments}
          placeholder="Enter your comments"
          onChange={handleChange}
          onBlur={handleBlur}
          message={errors.comments}
          modifier={errors.comments && "error"}
        />
        <Button
          type="submit"
          disabled={Object.keys(errors).length > 0}
          fullWidth
        >
          Send
        </Button>
      </Form>
      { Object.values(cardInfo).some(item => item !== "") && (
        <Card title="User info" {...cardInfo} />
      ) } 
    </div>
  );
}

export default App;
