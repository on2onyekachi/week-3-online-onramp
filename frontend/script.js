const selectChoice = document.querySelectorAll("span");
const showSelect = document.querySelector(".showSelect");
const showAnswer = document.querySelector(".showAnswer");

selectChoice.forEach( button => {
    button.addEventListener('click', (e) => {
        switch(e.target.innerText){
            case 'C':
                showAnswer.innerText = '';
                showSelect.innerText = ''
                break;
            case '=':
                try{
                    showAnswer.innerText = eval(showSelect.innerText);
                } catch {
                    showSelect.innerText = "Error"
                }
                break;
            case '←':
                if (showSelect.innerText){
                   showSelect.innerText = showSelect.innerText.slice(0, -1);
                }
                break;
            default:
                showSelect.innerText += e.target.innerText;
        }
    });
});
