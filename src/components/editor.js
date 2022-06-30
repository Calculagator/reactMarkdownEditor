import { useDispatch } from "react-redux";
import { updateInput } from "../features/mdParser/mdParserSlice";

const Editor = (props) => {
  const dispatch = useDispatch();
  const { input } = props;

  return (
    <section className="input">
      <header>
        <h2>Enter your markdown here</h2>
      </header>
      <textarea
        id="editor"
        value = {input}
        onChange = {(event) => {
            dispatch(updateInput(event.target.value));
          }
        }>

      </textarea>
      
    </section>
  );
};

export default Editor;
