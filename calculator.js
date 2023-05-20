button_list = document.querySelectorAll(".txt")
button_list.forEach(button_click);

function button_click(val) {   //adding event listner to each button 
    val.addEventListener('click', () => {
        let symbol = val.innerHTML;
        let prev = document.querySelector('.ot').value;

        if (symbol == 'AC') {
            document.querySelector('.ot').value = '';
        }
        else if (symbol == 'X') {
            document.querySelector('.ot').value = prev.slice(0, prev.length - 1);
        }
        else if (symbol == "=") {
            try {
                let newnode = document.createElement('li');
                newnode.innerText=`${prev} = ${eval(prev)}`;
                let list = document.querySelector('.anslist');
                if (list.children.length == 0) {
                    document.querySelector('.ot').value = eval(prev);
                    list.appendChild(newnode);
                } else {
                    list.insertBefore(newnode, list.children[0]);
                    document.querySelector('.ot').value = eval(prev);
                }

            } catch (error) {
                document.querySelector('.ot').value = "";
                alert("Invaild expression")
            }

        }
        else {
            document.querySelector('.ot').value = prev + symbol;
        }

    });
}

document.addEventListener('keydown', evt => { //adding event listner to each keypress
    let key = evt.key;
    let prev = document.querySelector('.ot').value;
    if (key === 'Delete') {
        document.querySelector('.ot').value = '';
    }
    else if (key == 'Backspace') {
        document.querySelector('.ot').value = prev.slice(0, prev.length - 1);
    }
    else if (key === "=") {
        if (eval(prev)) {
            try {
                let newnode = document.createElement('li');
                let textnode = document.createTextNode(prev + "=" + eval(prev));
                newnode.appendChild(textnode);
                let list = document.querySelector('.anslist');
                if (list.children.length == 0) {
                    document.querySelector('.ot').value = eval(prev);
                    list.appendChild(newnode);
                } else {
                    list.insertBefore(newnode, list.children[0]);
                    document.querySelector('.ot').value = eval(prev);
                }

            } catch (error) {
                document.querySelector('.ot').value = "";
                alert("Invaild expression")
            }
        }

    }
    else if (key in ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']) {
        document.querySelector('.ot').value = prev + key;
    }
    else if (key == '.' || key == '+' || key == '-' || key == '*' || key == '/' || key == '(' || key == ')') {
        document.querySelector('.ot').value = prev + key;
    }
})