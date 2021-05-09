import React, { Component } from "react";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export default class Home extends Component {
  render() {
    return (
      <>
        <Header page="home" />
        <main className="home">
          <div className="container mt-5">
            <div className="card p-2">
              <nav className="">
                <div class="nav nav-tabs" id="nav-tab" role="tablist">
                  <button
                    class="nav-link active"
                    id="nav-answered-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-answered"
                    type="button"
                    role="tab"
                    aria-controls="nav-answered"
                    aria-selected="true"
                  >
                    Answered
                  </button>
                  <button
                    class="nav-link"
                    id="nav-unanswered-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-unanswered"
                    type="button"
                    role="tab"
                    aria-controls="nav-unanswered"
                    aria-selected="false"
                  >
                    Unanswered
                  </button>
                </div>
              </nav>
              <div class="tab-content mt-2" id="nav-tabContent">
                <div
                  class="tab-pane fade show active"
                  id="nav-answered"
                  role="tabpanel"
                  aria-labelledby="nav-answered-tab"
                >
                  <div class="card">
                    <div class="card-header text-center">User ask</div>
                    <div class="row g-0">
                      <div className="col-3 pt-1">
                        <img
                          src="https://randomuser.me/api/portraits/women/52.jpg"
                          alt="..."
                        />
                      </div>
                      <div className="col-8 offset-1">
                        <div class="card-body">
                         
                          <p class="card-text">
                            With supporting text below as a natural lead-in to
                            additional content.
                          </p>
                          <a href="#" class="btn btn-primary">
                            View Poll
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="tab-pane fade"
                  id="nav-unanswered"
                  role="tabpanel"
                  aria-labelledby="nav-unanswered-tab"
                >
                  ...
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
