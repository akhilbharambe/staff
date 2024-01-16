


employeData = [];



async function filterByDepartment() {
    const selectedDepartment = document.getElementById('departmentFilter').value;
   
    if (selectedDepartment) {
        const filteredData = employeData.filter(data => data.department === selectedDepartment);
        displayFilteredResults(filteredData);
    } else {
        fetchEmployees(); 
    }
}

function displayFilteredResults(filteredData) {
    let empBox = document.getElementById("employeeContainer");
    empBox.innerHTML = "";
    filteredData.map(emp => {
        let mainContainer = document.createElement("div");
        let image = document.createElement("img");
        image.src = emp.image;

        let empname = document.createElement("p");
        empname.textContent = emp.name;

        let gen = document.createElement("p");
        gen.textContent = emp.gender;

        let dep = document.createElement("p");
        dep.textContent = emp.department;

        let sal = document.createElement("p");
        sal.textContent = emp.salary;

        mainContainer.append(image, empname, gen, dep, sal);
        empBox.append(mainContainer);
    });
}




async function login() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    

    try {
        // const response = await fetch('http://reqres.in/api/login', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
                
        //     },
        //     body: JSON.stringify({ email, password }),
        // });
        // const data = await response.json();
        // console.log(data)

        // if (!response.ok) {
        //     console.log('Invalid credentials');
        // }

      

        localStorage.setItem('authToken', "123456");
        window.location.href = 'employee.html';
    } catch (error) {
        console.log('Login failed:', error);
    }
}



