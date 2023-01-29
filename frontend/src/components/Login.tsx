import React from "react";
// import {} from "../components/AuthBug";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/esm/Button";


export default function Login() {
  const dispatch:any = useDispatch();
  const [formInput, setFormInput] = useState({
    name: "",
    password: "",
  });
  function inputChanged(e:any) {
    setFormInput({
      ...formInput,
      [e.target.name]: e.target.value,
    });
  }
  function submit(e:any) {
    dispatch(sigIn(formInput));
    e.preventDefault();
  }
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}
function useDispatch() {
  throw new Error("Function not implemented.");
}

function useState(arg0: { name: string; password: string; }): [any, any] {
  throw new Error("Function not implemented.");
}

function sigIn(formInput: any): any {
  throw new Error("Function not implemented.");
}

