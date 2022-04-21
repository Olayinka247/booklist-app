import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import WarningSign from "./component/WarningSign";
import MyBadge from "./component/MyBadge";
import BookList from "./component/BookList";
import fantasy from "./data/Fantasy.json";

function App() {
  return (
    <div>
      <WarningSign text="Welcome To The Book List Store" />
      <MyBadge color="success" info="Book Brand" />
      <BookList books={fantasy} />
    </div>
  );
}

export default App;
