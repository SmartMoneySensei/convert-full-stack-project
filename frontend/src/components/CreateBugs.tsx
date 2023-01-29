import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
export default function CreateBugs() {
  // useState
  const [id, setId] = useState("");
  const [priority, setPriority] = useState("");
  const [details, setDetails] = useState("");
  const [name, setName] = useState("");
  // functions
  let handleSubmit = async (e:any) => {
    e.preventDefault();
    try {
      let res = await fetch("/bugs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name,
          priority: priority,
          details: details,
        }),
      });
      let resJson = await res.json();
      console.log(resJson);
    } catch (err) {
      console.log(err);
    }
    window.location.reload();
  };
  return (
    <div id="editbug">
    <h1>Create Bug</h1>
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Bug Name</Form.Label>
        <Form.Control
          type="text"
          defaultValue={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Priority</Form.Label>
        <Form.Select
          aria-label="Default select example"
          onChange={(e) => setPriority(e.target.value)}
        >
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Details</Form.Label>
        <Form.Control
          as="textarea"
          type="text"
          defaultValue={details}
          onChange={(e) => setDetails(e.target.value)}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit Bug
      </Button>
    </Form>
  </div>
);
}