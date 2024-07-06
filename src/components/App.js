import React from "react";

// Two components, <Navbar> and <Home>, are already defined in the App.js file. Add both of these components as child components of <App> by including them in the return statement for the App function.

function NavBar() {
  return (
    <nav>
      <a href="#home">I'm a link!</a> 
    </nav>
  );
}

function Home() {
  return (
    <div id="home">
      <h1>Home</h1>
    </div>
  );
}

{/* write an <About> component here */}
function About(){
  return (
    <div id="about">
       <h2>About</h2>
    </div>
  )
}

function App() {
  
  return (
    <div>
{/* Making Children */}
      <NavBar /> 
      <Home /> 
      <About /> 
    </div>
  );
}

export default App;
