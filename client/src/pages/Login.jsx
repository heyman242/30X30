import { Form, Link } from "react-router-dom"
import MainIcon from "../assets/icons/MainIcon"

const Login = () => {
  return (
    <div>
      <Form method="post" className="form">
        <MainIcon />

        <div>
          <h1>Login page</h1>
          <h2>Email ID</h2>
          <input
            type="email"
            name="email"
            className="border rounded "
            required
          />
          <br />
          <h2>Password</h2>
          <input
            type="password"
            name="password"
            className="border rounded "
            required
          />
          <br />
          <button
            type="submit"
            className="p-1 border border-black-300 bg-teal-300 rounded "
          >
            Login
          </button>
          <h3>Not a member yet</h3>
          <Link
            to="/register"
            className="p-1 border border-black-300 bg-teal-300 rounded"
          >
            Register
          </Link>
        </div>
      </Form>
    </div>
  );
}

export default Login