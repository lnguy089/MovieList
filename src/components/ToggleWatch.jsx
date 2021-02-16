var toggleWatch = (key, addToWArr, addToUWArr, item) =>  {
  if(document.getElementById(`${key}`).innerHTML === 'watched') {
    document.getElementById(`${key}`).innerHTML = 'NOTWATCHED';
    addToUWArr(item);
  } else {
    document.getElementById(`${key}`).innerHTML = 'watched';
    addToWArr(item);
  }
}

export default toggleWatch