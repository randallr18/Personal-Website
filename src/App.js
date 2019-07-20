import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ScrollToTop from './ScrollToTop.js';


function App() {
  return (
    <Router>
      <ScrollToTop>
        <Route exact path="/" component={Home} />
        <Route path="/computer-science-courses" component={ComputerScienceCourses} />
        <Route path="/technical-skills" component={TechnicalSkills} />
        <Route path="/technical-projects" component={TechnicalProjects} />
        <Route path="/reading-list" component={ReadingList} />
        <Route path="/interests" component={Interests} />
        <Route path="/funny" component={Funny} />
      </ScrollToTop>
    </Router>
  );
}






//HOME PAGE HTML

function Home() {
  return (
    <div className="App">
      <header className="App-header">
      <br></br>
      <h1><font size="10">Risher Randall</font></h1>
        <p><font size="4">Web Developer open for opportunities!</font></p>
        <img src={"https://avatars1.githubusercontent.com/u/38865506?s=400&u=c1c19a5b1ee87d7cb2b42cb2614e98edc519dfcc&v=4"} className="App-logo" alt="logo" />
        <p><font size="4">
          I graduated from <a href="https://www.wlu.edu/physics-and-engineering-department" target="_blank" className="App-link">Washington and Lee</a> with an engineering major, and I have completed the software engineering immersive program at <a href="https://flatironschool.com/career-courses/coding-bootcamp/" className="App-link" target="_blank">The Flatiron School</a>.<br></br>
          I have also recently taken computer science courses at the <a href="https://www.mff.cuni.cz/en/admissions/programmes" className="App-link" target="_blank">Charles University</a> in Prague.
        </font></p>

      <h3><Link to="/computer-science-courses" className="link">Computer Science Courses</Link></h3>
      <h3><Link to="/technical-skills" className="link">Technical Skills</Link></h3>
      <h3><Link to="/technical-projects" className="link">Technical Projects</Link></h3>
      <h3><Link to="/reading-list" className="link">Reading List</Link></h3>
      <h3><Link to="/interests" className="link">Interests</Link></h3>

      <text>
      <br></br><br></br>
      <font size="5">
        <a className="App-link" href="https://github.com/randallr18" target="_blank"rel="noopener noreferrer">Github</a>&emsp;&emsp;&emsp;&emsp;&emsp;
        <a className="App-link" href="https://medium.com/@risher.randall" target="_blank" rel="noopener noreferrer">Blog</a>&emsp;&emsp;&emsp;&emsp;&emsp;
        <a className="App-link" href="https://www.linkedin.com/in/risher-randall-9b329a126/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      <br></br>
      </font>
      </text>

      <br></br><br></br>
      </header>
    </div>

  );
}

//Computer Science Courses Page HTML

function ComputerScienceCourses() {
  return (
    <div className="App">
    <header className="App-header2">

      <h3>&emsp;Algorithms and Data Structures</h3>
      <text><font size="4">
        &emsp;&emsp;&emsp;<strong>Textbook</strong> - <i>Introduction to Algorithms</i>, Cormen, Leiserson, Rivest and Stein<br></br>
        &emsp;&emsp;&emsp;<strong><a href="https://is.cuni.cz/studium/eng/predmety/index.php?id=66a585dc4e57b525f3fc8dd738e40192&tid=&do=predmet&kod=NTIN060&skr=2018" className="link" target="_blank">Syllabus</a></strong>
      </font></text>

      <h3>&emsp;Computer Architecture</h3>
      <text><font size="4">
        &emsp;&emsp;&emsp;<strong>Textbook</strong> - <i>Computer Orgainization and Design</i>, David A. Patterson and John L. Hennessy<br></br>
        &emsp;&emsp;&emsp;<strong><a href="https://d3s.mff.cuni.cz/teaching/nswi143" className="link" target="_blank">Syllabus</a></strong>
      </font></text>

      <h3>&emsp;Programming II</h3>
      <text><font size="4">
        &emsp;&emsp;&emsp;<strong>Textbook</strong> - <i>Essential C# 7.0 (6th Edition)</i>, Mark Michaelis<br></br>
        &emsp;&emsp;&emsp;<strong>Textbook</strong> - <i>Introduction to Algorithms</i>, Cormen, Leiserson, Rivest and Stein<br></br>
        &emsp;&emsp;&emsp;<strong><a href="https://ksvi.mff.cuni.cz/~dingle/2019/prog_ii/prog_ii.html" className="link" target="_blank">Syllabus</a></strong>

      </font></text>
    </header>
    </div>
  );
}

//Technical Skills Page html

