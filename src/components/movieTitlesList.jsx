// import toggleWatch from './ToggleWatch.js';
var movieTitlesList = (props) => {
  var toggleWatch = (key, addToWArr, addToUWArr, removeFromW, removeFromUW, item) =>  {
    if(document.getElementById(`${key}`).innerHTML === 'W') {
      document.getElementById(`${key}`).innerHTML = 'NW';
      console.log(document.getElementById(`${key}`).innerHTML);
      removeFromW(key);
      addToUWArr(item);
    } else if(document.getElementById(`${key}`).innerHTML === 'NW') {
      document.getElementById(`${key}`).innerHTML = 'W';
      removeFromUW(key);
      addToWArr(item);
    }
  }
  //function
  return (
  <div className="ls">
    <div>
      Title:{props.item.title}
    </div>
    <div>
    Release: {props.item.date}
    </div>
    <div>
    Id: {props.item.id}
    </div>
    <img src={props.item.picture}></img>
    <button className='round' id={props.num} onClick={(event) => {
      event.preventDefault();
      toggleWatch(props.num, props.addToWArr, props.addToUWArr, props.removeFromW, props.removeFromUW, props.item);
    }}>NW</button>
  </div>
  // <div> hi</div>
  )
};

export default movieTitlesList;