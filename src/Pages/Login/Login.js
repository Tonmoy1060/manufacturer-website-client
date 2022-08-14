import { info } from "daisyui/src/colors";
import React from "react";
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import google from "../../assets/photoes/google.png";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

  if(loading || gLoading) {
    return <Loading></Loading>
  }

  const handleLogin = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    signInWithEmailAndPassword(email, password)

    event.target.reset();
  };
  
  const from = location.state?.from?.pathname || "/";
  if(user || gUser){
    navigate(from, { replace: true });
  }

  return (
    <div className="max-w-xs mx-auto pt-10 pb-10 mt-10 mb-10">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-center text-3xl text-info font-bold pb-3">
            Please login
          </h2>
          <form onSubmit={handleLogin} action="">
            <div className="form-control w-full max-w-xs">
              <label className="label">
                {/* <span className="label-text">Your Email</span> */}
              </label>
              <input
                name="email"
                type="email"
                placeholder="Email"
                className="input input-bordered w-full max-w-xs"
                required
              />
              <label className="label">
                {/* <span className="label-text-alt">{message}</span> */}
              </label>
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                {/* <span className="label-text">Password</span> */}
              </label>
              <input
                name="password"
                type="password"
                placeholder="Password"
                className="input input-bordered w-full max-w-xs"
              />
              <label className="label">
                {/* <span className="label-text-alt text-red-500">{error?.message}</span> */}
              </label>
            </div>

            <button className="btn btn-info text-white w-2/4">LogIn</button>
            
          </form>
          <label className="pt-1">
              {/* <span className="label-text-alt">Alt label</span> */}
              <p className="pt-3 pb-2">
                <small>
                  New to Camera's House?{" "}
                  <Link className="text-accent" to="/register">
                    {" "}
                    Register now
                  </Link>
                </small>
              </p>
              <p>
                <small>
                  Forgot Password?{" "}
                  <Link className="text-red-500" to="/register">
                    {" "}
                    Reset Password
                  </Link>
                </small>
              </p>
            </label>
          <div className="divider">OR</div>
          <button onClick={() => signInWithGoogle()} className="btn btn-primary text-white">
            <img src={google} alt="" />
            google login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
