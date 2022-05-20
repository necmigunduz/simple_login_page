import "./App.css";

window.onload = function () {
  const togglePassword = document.querySelector("#togglePassword");
  const password = document.querySelector("#id_password");
  togglePassword.addEventListener("click", function (e) {
    // toggle the type attribute
    const type = password.getAttribute("type") === "password" ? "text" : "password";
    password.setAttribute("type", type);
    // toggle the eye slash icon
    this.classList.toggle("fa-eye-slash");
  });
};

function App() {
  return (
    <div className="flex h-100vh">
      <div className="w-10 bg-blue"></div>
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
            <p className="text-left f-size-20 bold">Let's setup your account</p>
            <small className="text-left m-t-15">
              Already have an account? <a href="/#">Sign in</a>
            </small>
            <div className="input-block m-t-25">
              <input
                type="text"
                name="input-text"
                id="input-text"
                spellCheck="false"
                required
              />
              <span className="placeholder">Your name</span>
            </div>
            <div className="input-block m-t-15">
              <input
                type="email"
                name="input-text"
                id="input-text"
                spellCheck="false"
                required
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
            <div className="input-block m-t-15">
              <input
                type="password"
                name="password"
                autoComplete="current-password"
                required=""
                id="id_password"
              />
              <span className="placeholder">Password</span>
              <i className="far fa-eye" id="togglePassword"></i>
            </div>
            <div className="input-block m-t-15">
              <button>Next</button>
            </div>
            <small className="text-left m-t-15">
              By clicking the Next button, you agree to creating a free account,
              and to <a href="/#">Terms of Service</a> and{" "}
              <a href="/#">Privacy Policy</a>.
            </small>
          </form>
        </div>
      </div>
      <div className="bg-blue w-30"></div>
    </div>
  );
}

export default App;
