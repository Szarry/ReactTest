import "./App.css";
// import {Header} from "./Header";
import Header from "./Header";
import FullWidthTextField from "./Searchbar";

function App() {
    return (
        <div className="App">
            <Header/>
            <div className="center-container">
                <FullWidthTextField/>
            </div>
        </div>
    );
}

export default App;
