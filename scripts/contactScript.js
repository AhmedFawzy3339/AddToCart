
const contactUsDiv = document.querySelector("#contact-content");


const form = document.createElement("form");
createFormElements(); 
function createFormElements() {
  
  const h2El = document.createElement("h2");
  h2El.innerHTML = "Leave us a message";
  contactUsDiv.appendChild(h2El);
  const line = document.createElement("hr");
  contactUsDiv.appendChild(line);

  const pEl = document.createElement("p");
  pEl.innerText = ` Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum in possimus deleniti id nihil officiis, facilis unde veritatis iste? Laborum dolorum accusamus dicta veritatis expedita asperiores consectetur molestiae dolores voluptatibus.`;

  contactUsDiv.appendChild(pEl);
  contactUsDiv.appendChild(form);

  const label1 = document.createElement("label");
  label1.innerHTML = "Name";
  
  form.appendChild(label1);
  const label2 = document.createElement("label");
  label2.innerHTML = "Email";
  label2.style.marginLeft="34%"

  form.appendChild(label2);

  const lineBreak1 = document.createElement("br");
  form.appendChild(lineBreak1);

  const name = document.createElement("input");
  name.setAttribute("id", "name");
  name.setAttribute("type", "text");
  name.setAttribute("name", "Name");
  name.setAttribute("size", "56px");
  name.setAttribute("required", "true");
  form.appendChild(name);


  const email = document.createElement("input");
  email.setAttribute("id", "email");
  email.setAttribute("type", "email");
  email.setAttribute("name", "Email");
  email.setAttribute("size", "56px");
  email.setAttribute("required", "true");
  form.appendChild(email);


  const lineBreak2 = document.createElement("br");
  form.appendChild(lineBreak2);
  const lineBreak3 = document.createElement("br");
  form.appendChild(lineBreak3);


  const label3 = document.createElement("label");
  label3.innerHTML = "Subject";
  form.appendChild(label3);

  const lineBreak4 = document.createElement("br");
  form.appendChild(lineBreak4);


  const subject = document.createElement("input");
  subject.setAttribute("id", "subject");
  subject.setAttribute("type", "text");
  subject.setAttribute("name", "Subject");
  subject.setAttribute("size", "133.5px");
  subject.setAttribute("required", "true");
  form.appendChild(subject);


  const lineBreak5 = document.createElement("br");
  form.appendChild(lineBreak5);
  const lineBreak6 = document.createElement("br");
  form.appendChild(lineBreak6);


  const label4 = document.createElement("label");
  label4.innerHTML = "Message";
  form.appendChild(label4);

  const lineBreak7 = document.createElement("br");
  form.appendChild(lineBreak7);


  const message = document.createElement("textarea");
  message.setAttribute("id", "txtMsg");
  message.setAttribute("name", "Message");
  message.setAttribute("cols", "135px");
  message.setAttribute("rows", "10px");
  message.setAttribute("required", "true");
  form.appendChild(message);


  const lineBreak8 = document.createElement("br");
  form.appendChild(lineBreak8);
  const lineBreak9 = document.createElement("br");
  form.appendChild(lineBreak9);


  const btn = document.createElement("button");
  btn.innerText = "Send message";
  btn.setAttribute("type", "submit");
  btn.setAttribute("value", "submit");
  btn.setAttribute("name", "Submit");
  form.appendChild(btn);
}


const contactUsAPILink =
  "https://afternoon-falls-30227.herokuapp.com/api/v1/contact_us";


  form.addEventListener("submit", (event) => {

  event.preventDefault();

  const name = document.querySelector("#name");
  const email = document.querySelector("#email");
  const subject = document.querySelector("#subject");
  const message = document.querySelector("#txtMsg");

  const formData = {
    name: name.value,
    email: email.value,
    subject: subject.value,
    message: message.value,
  };


  const xhr = new XMLHttpRequest();
  xhr.open("POST", contactUsAPILink);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.send(JSON.stringify(formData));

  xhr.onload = function () {
    if (xhr.status == 200) {
      alert("Data is submitted correctly");
      form.reset();
    } else {
      xhr1.onerror = function () {
        console.log("Request Error.");
        console.log(xhr.status);
      };
    }
  };
});
