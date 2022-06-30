import { useDispatch } from "react-redux";
import parse from 'html-react-parser';


const Preview = (props) => {
  const dispatch = useDispatch();
  const { output } = props;

  return (
    <section className="output">
      <header>
        <h4>Wow! Output!</h4>
      </header>
      <div id="preview">
        { parse(output) }
      </div>
      
    </section>
  );
};

export default Preview;
