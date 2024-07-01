import s from "./App.module.css";
import { Calculator } from "./components/Calculator";
export function App() {
  return <div className={s.root}>Let's test :)
    <Calculator defaultA={3} defaultB={2} defaultOperator={"+"} />
  </div>;
}