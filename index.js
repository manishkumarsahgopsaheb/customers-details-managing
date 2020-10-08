

function Hotel(room_no, customer_name, amount_paid) {

    let container_div = document.querySelector(".container");
    
    container_div.innerHTML += `<div><p>details of  ${customer_name} is: </p><p>room no is : ${room_no}, 
    cutomer name is: ${customer_name}, amount paid is: ${amount_paid}</p><br></div>`
    
}



let rooms_list = [];
let customer_list = [];
let amount_list = [];

function user_input() {
    window.alert("welcome to Hotel management prompt")
    while (true) {
        let choice = window.prompt("press n for next customer")
        if(choice == "n")
        {
            let customer_name = window.prompt("your name is: ");
            let room_no = window.prompt("your room number is: ");
            let amount_paid = window.prompt("paid amount is: ");

            customer_list.push(customer_name);
            rooms_list.push(room_no);
            amount_list.push(amount_paid);
        }
        else
        {
            window.alert("you existed from the program");
            break;
        }
    }
}

user_input();

function details(room_no, customer_name, amount_paid) {

    let container2_div = document.querySelector(".container2");
    
    container2_div.innerHTML += `<div><p>details of  ${customer_name} is: </p><p>room no is : ${room_no}, 
    cutomer name is: ${customer_name}, amount paid is: ${amount_paid}</p><br></div>`
    
}


function showing_all_customer(){
    for(let i=0; i<rooms_list.length;i++)
    {
        details(rooms_list[i], customer_list[i], amount_list[i])
    }
}

for (let i = 0; i < rooms_list.length; i++) {
    if (rooms_list[i] % 2 == 0)
        Hotel(rooms_list[i], customer_list[i], amount_list[i])
}


