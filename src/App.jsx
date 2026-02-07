import Header from "./components/Header";
import Footer from "./components/Footer";
import Course from "./components/Course";
import { Component } from "lucide-react";

class App extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <Course></Course>
        <Course></Course>
        <Course></Course>
        <Course></Course>

        <Footer></Footer>
      </div>
    );
  }
}

export default App;
