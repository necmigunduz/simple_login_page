import "./App.css";

// Display and Hide Password Toggle Function
window.onload = function () {
  const togglePassword = document.querySelector("#togglePassword");
  const password = document.querySelector("#password");
  togglePassword.addEventListener("click", function (e) {
    const type = password.getAttribute("type") === "password" ? "text" : "password";
    password.setAttribute("type", type);
    this.classList.toggle("fa-eye-slash");
  });
};

function handleFullName(e){
  e.preventDefault();
  const el = document.getElementById('fullname');
  const nextBtn = document.getElementById('next');

  if(e.target.value === ""){
    el.classList.add('input-container')
  } else {
    el.classList.remove('input-container')  
  }

  if(e.target.value === ""){
    nextBtn.classList.add('button-disabled')
    nextBtn.classList.remove('next')
    nextBtn.setAttribute('disabled','true')
  } else if(e.target.value !== ""){
    nextBtn.classList.remove('button-disabled')
    nextBtn.classList.add('next')
    nextBtn.removeAttribute('disabled')
    console.log(e.target.value)
  }
}

function App() {
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
          <form 
            className="form m-auto m-t-25 text-center flex f-direction-column w-50 h-100" 
          >
            <p className="text-left f-size-25 fade-black bold">Let's setup your account</p>
            <small className="text-left m-t-15 fade-black">
              Already have an account? <a href="/#">Sign in</a>
            </small>
            <div 
              className="input-block m-t-25" 
              data-error="Please make an name entry!" 
              onChange={handleFullName}
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
            <div className="input-block m-t-15">
              <input
                type="email"
                name="email"
                id="email"
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
                id="password"
                // onInvalid={e => e.target.setCustomValidity('Enter minimum 8 digits')}
                required
              />
              <span className="placeholder">Password</span>
              <i className="far fa-eye" id="togglePassword"></i>
            </div>
            <div className="input-block m-t-15">
              <button className="radius button-disabled" id="next" disabled>Next</button>
            </div>
            <p className="text-left m-t-15 footnote">
              By clicking the Next button, you agree to creating a free account,
              and to <a href="/#">Terms of Service</a> and{" "}
              <a href="/#">Privacy Policy</a>.
            </p>
          </form>
        </div>
      </div>
      <div className="bg-blue w-30"></div>
    </div>
  );
}

export default App;
