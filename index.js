let firstName = document.getElementById("fname");
let lastName = document.getElementById("lname");
let age = document.getElementById("age");
let email = document.getElementById("email");
let serialNo = document.getElementById("s-no");
let password = document.getElementById("password");
let editIndex = null;
let myData = JSON.parse(localStorage.getItem("formData")) || [];
function setFormData() {
    if (!fname.value || !lname.value || age.value <= 0 || !email.value || serialNo.value <= 0 || password.value.length <= 7) {
        return alert("Please Enter Each fields");
    } else {
        let data = {
            fname: firstName.value,
            lname: lastName.value,
            age: age.value,
            email: email.value,
            serialno: serialNo.value,
            password: password.value
        };
        let prevData = JSON.parse(localStorage.getItem("formData")) || [];
        if (editIndex !== null) {
            prevData[editIndex] = data;
            editIndex = null;
        } else {
            prevData.push(data);
        }
        localStorage.setItem("formData", JSON.stringify(prevData));
    }
}
function getFromData() {
    // let myData = JSON.parse(localStorage.getItem("formData")) || [];
    const tableBody = document.getElementById("tableBody");
    tableBody.innerHTML = "";
    myData.map((el, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${el.fname}</td>
            <td>${el.lname}</td>
            <td>${el.age}</td>
            <td>${el.email}</td>
            <td>${el.serialno}</td>
            <td>${el.password}</td>
            <td><button onclick="deleteItems(${index})">delete</button></td>
            <td><button onclick="editData(${index})">Edit</button></td>
        `;
        tableBody.appendChild(row);
    });
}
function submitData() {
    setFormData();
    getFromData();
}
getFromData();
function deleteItems(index) {
    // let myData = JSON.parse(localStorage.getItem("formData")) || [];
    myData.splice(index, 1);
    localStorage.setItem("formData", JSON.stringify(myData));
    getFromData();
}
function editData(index) {
    // let myData = JSON.parse(localStorage.getItem("formData")) || [];
    let datas = myData[index];
    firstName.value = datas.fname;
    lastName.value = datas.lname;
    age.value = datas.age;
    email.value = datas.email;
    serialNo.value = datas.serialno;
    password.value = datas.password;
    editIndex = index;
}
