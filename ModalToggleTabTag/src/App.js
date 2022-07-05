import "./styles.css";
import { Modal } from "./Modal";
import { Toggle } from "./Toggle";
import { Tab } from "./Tab";
import { Tag } from "./Tag";

export default function App() {
  return (
    <div className="App">
      <h1>React Practice</h1>
      <h2>Have fun with Modal :)</h2>
      <Modal />
      <h2>Voilà, c'est la fête de Toggle :)</h2>
      <Toggle />
      <h2>Let's get the TAB started</h2>
      <Tab />
      <h2>One last Tag</h2>
      <Tag />
    </div>
  );
}
