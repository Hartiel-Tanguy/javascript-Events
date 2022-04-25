let main = document.querySelector('main')
let section1 = main.children[0]

const _initTime = Date.now()

const getElapsedTime = () => {
  return Number((Date.now() - _initTime) / 1000).toFixed(2) + 's'
}
const clickOnSquare = (e) => {

    let newDiv = document.createElement('div');
    section1.appendChild(newDiv);
    newDiv.className='displayedsquare';

    let name = e.target.classList[1];

    let ul = document.querySelector('ul')

    let li = document.createElement('li');
      ul.appendChild(li)
    li.innerHTML= `${getElapsedTime()} created a new ${name} square` ;
    
    if(e.target.classList.contains('violet')) 
        return newDiv.style.backgroundColor = 'magenta';
    
   if(e.target.classList.contains('orange')) 
        return newDiv.style.backgroundColor = 'orange';
    
    if(e.target.classList.contains('green')) 
        return newDiv.style.backgroundColor = 'lime';
    
}
const actionSquares = document.querySelectorAll('.actionsquare')
for (let actionSquare of actionSquares) {
  actionSquare.addEventListener('click', clickOnSquare)
}


