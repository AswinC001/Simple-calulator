let outputfield=document.querySelector('#display');
let inputfield=document.querySelector('#opinput');
function calculator(val){
   
    switch (val) {
        case '+':
        case '-':
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
        case '0':
        case '/':
        case '*':
        case '**':
        case '.':
            inputfield.value+=val;   
            break;
        case 'AC':
            inputfield.value='';
            outputfield.value=0;
            break;
        case 'Clear':
            if(inputfield.value.length==0){
                inputfield.value='';
            }else{
                inputfield.value=inputfield.value.slice(0,-1);
            }
            break;
        case '=':
            outputfield.value=eval(inputfield.value);
        default:
            break;
    }
}