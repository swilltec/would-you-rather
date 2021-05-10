import React, { Component } from "react";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export default class CreateQuestion extends Component {
  render() {
    return (
      <>
        <Header page="question" />

        <main className="mt-5">
          <div className="container">
            <div class="card">
              <div class="card-header text-center">Create A Question</div>
              <div className="card-body">
                <p className="card-text">Complete the question:</p>
                <strong>Would you rather.</strong>
                <form>
                  <div class="mt-3">
                    <input
                      type="email"
                      class="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                    />
                    <hr />
                    <p className="text-center m-0">OR</p>
                    <hr />
                  </div>
                  <div class="mb-3">
                    <input
                      type="password"
                      class="form-control"
                      id="exampleInputPassword1"
                    />
                  </div>

                  <button type="submit" class="btn btn-primary">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </>
    );
  }
}
