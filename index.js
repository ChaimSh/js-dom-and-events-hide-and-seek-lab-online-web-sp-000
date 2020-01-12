function getFirstSelector(s){
   return document.querySelector( s )
}

function nestedTarget() {
  return document.querySelector( '#nested .target ' )
}

function increaseRankBy(n) {
  const rankedLists = document.querySelectorAll('.ranked-list ')

  for (let i = 0, i < rankedLists.length, i++) {
    rankedLists[i].innerHTML =(i + 1).toString()
  }
}
