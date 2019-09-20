//Classes

class Budget {
    constructor (budget) {
        this.budget = Number (budget); //it should be number//its let-changes
        this.budgetLeft = this.budget //on start return typed budget for now//its html const
    }
}

//everything related to html
class HTML {
    //inserts the budget when user submits it
    insertBudget (amount) {
        //insert into html
        budgetTotal.innerHTML = `${amount}`;
        budgetLeft.innerHTML = `${amount}`;

    }

    //Prints a message (correct or invalid)
    printMessage (message, className) {
        const messageWrapper = document.createElement ('div');
        messageWrapper.classList.add ('text-center', 'alert', className);//adds 3 classes in div-to show text in center, alert and content
        messageWrapper.appendChild (document.createTextNode (message));

        //insert into HTML
        document.querySelector ('.primary').insertBefore(messageWrapper, addExpenseForm);

        //Clera the error
        setTimeout (function () {
            document.querySelector ('.primary .alert').remove()
        },3000) ;

    }

        //dsiplays the expenses in the Form (left) to List (right)
    addExpensetoList (expenseName,expenseAmount) {
        const expensesList = document.querySelector ('#expenses ul'); //ul u html
                //create li
                const li = document.createElement ('li');
                li.className = "list-group-item d-flex justify-content-between align-items-center"

                //create template
                    li.innerHTML = `
                        ${expenseName}
                        <span class="badge badge-primary badge-pill">€ ${expenseAmount}</span> 
                    `

                //insert to HTML
                expensesList.appendChild (li);
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
        e.preventDefault ();
        //Read the values from the budget form (left:Name+Amount)
        const expenseName = document.querySelector ('#expense').value; //to access it
        const expenseAmount = document.querySelector ('#amount').value;

        if (expenseName === '' || expenseAmount === '') {
            //console.log ('Invalid!');
            html.printMessage ('There was error, all fields are mandatory!', 'alert-danger') //class in bootstrap
        } else {
            //console.log ('Correct!');
            //Add the expenses in the List
            html.addExpensetoList (expenseName , expenseAmount)

        }

    })

}