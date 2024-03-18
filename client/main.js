const complimentBtn = document.getElementById("complimentButton")

const getCompliment = () => {
    axios.get("http://localhost:4004/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

complimentBtn.addEventListener('click', getCompliment)

const heading = document.querySelector("h1");
const minusBtn = document.querySelector("#minus");
const resetBtn = document.querySelector("#reset");
const plusBtn = document.querySelector("#plus");
const counter = 0;


for (let i = 0; i < emails.length; i++) {
    
    

   
  emailInfo.textContent =
  "(): " + emails[i].contact + " | Subject: " + emails[i].subject;

selectBtn.textContent = "Select";
selectBtn.addEventListener("click", selectEmail);
 

timeContainer.appendChild(selectBtn);
timeContainer.appendChild(img);
container.appendChild(emailInfo);
container.appendChild(timeContainer);
section.appendChild(container);
} 
 

function changeDisplay() {
    heading.textContent = counter;
}

function minusNum(){
    counter -= 1;
    changeDisplay();
}

minusBtn.addEventListener("click", minusNum);
function resetNum(){
    counter = 0;
    changeDisplay();
}

resetBtn.addEventListener("click", resetNum);
function addNum(){
    counter = counter + 1;
    changeDisplay();



plusBtn.addEventListener("click", addNum);
    
}