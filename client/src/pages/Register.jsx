import { Form, Link } from "react-router-dom";
import MainIcon from "../assets/icons/MainIcon";

const Register = () => {
  return (
    <div>
      <Form method="post">
        <MainIcon />
        <h1>Register</h1>
        <h2>Name</h2>
        <input type="name" name="name" className="border rounded " required />
        <h2>Email Id</h2>
        <input type="email" name="email" className="border rounded " required />
        <br />
        <h2>Password</h2>
        <input
          type="password"
          name="password"
          className="border rounded "
          required
        />
        <br />
        <button className="p-1 border border-black-300 bg-teal-300 rounded ">
          {" "}
          Submit
        </button>
        <p>
          Already a member?
          <Link
            to="/login"
            className="p-1 border border-black-300 bg-teal-300 rounded "
          >
            Login
          </Link>
        </p>
      </Form>
    </div>
  );
}

export default Register