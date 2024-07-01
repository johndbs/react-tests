import s from "./App.module.css";
import { Calculator } from "./components/Calculator";
import { RandomUser } from "./components/RandomUser";
export function App() {
  return <div className={s.root}>Let's test :)
    {/* <Calculator defaultA={3} defaultB={2} defaultOperator={"+"} /> */}

    <RandomUser/>
  </div>;
}