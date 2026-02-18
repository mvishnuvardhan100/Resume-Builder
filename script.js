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
      <div class = "headingOnResume">EDUCATION</div>
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

  //we modified resume but we still did not modify the options
  const optionsToAdd = document.getElementById("optionsToAdd");
  optionsToAdd.innerHTML = `
         <div class="headings">
            Programming Languages you know
          </div>
          <div class="inputElements">
            <textarea id="allProgrammingLangs" cols="70" rows="5" placeholder="Enter all programming languages you know"></textarea>
          </div>
          <div class="headings">
            Technologies
          </div>
          <div class="inputElements">
            <textarea id="allTechnologies" cols="70" rows="5" placeholder="Enter all technologies you know"></textarea>
          </div>
          <div class="buttonElement">
            <button onclick="addSet3()">Add</button>
          </div>
  `;
  currentSet++;
}

function addSet3() {
  let allProgrammingLanguages = document.getElementById("allProgrammingLangs").value;
  let arrayOfLanguages = allProgrammingLanguages.split(", ");
  let allTechnologies = document.getElementById("allTechnologies").value;
  let arrayOfTechnologies = allTechnologies.split(", ");
  const child1 = document.createElement("div");
  child1.innerHTML = `
     <div class="headingBarOnResume">
      <div class = "headingOnResume">SKILLS</div>
      <div class="lineHolder">
        <div class = "lineBesideHeading"></div>
      </div>
    </div>
  `;
  const resume = document.getElementById("rightPart");
  resume.appendChild(child1);
  const child2 = document.createElement("div");
  child2.innerHTML = `
     <div class="skillsBar">
      <div style="flex: 1">
       Programming Languages
      </div>
      <div id="allProgrammingLanguages" class="allProgrammingLanguages">
       
      </div>
     </div>
  `;
  resume.appendChild(child2);
  const containerOfAllProgrammingLanguages = document.getElementById("allProgrammingLanguages");
  arrayOfLanguages.forEach(function(val) {
    const tempChild = document.createElement("div");
    tempChild.innerHTML = `${val}`;
    tempChild.setAttribute("class", "language");
    containerOfAllProgrammingLanguages.appendChild(tempChild);
  });
  const child3 = document.createElement("div");
  child3.innerHTML = `
     <div class="skillsBar">
      <div style="flex: 1">
       Technologies
      </div>
      <div id="allTechnologiesOnResueme" class="allTechnologiesOnResueme">
       
      </div>
     </div>
  `;
  resume.appendChild(child3);
  const containerOfAllTechnologies = document.getElementById("allTechnologiesOnResueme");
  arrayOfTechnologies.forEach(function(val) {
    const tempChild = document.createElement("div");
    tempChild.setAttribute("class", "technology");
    tempChild.innerHTML = `${val}`;
    containerOfAllTechnologies.appendChild(tempChild);
  });

  //we modified resume but we still did not modify the options
  optionsToAdd.innerHTML = `
         <div class="headings">
            Name of the company
          </div>
          <div class="inputElements">
            <input id="companyName" type="text" placeholder="Enter the name of the company">
          </div>
          <div class="headings">
            Role
          </div>
          <div class="inputElements">
            <input id="role" type="text" placeholder="Enter your role">
          </div>
          <div class="headings">
            Starting Year
          </div>
          <div class="inputElements">
            <input id="startingYear" type="number" placeholder="Enter starting year">
          </div>
          <div class="headings">
            Ending Year
          </div>
          <div class="inputElements">
            <input id="endingYear" type="number" placeholder="Enter ending year">
          </div>
          <div class="headings">
            Location
          </div>
          <div class="inputElements">
            <input id="companyLocation" type="text" placeholder="Enter company location">
          </div>
          <div class="headings">
            Your contribution
          </div>
          <div class="inputElements">
            <textarea id="contribution" cols="70" rows="10" placeholder="Enter your contibution to the company"></textarea>
          </div>
          <div class="headings">
            Add to Resume
          </div>
          <div class="buttonElement">
            <button onclick="addSet4()">Add</button>
          </div>

  `;
  currentSet++;
}

