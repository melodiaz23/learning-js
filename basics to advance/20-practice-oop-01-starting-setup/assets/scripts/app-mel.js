const projects = document.querySelectorAll('.card');
const activeProjects = document.getElementById('active-projects'); 
const finishedProjects = document.getElementById('finished-projects');

class MoreInfoHandler {
  constructor(){
    this.cardCreated = {};
  }
  
  showElement(cardElement){
    this.element = document.body;
    this.element.appendChild(cardElement);
    
  }
  
  createElement(idx){
    if (!this.cardCreated[idx]){
      const cardElement = document.createElement('div');
      cardElement.className = 'card';
      cardElement.textContent = 'You are doing it sweetheart';
      cardElement.id = `card${idx}`;
      this.showElement(cardElement);
      this.cardCreated[idx] = true;
      this.cards(idx);
    }
  }
  
  
  cards(idx){
    const cardsCreated = document.getElementById(`card${idx}`);
    cardsCreated.addEventListener('click', () => {
      cardsCreated.remove();
      this.cardCreated[idx] = false;
    });
  }
  
}

class SecondButtonHandler {
  moveProject(secondButton){
    const moveButton = secondButton.closest('li');
    const finishDestinationElement = finishedProjects.querySelector('ul');
    const activeDestinationElement = activeProjects.querySelector('ul');

    if (secondButton.textContent === 'Finish'){
      secondButton.textContent = 'Activate';
      finishDestinationElement.appendChild(moveButton);
      return
    }
    if (secondButton.textContent === 'Activate'){
      secondButton.textContent = 'Finish';
      activeDestinationElement.appendChild(moveButton);
      return
    }
  }
}

const moreInfo = new MoreInfoHandler();
const moveProject = new SecondButtonHandler();

projects.forEach((element, idx) => {
  const moreInfoButton = element.querySelector('button:first-of-type');
  const secondButton = element.querySelector('button:last-of-type');
  
  moreInfoButton.addEventListener('click', () => {
    console.log(`you clicked on MORE INFO - ${idx}`);
    moreInfo.createElement(idx);
  });

  secondButton.addEventListener('click', () => {
    console.log(`you clicked on  FINISH - ${idx}`);
    moveProject.moveProject(secondButton);
  });
})


