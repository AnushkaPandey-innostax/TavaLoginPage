import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function Modal() {
   return (
        <>
        <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
          <div className="card" style={{ width: "30rem", borderColor:"blue" }}>
            <div className="card-body">
              <h1 className="card-title" style ={{ color : "blue"}}>TAVA</h1>
              <h3 className="card-subtitle mb-2 text-body-secondary">Reset Password</h3>
              <p className="card-text">Hi Sandy</p>

              <p>you are receiving this email because you have (or someone pretending to be you has) requested a new password be sent for your account on Tava. </p>
              <p> If you did not request this email then please ignore it. If you keep receiving it, please contact your administrator. 
              </p>
              <p>Reset your passward by selecting the button below.</p>
              <button type="button" className="btn btn-primary">
                  Reset Password
              
              </button>
              <p class="card-text"><small class="text-body-secondary">2024 Innostax. All rights reserved.</small></p>

            </div>
          </div>
        </div>

        </>
      );
}

export default Modal;
