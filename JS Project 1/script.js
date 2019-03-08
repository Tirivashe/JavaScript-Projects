const sendBtn = document.querySelector('#sendBtn');
const messageIn = document.querySelector('#messageIn');
const messageOut = document.querySelector('#messageOut');
const container = document.querySelector('.container');

sendBtn.addEventListener('click',sendMsg);

function sendMsg(){
    let content = messageIn.value;
    if(content === ''){
        alert('Please Enter Valid Value');
    }else{
        messageOut.innerHTML = content;
        messageIn.value ='';
    }
}