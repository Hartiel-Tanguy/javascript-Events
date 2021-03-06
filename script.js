let main = document.querySelector('main')
let section1 = main.children[0]

const _initTime = Date.now()

const getElapsedTime = () => {
  return Number((Date.now() - _initTime) / 1000).toFixed(2) + 's'
}

/*exercise 1*/
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
/*exercise 2*/
let body = document.querySelector('body')
function generateRandomColorRgb() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  return "rgb(" + red + ", " + green + ", " + blue + ")";
}

body.addEventListener('keyup',(event) =>{
    if(event.code ==='Space'){
      body.style.backgroundColor=generateRandomColorRgb();
      let log = event.target.style.backgroundColor;
      let ul = document.querySelector('ul')
      let li = document.createElement('li');
      ul.appendChild(li);
      li.innerHTML= getElapsedTime() + " created a new " +log + " square" 
    }
    })



    /*exercise 3*/

    function supall(parent) {
        while (parent.firstChild) {
          parent.removeChild(parent.firstChild);
        }
      }
      
      
      body.addEventListener('keyup',(e) =>{
        if(e.key === "l"){
           
           let liul = document.querySelector('ul')
          
           supall(liul)
          
        }
      })
      /*exercise 4*/

      body.addEventListener('keyup', (e) =>{
        if(e.key === "s"){
          supall(section1)
        }
      })
      /*exercise5*/


