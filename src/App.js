import { useEffect } from "react";
import "./App.css";

function App() {
  // Display and Hide Password Toggle Function
  window.onload = function () {
    const togglePassword = document.querySelector("#togglePassword");
    const password = document.querySelector("#password");
    togglePassword.addEventListener("click", function (e) {
      const type =
        password.getAttribute("type") === "password" ? "text" : "password";
      password.setAttribute("type", type);
      this.classList.toggle("fa-eye-slash");
    });
  };
  function enableSubmit(e) {
    e.preventDefault();
    const nextBtn = document.getElementById("next");
    const inputs = document.querySelectorAll(".input");
    let isValid = true;
    for (let i = 0; i < inputs.length; i += 1) {
      let changedInput = inputs[i];
      if (changedInput.value.trim() === "" || changedInput.value === null) {
        isValid = false;
        break;
      }
    }
    nextBtn.disabled = !isValid;
    if (isValid) {
      nextBtn.classList.remove("button-disabled");
      nextBtn.classList.add("next");
    } else {
      nextBtn.classList.remove("next");
      nextBtn.classList.add("button-disabled");
    }
  }
  function validateEmail(email) {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  }
  let delayHandler;
  function handleEmail(e) {
    e.preventDefault();
    delayHandler = setTimeout(() => {
      const el = document.getElementById("email");
      if (!validateEmail(e.target.value)) {
        el.classList.add("input-container");
      } else {
        el.classList.remove("input-container");
      }
    }, 1500);
  }
  function validatePassword(password) {
    return password.length >= 8
  }
  function handlePassword(e) {
    e.preventDefault();
    delayHandler = setTimeout(() => {
      const el = document.getElementById("password-div");
      if (!validatePassword(e.target.value)) {
        el.classList.add("input-container");
      } else {
        el.classList.remove("input-container");
      }
    }, 1500);
  }

  useEffect(() => {
    clearTimeout(delayHandler);
  }, [delayHandler]);

  return (
    <div className="flex h-100vh">
      <div className="w-10"></div>
      <div className="w-60 flex f-direction-column">
        <div className="top">
          <small className="text-right t-10 r-10">
            Step 1 of 3{" "}
            <span className="ls-2">
              <strong>.</strong>..
            </span>
          </small>
        </div>

        <div className="t-10 form-div">
          <form className="form m-auto m-t-25 text-center flex f-direction-column w-50 h-100">
            <p className="text-left f-size-25 fade-black bold">
              Let's setup your account
            </p>
            <small className="text-left m-t-15 fade-black">
              Already have an account? <a href="/#">Sign in</a>
            </small>
            <div
              className="input-block m-t-25"
              onKeyUp={enableSubmit}
              id="fullname"
            >
              <input
                type="text"
                name="fullname"
                spellCheck="false"
                className="input"
              />
              <span className="placeholder">Your name</span>
            </div>
            <div
              className="input-block m-t-15"
              id="email"
              data-error="Please enter a valid email!"
              onKeyUp={handleEmail}
            >
              <input
                type="email"
                name="email"
                className="input"
                spellCheck="false"
                onKeyUp={enableSubmit}
              />
              <span className="placeholder">Email adress</span>
            </div>
            <div className="input-block m-t-15">
              <select className="select">
                <option value="developer" defaultValue>
                  Developer
                </option>
                <option value="company">Company</option>
                <option value="recruiter">Recruiter</option>
              </select>
            </div>
            <div
              className="input-block m-t-15"
              id="password-div"
              data-error="Please enter a valid password!"
              onKeyUp={handlePassword}
            >
              <input
                type="password"
                name="password"
                autoComplete="current-password"
                className="input"
                id="password"
                onKeyUp={enableSubmit}
                min={8}
              />
              <span className="placeholder">Password*</span>
              <i className="far fa-eye" id="togglePassword"></i>
            </div>
            <span className="f-size-10 roboto text-left">* Password requires minimum eight characters.</span>
            
            <div className="input-block m-t-15">
              <button className="radius button-disabled" id="next">
                Next
              </button>
            </div>
            <p className="text-left m-t-15 footnote">
              By clicking the Next button, you agree to creating a free account,
              and to <a href="/#">Terms of Service</a> and{" "}
              <a href="/#">Privacy Policy</a>.
            </p>
          </form>
        </div>
      </div>
      <div className="bg-blue w-30 h-120">
        <h2 className="text-center m-auto m-t-40p f-size-header text-white letter-space">
          Dummy Heading
        </h2>
        <p className="side-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </div>
  );
}

export default App;