function addSet4() {
  let companyName = document.getElementById("companyName").value;
  let startingYear = document.getElementById("startingYear").value;
  let endingYear = document.getElementById("endingYear").value;
  let location = document.getElementById("companyLocation").value;
  let role = document.getElementById("role").value;
  let contribution = document.getElementById("contribution").value;
  const child1 = document.createElement("div");
  child1.innerHTML = `
     <div class="headingBarOnResume">
      <div class = "headingOnResume">EXPERIENCE</div>
      <div class="lineHolder">
        <div class = "lineBesideHeading"></div>
      </div>
    </div>
  `;
  const resume = document.getElementById("rightPart");
  resume.appendChild(child1);
  const child2 = document.createElement("div");
  child2.innerHTML = `
     <div class="experienceBar">
      <div class="companyNameOnResume">${companyName}</div>
      <div class="durationOfJob">${startingYear} - ${endingYear}</div>
     </div>
  `;
  resume.appendChild(child2);
  const child3 = document.createElement("div");
  child3.innerHTML = `
     <div class="experienceBar">
      <div class="roleOnResume">${role}</div>
      <div class="locationOnResume">${location}</div>
     </div>
  `;
  resume.appendChild(child3);
  const child4 = document.createElement("div");
  child4.setAttribute("class", "contributionOnResume");
  child4.innerHTML = contribution.replace(/\n/g, "<br>"); //one new learning
  resume.appendChild(child4);

   //we modified resume but we still did not modify the options
   optionsToAdd.innerHTML = `
         <div class="headings">
            Name of the project
          </div>
          <div class="inputElements">
            <input id="projectName" type="text" placeholder="Enter the name of the project">
          </div>
          <div class="headings">
            Starting Year
          </div>
          <div class="inputElements">
            <input id="startingYear" type="number" placeholder="Enter starting year">
          </div>
          <div class="headings">
            Ending Year
          </div>
          <div class="inputElements">
            <input id="endingYear" type="number" placeholder="Enter ending year">
          </div>
          <div class="headings">
            Role
          </div>
          <div class="inputElements">
            <input id="role" type="text" placeholder="Enter your role">
          </div>
          <div class="headings">
            Location
          </div>
          <div class="inputElements">
            <input id="companyLocation" type="text" placeholder="Enter company location">
          </div>
          <div class="headings">
            Your contribution
          </div>
          <div class="inputElements">
            <textarea id="contribution" cols="70" rows="10" placeholder="Enter your contibution to the company"></textarea>
          </div>
          <div class="headings">
            Add to Resume
          </div>
          <div class="buttonElement">
            <button onclick="addSet5()">Add</button>
          </div>

  `;
  currentSet++;
}

function addSet5() {
  let projectName = document.getElementById("projectName").value;
  let startingYear = document.getElementById("startingYear").value;
  let endingYear = document.getElementById("endingYear").value;
  let location = document.getElementById("companyLocation").value;
  let role = document.getElementById("role").value;
  let contribution = document.getElementById("contribution").value;
  const child1 = document.createElement("div");
  child1.innerHTML = `
     <div class="headingBarOnResume">
      <div class = "headingOnResume">NOTABLE PROJECTS</div>
      <div class="lineHolder">
        <div class = "lineBesideHeading"></div>
      </div>
    </div>
  `;
  const resume = document.getElementById("rightPart");
  resume.appendChild(child1);
  const child2 = document.createElement("div");
  child2.innerHTML = `
     <div class="projectBar">
      <div class="projectNameOnResume">${projectName}</div>
      <div class="durationOfProject">${startingYear} - ${endingYear}</div>
     </div>
  `;
  resume.appendChild(child2);
  const child3 = document.createElement("div");
  child3.innerHTML = `
     <div class="projectBar">
      <div class="roleOnResume">${role}</div>
      <div class="locationOnResume">${location}</div>
     </div>
  `;
  resume.appendChild(child3);
  const child4 = document.createElement("div");
  child4.setAttribute("class", "contributionOnResume");
  child4.innerHTML = contribution.replace(/\n/g, "<br>"); //one new learning
  resume.appendChild(child4);
  optionsToAdd.innerHTML = `
         <div class="headings">
            Name of the project
          </div>
          <div class="inputElements">
            <input id="projectName" type="text" placeholder="Enter the name of the project">
          </div>
          <div class="headings">
            Starting Year
          </div>
          <div class="inputElements">
            <input id="startingYear" type="number" placeholder="Enter starting year">
          </div>
          <div class="headings">
            Ending Year
          </div>
          <div class="inputElements">
            <input id="endingYear" type="number" placeholder="Enter ending year">
          </div>
          <div class="headings">
            Role
          </div>
          <div class="inputElements">
            <input id="role" type="text" placeholder="Enter your role">
          </div>
          <div class="headings">
            Location
          </div>
          <div class="inputElements">
            <input id="companyLocation" type="text" placeholder="Enter company location">
          </div>
          <div class="headings">
            Your contribution
          </div>
          <div class="inputElements">
            <textarea id="contribution" cols="70" rows="10" placeholder="Enter your contibution to the company"></textarea>
          </div>
          <div class="headings">
            Add to Resume
          </div>
          <div class="buttonElement">
            <button onclick="addSet6()">Add</button>
          </div>

  `;
  currentSet++;


}

