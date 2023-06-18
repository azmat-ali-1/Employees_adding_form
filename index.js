

//storage
let employList = [];

// for checking
// document.getElementById("name").value="Azmat";
// document.getElementById("profession").value="Engineer";
// document.getElementById("age").value="26";


//add record to tempory storage
const addEmployee = (event)=>{
    event.preventDefault();
    let list = document.querySelectorAll("form input");
    let name = list[0].value;
    let profession = list[1].value;
    let age = list[2].value;
    let id = employList.length+1;

    //for unique
    if(employList.length!=0){
        id  = employList[employList.length-1].id+1;
    }
    const newEmployee = {
        id: id,
        name:name,
        profession:profession,
        age:age,
    }
    let div  = document.getElementById("statusArea");

    //if all value is prasent
    if(name&&profession&&age){
        employList.push(newEmployee);
        addInContainer();
       
        div.innerText="Success : Employee Added!";
        div.style.color="green";
document.getElementById("name").value="";
document.getElementById("profession").value="";
document.getElementById("age").value="";

      
    }
    //miss any of them
    else{
         div.innerText="Error : Please Make sure All the fields are filled before adding in na employee!";
        div.style.color="red";
    }
    timeOut()
}

//status timeout timmer
function timeOut(){
    setTimeout(()=>{
        let div  = document.getElementById("statusArea");
        div.innerText="";
    },2000);
}



//add record to container
const  addInContainer = ()=>{
    let list =  document.getElementById("employContainer");
    list.innerHTML='';
    employList.forEach(element => {
    
   let div = document.createElement("div");
   div.className="box";
   div.innerHTML=`<div><p>${element.id}.</p>
   <p>Name : ${element.name}</p>
   <p>Profession : ${element.profession}</p>
   <p>Age : ${element.age}</p></div>
   <button class ="delete" id="${element.id}">Delete User</button>
   `;
   list.append(div);
  });
}


//delete records from container
function deleteValue(event){
    
    let id = event.target.id;
    console.log(id);
   const index = indexOf(id);
   console.log("index of",index);
   if(index!=-1){
    employList.splice(index, 1);
   }
    addInContainer();
}
const indexOf=(id)=>{
for(let i = 0;i<employList.length;i++){
    if(employList[i].id==id){
        return i;
    }
}
return -1;
}

//action perform
document.getElementById('form').addEventListener('submit', addEmployee);
document.addEventListener("click",(event)=>{
    if(event.target.classList.contains("delete")){
        deleteValue(event);
    }
})