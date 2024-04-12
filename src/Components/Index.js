import React from "react";
import "./Index.css";
export default function Index() {
  return (
    <div className="index-container">
      <p>Welcome To TuneHub</p>
      <div className="form-group">
        <a href="login">
          <button>
            <b>LOGIN</b>
          </button>
        </a>
      </div>
      <div className="form-group">
        <a href="registration">
          <button>
            <b>REGISTER</b>
          </button>
        </a>
      </div>
    </div>
  );
}
