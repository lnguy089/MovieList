import toggleWatch from './ToggleWatch.js';
var movieTitlesList = (props) => (
  <div className="ls">
    {props.item.title}
    <button id={props.num} onClick={(event) => {
      event.preventDefault();
      toggleWatch(props.num, props.addToWArr, props.addToUWArr, props.item);
      // props.addToWArr(props.item);
    }}>NOTWATCHED</button>
  </div>
  // <div> hi</div>
);

export default movieTitlesList;