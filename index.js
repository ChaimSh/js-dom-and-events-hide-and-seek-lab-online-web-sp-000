function getFirstSelector(s){
   return document.querySelector( s )
}

function nestedTarget() {
  return document.querySelector( '#nested .target ' )
}

// function increaseRankBy(n) {
//   const rankedLists = document.querySelectorAll('.ranked-list ')
//
//   for (let i = 0, l = rankedLists.length; i < l; i++) {
//     let children = rankedLists[i].children
//
//     for (let j = 0, k = children.lenght; j < k, j++) {
//       children[j].innerHTML = parseInt( children[j].innerHTML ) + n
//     }
//   }
// }
function increaseRankBy(){
  const rankedLists = document.querySelectorAll('.ranked-list ')

  for ( let i = 0, l = rankedLists.length; i < l; i++ ) {
      let children = rankedLists[i].children
  }
}
