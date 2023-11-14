import React, { Fragment } from "react";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";

const PrivacyField = ({setDataUser, dataUser }) => {
    const handleChange = (e) => {
        setDataUser({
          ...dataUser,
          [e.target.name]: e.target.value,
        });
      };
return (
    <Form.Group controlId="submissionType">
    <InputGroup className="mb-2">
    <InputGroup.Text>Do You Want Your Submission</InputGroup.Text>
      <Form.Control
        as="select"
        name="submissionType"
        onChange={handleChange}
        required
      >
        <option value={""}></option>
        <option value={"Public"}>
        Public: Your name and submission will be published online.
        </option>
        <option value={"Name Withheld"}>
        Anonymous:  Your submission will be published online without your name.
        </option>
        <option value={"Confidential"}>
        Restricted:  Your submission will not be published or referred to the inquiry.
        </option>
      </Form.Control>
      <Form.Control.Feedback type="invalid">
        Please choose a Type of Submission.
      </Form.Control.Feedback>
    </InputGroup>
  </Form.Group>
)
}

export default PrivacyField

