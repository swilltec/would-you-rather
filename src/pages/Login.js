import React, { Component } from "react";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export default class Login extends Component {
  render() {
    return (
      <>
        <Header page="login" />

        <main className="login mt-5">
          <div className="container">
            <div class="card text-center">
              <div class="card-header">
                <h2>Welcome to the Would You Rather App!</h2>
              </div>
              <div class="card-body">
                <h5 class="card-title">
                  Please pick an account below to sign in
                </h5>
                <div className="card-logo">
                  <i class="fas fa-question"></i>
                </div>
                <form className="mt-2">
                  <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1">
                      @
                    </span>
                    <select
                      class="form-select"
                      aria-label="Default select example"
                    >
                      <option selected>Please select a user</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>

                  <button className="btn btn-block btn-success">Sign in</button>
                </form>
              </div>
              <div class="card-footer text-muted"></div>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }
}
