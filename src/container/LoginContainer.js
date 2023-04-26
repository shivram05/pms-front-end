import React from "react";
import "../cssfile/login.css";
import {Link, useLocation, useParams} from "react-router-dom";
function LoginContainer() {

  const params = useLocation();

  console.log(params.pathname)

  return (
    <div>
      <form>
        <div className="register-content">
          <h1>Login to PSW</h1>
        </div>

        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Email address
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            placeholder="Enter email"
            aria-describedby="emailHelp"
            required
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Password
          </label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Enter passowrd"
            required
          />
        </div>
        <div className="button-group">
          <button type="submit" class="btn btn-primary">
            Sign in
          </button>
          <div className="spacer"></div>

          {params.pathname==="/seller"?  <Link to="/seller/register">
            <button type="submit" class="btn btn-primary">
              create account
            </button>
          </Link> :  <Link to="/login/register">
            <button type="submit" class="btn btn-primary">
              create account
            </button>
          </Link>}
          
        </div>
      </form>
    </div>
  );
}

export default LoginContainer;
