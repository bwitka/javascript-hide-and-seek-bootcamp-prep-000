//returns the first element that matches the selector:
function getFirstSelector(selector) {
  return document.querySelector(selector);
}

//pulls a .target out of #nested:
function nestedTarget() {
  return document.getElementById('nested').querySelector('.target');
}

//returns the most deeply nested child in #grand-node:
function deepestChild() {
  let stringOfDivs = document.querySelectorAll('#grand-node div');
  return stringOfDivs[stringOfDivs.length - 1];
}

//increases ranks in .ranked-list by n:
function  increaseRankBy(n) {
  const ranks = document.getElementById('app').querySelectorAll('ul.ranked-list li');
  for (let i = 0; i < ranks.length; i++) {
    ranks[i].innerHTML = parseInt(ranks[i].innerHTML) + n;
  }
}