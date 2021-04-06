// elements
const input_text = document.querySelector('.input_text input');
const add_btn =document.querySelector('.input_text button');
const toDoList = document.querySelector('.toDoList');
const delete_all = document.querySelector('.footer button')

input_text.onkeyup = ()=>{
  let data = input_text.value;
  if(data.trim() != 0){  // 텍스트 미 입력시 추가버튼 클릭 불가능
    add_btn.classList.add("active"); // css - button.active 상태로 만들기
  }else{
    add_btn.classList.remove("active")
  }
}

to_do_list(); // 새로고침 해도 화면 유지

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

// 리스트 추가 함수
function to_do_list(){
  let getLocalStorage = localStorage.getItem("New Todo");
  if(getLocalStorage == null){ 
    list = [];
  }
  else{
    list = JSON.parse(getLocalStorage); // JSON -> js object(list) transform
  }
  const count = document.querySelector('.task_count');
  count.textContent = list.length; 
  let new_li_tag = '';
  list.forEach((element,index)  => {
    new_li_tag  += `<li>${element}<span onclick=delete_list(${index});>X</span></li>`;   // += 를 통해 이어쓰기 ! 그냥 = 쓰면 대체됨 
  });
  toDoList.innerHTML = new_li_tag; // ul 태그 밑에 li태그 추가
  input_text.value = '';  // 입력 버튼 누르고 나면 input 박스 초기화 
}

// 리스트 삭제 함수
function delete_list(index){
  let getLocalStorage = localStorage.getItem("New Todo");
  list = JSON.parse(getLocalStorage);
  list.splice(index, 1);
  localStorage.setItem("New Todo",JSON.stringify(list)); // js object(list) -> JSON (string) transform
  to_do_list();

}

// delete all
delete_all.onclick =()=>{
  list = []; // 빈 배열 생성
  localStorage.setItem("New Todo",JSON.stringify(list)); // js object(list) -> JSON (string) transform
  to_do_list();
}