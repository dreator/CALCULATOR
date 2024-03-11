let string = "";

let buttons = document.querySelectorAll('.button');

let fn= (button)=> {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            string = eval(string);
            document.querySelector('input').value = string;
        }
        else if (e.target.innerHTML == 'C') {
            string = "";
            document.querySelector('input').value = string;
        }
        else if (e.target.innerHTML == '+' || e.target.innerHTML == '-' || e.target.innerHTML == '/' 
        || e.target.innerHTML == '*' || e.target.innerHTML == '%' || e.target.innerHTML == '.') {
            string += e.target.innerHTML;
            document.querySelector('input').value = string;
        }
        else {
            // console.log(e.target.innerHTML);
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string;
        }
    })
};

Array.from(buttons).forEach(fn)