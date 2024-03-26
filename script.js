const btnDiv = document.createElement("button")
btnDiv.textContent = "Set Size"
btnDiv.style.cssText = "max-width:fit-content; margin:20px; border: 1px solid black; border-radius:10px;"
const marginSize = 0;

function createDivs(sideLength){
  const containerEl = document.querySelector(".container");
  containerEl.style.cssText = `width:400px; height:400px;`
  const boxSize = (containerEl.offsetWidth / sideLength) - 2 * marginSize;
  containerEl.innerHTML = '';
  
  for (let i=0; i<sideLength*sideLength; i++){
      const gridBox = document.createElement("div")
      gridBox.classList.add('gridBox');
      gridBox.style.cssText = `width:${boxSize}px; height:${boxSize}px; background-color:white; margin:${marginSize}px; box-sizing: border-box; border: 1px solid black;`;
      gridBox.addEventListener('mouseover', function(event) {
        const red = Math.floor(Math.random() * 256); // 0 to 255
        const green = Math.floor(Math.random() * 256); // 0 to 255
        const blue = Math.floor(Math.random() * 256); // 0 to 255
        event.target.style.backgroundColor = `rgb(${red},${green},${blue})`;
      });
      
      containerEl.appendChild(gridBox);
    }
    containerEl.style.display = 'grid';
    containerEl.style.gridTemplateColumns = `repeat(${sideLength}, 1fr)`;
  }

  btnDiv.addEventListener('click', function userNumber(){
  const numInput= prompt("Enter number between 1 and 100")
  const numValue = parseInt(numInput, 10);
  if (numValue !== null && numValue >=1 && numValue <=100){
      createDivs(numValue)
  }}
)
const wrapper = document.querySelector(".wrapper")
wrapper.insertAdjacentElement('afterbegin', btnDiv)
wrapper.style = "display: flex; align-items: center; flex-direction: column;"
