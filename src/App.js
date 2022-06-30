import "./styles.css";
import Editor from "./components/editor";
import Preview from "./components/preview";
import { useDispatch,useSelector } from "react-redux";
import { mdParse } from "./features/mdParser/mdParserSlice";
import { useEffect } from "react";


const App = () => {
  const dispatch = useDispatch();
  const {mdInput,mdOutput} = useSelector(state => state.mdParser);

  useEffect(() => {
    dispatch(mdParse())
  },[dispatch,mdInput]);

  return (
    <div className="App">
      <Editor  input={mdInput}/>
      <Preview output={mdOutput} />
    </div>
  );
};

export default App;