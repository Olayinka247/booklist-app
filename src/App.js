import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import WarningSign from "./component/WarningSign";
import MyBadge from "./component/MyBadge";

function App() {
  return (
    <div>
      <WarningSign text="Welcome To The Book List Store" />
      <MyBadge color="primary" info="Book Brand" />
    </div>
  );
}

export default App;
