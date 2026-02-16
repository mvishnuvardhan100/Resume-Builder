let currentSet = 1;

function addSet1() {
  let nameOfThePerson = document.getElementById("personName").value;
  let phoneNumber = document.getElementById("personNumber").value;
  let email = document.getElementById("personEmail").value;
  let resume = document.getElementById("rightPart");
  const child1 = document.createElement("div");
  child1.setAttribute("class", "nameOfThePerson");
  child1.innerHTML = `${nameOfThePerson}`;
  resume.appendChild(child1);
  const child2 = document.createElement("div");
  const child1OfChild2 = document.createElement("div");
  const child2OfChild2 = document.createElement("div");
  child1OfChild2.setAttribute("class", "emailOfThePerson");
  child2OfChild2.setAttribute("class", "phoneNumnerOfThePerson");

  child1OfChild2.innerHTML = `${email}`;
  child2OfChild2.innerHTML = `${phoneNumber}`;
  child2.setAttribute("class", "emailAndPhoneNumberOfThePerson");
  child2.appendChild(child1OfChild2);
  child2.appendChild(child2OfChild2);
  resume.appendChild(child2);

  //we modified resume but we still did not modify the options
  const optionsToAdd = document.getElementById("optionsToAdd");
  optionsToAdd.innerHTML = `
         <div class="headings">
            University Name
          </div>
          <div class="inputElements">
            <input id="universityName" type="text" placeholder="Enter university name">
          </div>
          <div class="headings">
            Starting Year
          </div>
          <div class="inputElements">
            <input id="startingYear" type="number" placeholder="Enter starting year">
          </div>
          <div class="headings">
            Branch
          </div>
          <div class="inputElements">
            <input id="branch" type="text" placeholder="Enter your branch">
          </div>
          <div class="headings">
            Location
          </div>
          <div class="inputElements">
            <input id="universityLocation" type="text" placeholder="Enter university location">
          </div>
          <div class="headings">
            Add to Resume
          </div>
          <div class="buttonElement">
            <button onclick="addSet2()">Add</button>
          </div>
  `;
  currentSet++;
}

function addSet2() {
  let universityName = document.getElementById("universityName").value;
  let startingYear = document.getElementById("startingYear").value;
  let branch = document.getElementById("branch").value;
  let location = document.getElementById("universityLocation").value;
  const child1 = document.createElement("div");
  child1.innerHTML = `
     <div class="headingBarOnResume">
      <div class = "headingOnResume">Education</div>
      <div class="lineHolder">
        <div class = "lineBesideHeading"></div>
      </div>
    </div>
  `;
  const resume = document.getElementById("rightPart");
  resume.appendChild(child1);
  const child2 = document.createElement("div");
  child2.innerHTML = `
     <div class="educationBar">
      <div class="branchNameOnResume">Bachelor of Engineering - ${branch}</div>
      <div class="yearOfGraduationOnResume">${startingYear} - ${Number(startingYear) + 4}</div>
     </div>
  `;
  resume.appendChild(child2);

  const child3 = document.createElement("div");
  child3.innerHTML = `
     <div class="educationBar">
      <div class="uniNameOnResume">${universityName}</div>
      <div class="locationOnResume">${location}</div>
     </div>
  `;
  resume.appendChild(child3);

}