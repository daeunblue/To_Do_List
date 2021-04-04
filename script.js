// elements
const input_text = document.querySelector('.input_text input');
const add_btn =document.querySelector('.input_text button');
const toDoList = document.querySelector('.toDoList');

input_text.onkeyup = ()=>{
  let data = input_text.value;
  if(data.trim() != 0){  // 텍스트 미 입력시 추가버튼 클릭 불가능
    add_btn.classList.add("active"); // css - button.active 상태로 만들기
  }else{
    add_btn.classList.remove("active")
  }
}

// add 버튼 클릭
add_btn.onclick = () =>{
  let data = input_text.value;
  let getLocalStorage = localStorage.getItem("New Todo");
  if(getLocalStorage == null){ 
    list = [];
  }
  else{
    list = JSON.parse(getLocalStorage); // JSON -> js object(list) transform
  }
  list.push(data);
  localStorage.setItem("New Todo",JSON.stringify(list)); // js object(list) -> JSON (string) transform
  to_do_list();
}

function to_do_list(){
  let getLocalStorage = localStorage.getItem("New Todo");
  if(getLocalStorage == null){ 
    list = [];
  }
  else{
    list = JSON.parse(getLocalStorage); // JSON -> js object(list) transform
  }
  let new_li_tag = '';
  list.forEach((element,index)  => {
    new_li_tag = `<li>${element}<span>X</span></li>`;
  });
  toDoList.innerHTML = new_li_tag; // ul 안에 li 요소 추가
}