import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/computer-science-courses" component={ComputerScienceCourses} />
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
    <h1><font size="10">Risher Randall</font></h1>
    <p>
    <font size="4">
     Web Developer open for opportunities!
     </font></p>
    <img src={"https://avatars1.githubusercontent.com/u/38865506?s=400&u=c1c19a5b1ee87d7cb2b42cb2614e98edc519dfcc&v=4"} className="App-logo" alt="logo" />



    <p>
    <font size="4">
      I graduated from <a href="https://www.wlu.edu/physics-and-engineering-department" target="_blank" className="App-link">Washington and Lee</a> with an engineering major, and I have completed the software engineering immersive program at <a href="https://flatironschool.com/career-courses/coding-bootcamp/" className="App-link" target="_blank">The Flatiron School</a>.<br></br>
      I have also recently taken computer science courses at the <a href="https://www.mff.cuni.cz/en/admissions/programmes" className="App-link" target="_blank">Charles University</a> in Prague.
    </font>
    </p>

      <h3><Link to="/computer-science-courses" className="link">Computer Science Courses</Link></h3>
      <h3><Link to="/technical-skills" className="link">Technical Skills</Link></h3>
      <h3><Link to="/technical-projects" className="link">Technical Projects</Link></h3>
      <h3><Link to="/reading-list" className="link">Reading List</Link></h3>
      <h3><Link to="/interests" className="link">Interests</Link></h3>
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
       </a>

       <br></br>


        </font>
        </text>


      <br></br><br></br>



  </header>
</div>
  );
}


function ComputerScienceCourses() {
  return (
    <div className="App">
    <header className="App-header2">
      <h3>&emsp;Algorithms and Data Structures</h3>
      <text>
      <font size="4">
        &emsp;&emsp;&emsp;<strong>Textbook</strong> - <i>Introduction to Algorithms</i>, Cormen, Leiserson, Rivest and Stein<br></br>
        &emsp;&emsp;&emsp;<strong><a href="https://is.cuni.cz/studium/eng/predmety/index.php?id=66a585dc4e57b525f3fc8dd738e40192&tid=&do=predmet&kod=NTIN060&skr=2018" className="link" target="_blank">Syllabus</a></strong>
      </font>
      </text>
      <h3>&emsp;Computer Architecture</h3>
      <text>
      <font size="4">
        &emsp;&emsp;&emsp;<strong>Textbook</strong> - <i>Computer Orgainization and Design</i>, David A. Patterson and John L. Hennessy<br></br>
        &emsp;&emsp;&emsp;<strong><a href="https://d3s.mff.cuni.cz/teaching/nswi143" className="link" target="_blank">Syllabus</a></strong>
      </font>
      </text>
      <h3>&emsp;Programming II</h3>
      <text>
      <font size="4">
        &emsp;&emsp;&emsp;<strong>Textbook</strong> - <i>Essential C# 7.0 (6th Edition)</i>, Mark Michaelis<br></br>
        &emsp;&emsp;&emsp;<strong>Textbook</strong> - <i>Introduction to Algorithms</i>, Cormen, Leiserson, Rivest and Stein<br></br>

        &emsp;&emsp;&emsp;<strong><a href="https://ksvi.mff.cuni.cz/~dingle/2019/prog_ii/prog_ii.html" className="link" target="_blank">Syllabus</a></strong>
      </font>
      </text>
    </header>
</div>
  );
}


function TechnicalSkills() {
  return (
    <div className="App">
    <header className="App-header2">
    <h3>&emsp;Languages</h3>
    <text>
    <font size="4">
      &emsp;&emsp;&emsp;<strong>C#</strong> - intermediate<br></br>
      &emsp;&emsp;&emsp;<strong>JavaScript</strong> - intermediate<br></br>
      &emsp;&emsp;&emsp;<strong>Ruby</strong> - intermediate<br></br>
      &emsp;&emsp;&emsp;<strong>Java</strong> - beginner<br></br>
      &emsp;&emsp;&emsp;<strong>HTML + CSS</strong> - intermediate<br></br>


    </font>
    </text>
    <h3>&emsp;Frameworks</h3>
    <text>
    <font size="4">
      &emsp;&emsp;&emsp;React<br></br>
      &emsp;&emsp;&emsp;React-Redux<br></br>
      &emsp;&emsp;&emsp;React-Router<br></br>
      &emsp;&emsp;&emsp;Ruby on Rails<br></br>
      &emsp;&emsp;&emsp;Sinatra<br></br>
      </font>

    </text>
    <h3>&emsp;Tools</h3>
    <text>
    <font size="4">
      &emsp;&emsp;&emsp;Git<br></br>
      &emsp;&emsp;&emsp;JQuery <br></br>
      &emsp;&emsp;&emsp;Nokogiri<br></br>
      &emsp;&emsp;&emsp;Gnuplot <br></br>
    </font>

    </text>
    <h3>&emsp;Concepts</h3>
    <text>
    <font size="4">
      &emsp;&emsp;&emsp;Obejct Oriented Programming<br></br>
      &emsp;&emsp;&emsp;Asymptotic Notation and Big Omega<br></br>
      &emsp;&emsp;&emsp;RESTful Routing<br></br>
      &emsp;&emsp;&emsp;Database Architecture<br></br>
      &emsp;&emsp;&emsp;Software / Hardware Interface<br></br>
      </font>
    </text>


    <h3>&emsp;Other</h3>
    <text>
    <font size="4">
      &emsp;&emsp;&emsp;MatLab<br></br>
      &emsp;&emsp;&emsp;AutoDesk Inventer<br></br>
      &emsp;&emsp;&emsp;Wolfram Mathematica<br></br>
      </font>
    </text><br></br><br></br>
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
    <header className="App-header2">
      <h2>&emsp;Current</h2>
      <text>
      <font size="5">
        &emsp;&emsp;&emsp;Academic<br></br>
        </font>
      </text><br></br>
      <text>
      <font size="4">
        &emsp;&emsp;&emsp;&emsp;&emsp;MatLab<br></br>
        &emsp;&emsp;&emsp;&emsp;&emsp;AutoDesk Inventer<br></br>
        &emsp;&emsp;&emsp;Wolfram Mathematica<br></br>
        </font>
      </text><br></br>
      <h2>&emsp;Past</h2>
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


// <text>
// <font size="4">
//   Programming II • Algorithms and Data Structures • Computer Architecture<br></br>
//   </font>
//   </text>
