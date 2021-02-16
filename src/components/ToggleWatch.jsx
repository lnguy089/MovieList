var toggleWatch = (key, addToWArr, addToUWArr, removeFromW, removeFromUW, item) =>  {
  if(document.getElementById(`${key}`).innerHTML === 'watched') {
    document.getElementById(`${key}`).innerHTML = 'NOTWATCHED';
    removeFromW(key);
    addToUWArr(item);
  } else {
    document.getElementById(`${key}`).innerHTML = 'watched';
    console.log(key);
    removeFromUW(key);
    addToWArr(item);

  }
}

export default toggleWatch