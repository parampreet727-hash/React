import React from "react";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";

export default function BootStrap() {
  return (
    <div>
      <h1>Hello Bootstrap</h1>

      <Button variant="primary">Click Me!</Button>
      <Alert variant="success">This is a success alert-check it out!</Alert>
    </div>
  );
}
