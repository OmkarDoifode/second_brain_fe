import "./App.css";
import { Button } from "./components/Button";
import { ContentCard } from "./components/ContentCard";
import { PlusIcon } from "./icons/plusIcon";
import { ShareIcon } from "./icons/shareIcon";
import { Sidebar } from "./components/Sidebar";
import { Logo } from "./icons/logo";

function App() {
  return (
    <div>
      {/* <Sidebar logo={<Logo/>}/> */}
      <Button type="primary" title="hello" startIcon={<ShareIcon/>}/>
    </div>
  );
}

export default App;
