import React, { Component } from "react";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export default class Poll extends Component {
  render() {
    return (
      <>
        <Header />

        <main className="mt-5">
          <div className="container">
            <div class="card" style={{maxWidth: "540px"}}>
              <div class="card-header text-center">User ask</div>
              <div class="row g-0">
                <div className="col-4 pt-1">
                  <img
                    src="https://randomuser.me/api/portraits/women/52.jpg"
                    alt="..."
                  />
                </div>
                <div className="col-8">
                  <div class="card-body">
                    <form>
                      would you rather
                      <div className="">
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                          />
                          <label
                            class="form-check-label"
                            for="flexRadioDefault1"
                          >
                            Default radio

                          </label>
                        </div>
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault2"
                          />
                          <label
                            class="form-check-label"
                            for="flexRadioDefault2"
                          >
                            Default checked radio
                          </label>
                        </div>
                      </div>
                      <button href="#" class="btn btn-primary">
                        Submit
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </>
    );
  }
}
