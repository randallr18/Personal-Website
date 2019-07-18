import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/technical-skills" component={TechnicalSkills} />
        <Route path="/technical-projects" component={TechnicalProjects} />
        <Route path="/reading-list" component={ReadingList} />
        <Route path="/interests" component={Interests} />
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div className="App">
  <header className="App-header">
    <br></br>
    <h1><font size="10">Risher Randall III</font></h1>
    <p>
    <font size="4">
     Web Developer open for opportunities!
     </font></p>
    <img src={"https://avatars1.githubusercontent.com/u/38865506?s=400&u=c1c19a5b1ee87d7cb2b42cb2614e98edc519dfcc&v=4"} className="App-logo" alt="logo" />



    <p>
    <font size="4">
      I graduated from <a href="https://www.wlu.edu/physics-and-engineering-department">Washington and Lee</a> with an engineering major, and I have completed the software engineering immersive program at <a href="https://flatironschool.com/career-courses/coding-bootcamp/">The Flatiron School</a>.<br></br>
      I have also recently taken computer science courses at the <a href="https://www.mff.cuni.cz/en/admissions/programmes">Charles University</a> in Prague.
    </font>
    </p>


    <h2>Computer Sciences Courses</h2>
    <text>
    <font size="4">
      Programming II • Algorithms and Data Structures • Computer Architecture<br></br>


      </font>
      </text>
      <h2><Link to="/technical-skills">Technical Skills</Link></h2>
      <h2><Link to="/technical-projects">Technical Projects</Link></h2>
      <h2><Link to="/reading-list">Reading List</Link></h2>
      <h2><Link to="/interests">Interests</Link></h2>
      <text>
      <br></br><br></br>
      <font size="5">
      <a
        className="App-link"
        href="https://github.com/randallr18"
        target="_blank"
        rel="noopener noreferrer"
      >
        Github
      </a> &emsp;&emsp;&emsp;&emsp;&emsp;
      <a
        className="App-link"
        href="https://medium.com/@risher.randall"
        target="_blank"
        rel="noopener noreferrer"
      >
        Blog
      </a>&emsp;&emsp;&emsp;&emsp;&emsp;

       <a
         className="App-link"
         href="https://www.linkedin.com/in/risher-randall-9b329a126/"
         target="_blank"
         rel="noopener noreferrer"
       >
         LinkedIn
       </a><br></br>


        </font>
        </text>


      <br></br><br></br>



  </header>
</div>
  );
}

function TechnicalSkills() {
  return (
    <div className="App">
    <header className="App-header">
      <h2>Languages</h2>
      <h2>Frameworks</h2>
      <h2>Tools</h2>
    </header>
</div>
  );
}

function TechnicalProjects() {
  return (
    <div className="App">
    <header className="App-header">
      <h2>Flatbook</h2>
      <h2>Sorting Algorithm Analysis</h2>
      <h2>Fifa World Cup</h2>
    </header>
</div>
  );
}


function ReadingList() {
  return (
    <div className="App">
    <header className="App-header">
      <h2>Current</h2>
      <h2>Past</h2>
    </header>
</div>
  );
}

function Interests() {
  return (
    <div className="App">
    <header className="App-header">
      <h2>Chess</h2>
      <h2>Bridge</h2>
    </header>
</div>
  );
}




export default App;



// <div className="App">
//   <header className="App-header">
//     <img src={logo} className="App-logo" alt="logo" />
//     <p>
//       Edit <code>src/App.js</code> and save to reload.
//     </p>
//     <a
//       className="App-link"
//       href="https://reactjs.org"
//       target="_blank"
//       rel="noopener noreferrer"
//     >
//       Learn React
//     </a>
//   </header>
// </div>


// <Route path="/topics" component={Topics} />