function TechnicalSkills() {
  return (
    <div className="App">
    <header className="App-header2">

    <h3>&emsp;Languages</h3>
    <text><font size="4">
      &emsp;&emsp;&emsp;<strong>C#</strong> - intermediate<br></br>
      &emsp;&emsp;&emsp;<strong>JavaScript</strong> - intermediate<br></br>
      &emsp;&emsp;&emsp;<strong>Ruby</strong> - intermediate<br></br>
      &emsp;&emsp;&emsp;<strong>Java</strong> - beginner<br></br>
      &emsp;&emsp;&emsp;<strong>HTML + CSS</strong> - intermediate<br></br>
    </font></text>

    <h3>&emsp;Frameworks</h3>
    <text><font size="4">
      &emsp;&emsp;&emsp;React<br></br>
      &emsp;&emsp;&emsp;React-Redux<br></br>
      &emsp;&emsp;&emsp;React-Router<br></br>
      &emsp;&emsp;&emsp;Ruby on Rails<br></br>
      &emsp;&emsp;&emsp;Sinatra<br></br>
    </font></text>

    <h3>&emsp;Tools</h3>
    <text><font size="4">
      &emsp;&emsp;&emsp;Git<br></br>
      &emsp;&emsp;&emsp;JQuery <br></br>
      &emsp;&emsp;&emsp;Nokogiri<br></br>
      &emsp;&emsp;&emsp;Gnuplot <br></br>
    </font></text>

    <h3>&emsp;Concepts</h3>
    <text><font size="4">
      &emsp;&emsp;&emsp;Obejct Oriented Programming<br></br>
      &emsp;&emsp;&emsp;Algorithms and Data Structures<br></br>
      &emsp;&emsp;&emsp;Asymptotic Notation and Big Omega<br></br>
      &emsp;&emsp;&emsp;RESTful Routing<br></br>
      &emsp;&emsp;&emsp;Database Architecture<br></br>
      &emsp;&emsp;&emsp;Software / Hardware Interface<br></br>
      &emsp;&emsp;&emsp;Mathematical Proofs<br></br>
      </font></text>


    <h3>&emsp;Other</h3>
    <text><font size="4">
      &emsp;&emsp;&emsp;MatLab<br></br>
      &emsp;&emsp;&emsp;AutoDesk Inventer<br></br>
      &emsp;&emsp;&emsp;Wolfram Mathematica<br></br>
    </font></text>

    <br></br><br></br>
    </header>
    </div>
  );
}

//Technical Projects page HTML

function TechnicalProjects() {
  return (
    <div className="App">
    <header className="App-header2">

      <a href="https://github.com/randallr18/Flatbook-3.0" target="_blank" className="link"><h2>&emsp;Flatbook</h2></a>
      <text><font size="4">
        &emsp;&emsp;&emsp;A confined network designed to propel Flatiron students' careers as software engineers. Ruby on Rails backend, React - Redux frontend.<br></br>
      </font></text><br></br>

      <a href="https://github.com/randallr18/Sorting-Algorithm--Analysis" target="_blank" className="link"><h2>&emsp;Sorting Algorithm Analysis</h2></a>
      <text><font size="4">
        &emsp;&emsp;&emsp;Analyzing the run time of bubble, insertion, quick, merge and radix sort. C#.<br></br>
      </font></text><br></br>

      <a href="https://github.com/randallr18/World_Cup" target="_blank" className="link"><h2>&emsp;Fifa World Cup</h2></a>
      <text><font size="4">
        &emsp;&emsp;&emsp;A command line application which provided up to data statistics on the 2018 Fifa World Cup. Sinatra, SQL, Fifa API.<br></br>
        </font></text>

    <br></br>
    </header>
    </div>
  );
}

//Reading List page HTML


