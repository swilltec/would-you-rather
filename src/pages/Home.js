import React, { Component } from "react";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export default class Home extends Component {
  render() {
    return (
      <>
        <Header page="home" />
        <main className="ui middle aligned center aligned grid">
          <div className="column home">
            <div className="ui secondary pointing menu">
              <a className="item active">Unanswered Questions</a>
              <a className="item">Answered Questions</a>
            </div>
            <div className="ui segment">
              <div class="ui cards ">
                <div class="card">
                  <div class="content">
                    <div class="header">Elliot Fu</div>
                    <div class="description">
                      Elliot Fu is a film-maker from New York.
                      Elliot Fu is a film-maker from New York.
                      Elliot Fu is a film-maker from New York.
                      Elliot Fu is a film-maker from New York.
                    </div>
                  </div>
                  <div class="ui bottom attached button">
                    <i class="add icon"></i>
                    Add Friend
                  </div>
                </div>
                <div class="card">
                  <div class="content">
                    <div class="header">Veronika Ossi</div>
                    <div class="description">
                      Veronika Ossi is a set designer living in New York who
                      enjoys kittens, music, and partying.
                    </div>
                  </div>
                  <div class="ui bottom attached button">
                    <i class="add icon"></i>
                    Add Friend
                  </div>
                </div>
                
                <div class="card">
                  <div class="content">
                    <div class="header">Jenny Hess</div>
                    <div class="description">
                      Jenny is a student studying Media Management at the New
                      School
                    </div>
                  </div>
                  <div class="ui bottom attached button">
                    <i class="add icon"></i>
                    Add Friend
                  </div>
                </div>

                <div class="card">
                  <div class="content">
                    <div class="header">Jenny Hess</div>
                    <div class="description">
                      Jenny is a student studying Media Management at the New
                      School
                    </div>
                  </div>
                  <div class="ui bottom attached button">
                    <i class="add icon"></i>
                    Add Friend
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
