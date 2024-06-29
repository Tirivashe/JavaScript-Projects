const sendBtn = document.querySelector('#sendBtn');
const messageIn = document.querySelector('#messageIn');
const messageOut = document.querySelector('#messageOut');
const count = 1

sendBtn.addEventListener('click',sendMsg);

function increment() {
  count ++
}

const john = {
  name: "John",
  age: 30,
  gender: "male"
}

function sendMsg(){
    let content = messageIn.value;
    if(content === ''){
        alert('Please Enter Valid Value');
    }else{
        messageOut.innerHTML = content;
        messageIn.value ='';
    }
    
}