function ReadingList() {
  return (
    <div className="App">
    <header className="App-header2">

      <h2>&emsp;Current</h2>

      <text><font size="5">
        &emsp;&emsp;&emsp;<u>Academic</u><br></br>
      </font></text><br></br>
      <text><font size="4">
        &emsp;&emsp;&emsp;&emsp;&emsp;<i>Learning React</i> - Alex Banks & Eve Porcello<br></br>
        &emsp;&emsp;&emsp;&emsp;&emsp;<i>Version Control with Git</i> - Jon Loeliger & Matthew McCullough <br></br>
        &emsp;&emsp;&emsp;&emsp;&emsp;<i>Eloquent JavaScript</i> - Marijn Haverbeke<br></br>
        &emsp;&emsp;&emsp;&emsp;&emsp;<i>The Full Stack Developer</i> - Chris Northwood<br></br>
        </font></text><br></br>

      <text><font size="5">
        &emsp;&emsp;&emsp;<u>Leisure</u><br></br>
      </font></text><br></br>
      <text><font size="4">
        &emsp;&emsp;&emsp;&emsp;&emsp;<i>How The Mind Works</i> - Stephen Pinker<br></br>
      </font></text><br></br>

      <h2>&emsp;Past</h2>

      <text><font size="5">
        &emsp;&emsp;&emsp;<u>Academic</u><br></br>
      </font></text><br></br>
      <text><font size="4">
        &emsp;&emsp;&emsp;&emsp;&emsp;<i>Intoduction to Algorithms</i> - Cormen, Leiserson, Rivest and Stein<br></br>
        &emsp;&emsp;&emsp;&emsp;&emsp;<i>Essential C# 7.0 (6th Edition)</i> - Mark Michaelis<br></br>
        &emsp;&emsp;&emsp;&emsp;&emsp;<i>Computer Orginization and Design</i> - David A. Patterson and John L. Hennessy<br></br>
      </font></text><br></br>

      <text><font size="5">
        &emsp;&emsp;&emsp;<u>Leisure</u><br></br>
      </font></text><br></br>
      <text><font size="4">
        &emsp;&emsp;&emsp;&emsp;&emsp;<i>Deep Work</i>, Cal Newport<br></br>
        &emsp;&emsp;&emsp;&emsp;&emsp;<i>Hillbilly Elegy</i>, J.D. Vance<br></br>
        &emsp;&emsp;&emsp;&emsp;&emsp;<i>Anna Karenina</i> - Leo Tolstoy<br></br>
        &emsp;&emsp;&emsp;&emsp;&emsp;<i>The Perfect Pass</i> - S. C. Gwynne<br></br>
        &emsp;&emsp;&emsp;&emsp;&emsp;<i>Homo Deus</i> - Yuval Noah Harari<br></br>
        &emsp;&emsp;&emsp;&emsp;&emsp;<i>Why We Sleep</i> - Matthew Walker<br></br>
        &emsp;&emsp;&emsp;&emsp;&emsp;<i>The Sun & The Moon & The Rolling Stones</i> - Rich Cohen<br></br>
        &emsp;&emsp;&emsp;&emsp;&emsp;<i>Rebel Yell</i> - S. C. Gweynne<br></br>
        &emsp;&emsp;&emsp;&emsp;&emsp;<i>The Defining Decade</i> - Meg Jay<br></br>
      </font></text><br></br>

    </header>
    </div>
  );
}


//Interests Page HTML

function Interests() {
  return (
    <div className="App">
    <header className="App-header2">

    <text><font size="5"><br></br>
      &emsp;&emsp;<strong>Tennis</strong><br></br><br></br>
      &emsp;&emsp;<strong>Chess</strong><br></br><br></br>
      &emsp;&emsp;<strong>Bridge</strong><br></br><br></br>
      &emsp;&emsp;<strong>Meditation</strong><br></br><br></br>
      &emsp;&emsp;<strong>Houston Texans</strong><br></br><br></br>
      &emsp;&emsp;<strong>Houston Rockets</strong><br></br><br></br>
      &emsp;&emsp;<strong><u><Link to="/funny" className="link">Funny</Link></u></strong><br></br><br></br>
    </font></text>

    </header>
    </div>
  );
}


//Funny page HTML

function Funny() {
  return (
    <div className="App">
    <header className="App-header2">

    <text><font size="5"><br></br>
      &emsp;&emsp;<strong>Semi-Pro</strong><br></br><br></br>
      &emsp;&emsp;&emsp;<img src={"https://a.ltrbxd.com/resized/sm/upload/q9/18/dx/j2/semi-pro-1200-1200-675-675-crop-000000.jpg?k=d900340c96"} height="270" width="440"/><br></br><br></br>
      &emsp;&emsp;<strong><a href="https://www.youtube.com/watch?v=6FeujTA15n0" target="_blank" className="link">https://www.youtube.com/watch?v=6FeujTA15n0</a></strong><strong></strong><br></br><br></br>
      &emsp;&emsp;<strong><a href="https://www.youtube.com/watch?v=t4N93jLVPIA" target="_blank" className="link">https://www.youtube.com/watch?v=t4N93jLVPIA</a></strong><strong></strong><br></br><br></br>
      &emsp;&emsp;<strong><a href="https://www.youtube.com/watch?v=Vhh_GeBPOhs" target="_blank" className="link">https://www.youtube.com/watch?v=Vhh_GeBPOhs</a></strong><strong></strong><br></br><br></br>
    </font></text>

    </header>
    </div>
  );
}

export default App;
