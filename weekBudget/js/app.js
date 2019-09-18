//Classes

class Budget {
    constructor (budget) {
        this.budget = Number (budget); //it should be number
        this.budgetLeft = this.budget //on start return typed budget for now
    }
}

//everxthing related to html
class HTML {
    //inserts the budget when user submits it
    insertBudget (amount) {
        //insert into html
        budgetTotal.innerHTML = `${amount}`;
        budgetLeft.innerHTML = `${amount}`;

    }

}



//Variables

const addExpenseForm = document.querySelector ('#add-expense');

const budgetTotal = document.querySelector ('span#total')//za Budget:

const budgetLeft = document.querySelector ('span#left')//za Left


let budget,      //global variables: available in all programme//calculated one through class
    userBudget;  //userBudget will be prompted on Load//typed one

const html = new HTML ();






//Event Listeners

eventListeners ();
function eventListeners () {

    //initial: want to show prompt window on Load
    document.addEventListener ('DOMContentLoaded', function () {
        //prompt the visitor about weekly budget
        userBudget = prompt ('What is your budget for this week?')
        //validate the user budget--make him to put number
        if (userBudget === null || userBudget === '' || userBudget === '0') { //1.cancel-reload; 2.ok-reload
            window.location.reload ()   //if no input reload again prompt      //3.no '0' allowed
        } else {
            //budget is validates so return budget class
            budget = new Budget (userBudget) //class is made object//its not const but let
            //return html class
            html.insertBudget (budget.budget); //will insert budget to html
            
        } 

    });

    //want to submit a form 
    addExpenseForm.addEventListener ('submit', function (e) { 
        e.preventDefault ();  //will fake a submission to another place


    })

}