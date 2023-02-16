import React from "react";
import "./Project.css";

function Project() {
  return (
    <div className="bg-dark w-100 projects">
      <div className="container">
        <h3 className="px-5 pt-5 text-white">
          <span>03. </span>My Projects
        </h3>
        <div class="row row-cols-1 row-cols-md-3 g-4 p-5">
          <div class="col">
            <div class="card">
              <img src={require("../Images/PTconnect.jpg")} class="card-img-top" alt="PTconnect" />
              <div class="card-body">
                <h5 class="card-title">PTconnect</h5>
                <p class="card-text">
                  A booking application for Physical therapist looking to grow their clientel in NYC. 
                  PTconnect holds a database of providers all over nyc. Providing users 
                  access to top professionals that meet their needs. 

                </p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img src={require("../Images/comingSoon.png")} class="card-img-top" alt="Project 2" />
              <div class="card-body">
                <h5 class="card-title">Coming soon</h5>
                <p class="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img src={require("../Images/comingSoon.png")} class="card-img-top" alt="Project 3" />
              <div class="card-body">
                <h5 class="card-title">Coming soon</h5>
                <p class="card-text">
                This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
