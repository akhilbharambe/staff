let currentPage = 1;
const employeesPerPage = 6;

function prevPage() {
    if (currentPage > 1) {
        currentPage--;
        fetchEmployees();
    }
}

function nextPage() {
    currentPage++;
    fetchEmployees();
}


function isAuthenticated() {
    const token = localStorage.getItem('authToken');
    return !!token; 
}

async function fetchEmployees() {
    if (!isAuthenticated()) {
        window.location.href = 'index.html';
        return;
    }

    try {
        const authToken = localStorage.getItem('authToken');
        if (!authToken) {
            window.location.href = "/index.html";
        }
        else {
            let res = await fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees?limit=${employeesPerPage}&page=${currentPage}`);
            let data = await res.json();
            employeData = data.data
            console.log(employeData)
            console.log(data.data);
            let empBox = document.getElementById("employeeContainer");
            empBox.innerHTML = "";
            data.data.map((emp, i) => {

                let mainContainer = document.createElement("div");

                let image = document.createElement("img");
                image.src = emp.image

                let empname = document.createElement("p");
                empname.textContent = "name = " +emp.name;

                let gen = document.createElement("p");
                gen.textContent = "gender = " +emp.gender;

                let dep = document.createElement("p");
                dep.textContent = "department = " + emp.department;

                let sal = document.createElement("p");
                sal.textContent = "Salary = " + emp.salary

                mainContainer.append(image, empname, gen, dep, sal);
                empBox.append(mainContainer)
            });
        }
    } catch (error) {
        console.error('Error fetching employee data:', error);
    }
}

fetchEmployees();