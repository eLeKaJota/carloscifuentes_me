import {Route} from "wouter"
import './App.css';
import Header from "./components/Header.js"
import NavBar from "./components/NavBar.js"
import Content from "./components/Content.js"
import Footer from "./components/Footer.js"
import Home from "./components/Home.js"
import Chart from "./components/Chart";

function App() {

  return (
    <div className="App">
		<Header />
		<NavBar />

		<Route path="/">
			<div id="content">
				<Home/>
			</div>
		</Route>
		<Route component={Chart} path="/chart/:event/:num/:category">
			{/*{params => <Chart event={event} num={num} category={category}/>}*/}
		</Route>
		<Route component={Content} path="/:page" />

		
		<Footer />
    </div>
  );
}

export default App;
