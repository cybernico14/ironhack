
// document.querySelector("#get").addEventListener("click", getText);
// document.querySelector("#get").addEventListener("click", getText);
// document.querySelector("#ageText").addEventListener("click", getText);

const getText = () => {
    fetch("sample.txt")
        .then((response) => response.text())
        .then((CleanText) => document.querySelector("#output").innerText += CleanText)
        .catch((error)=> console.log(error))
}

document.querySelector("#getText").addEventListener("click", getText);

const getJson = () => {
    fetch("./users.json")
        .then((response) => response.json())
    
        .then((users) => {
            let UserData = "";
            users.forEach((user) => {
                UserData +=
                    `<ul>
    <li>${user.name}</li>
    <li>${user.email}</li>
    <li>${user.id}</li>
    </ul>
    `;
            });
        document.querySelector("#output").innerHTML += UserData;
        })
    .catch((error) => console.log(error))


    
};


document.querySelector("#getJson").addEventListener("click", getJson)


const getExternalAPiInfo = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((res) => {
        let externalApiInfo = "";
        res.forEach((post) => {
          externalApiInfo += `
                <div class="card" style="width: 15rem">
                  <img
                      class="card-img-top"
                      src="https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/bltde04169680d1e8d6/6333adfb110d52448841a252/GettyImages-1243560834.jpg"
                      alt="A cool image about the Wu"
                  />
                  <div class="card-body">
                      <h5 class="card-title">${post.title}</h5>
                      <p class="card-text">
                          ${post.body}
                      </p>
                  </div>
                </div>
                `;
        });
        document.querySelector("#output").innerHTML += externalApiInfo;
      })
      .catch((error) => console.log(error));
};
  
  document.querySelector("#getExternalAPiInfo").addEventListener("click", getExternalAPiInfo);

// const addPost = (preventForm) => {
//     preventForm.preventDefault()

//     let title = document.querySelector("#title").value
//     let body = document.querySelector("#body").value

//     fetch("https://jsonplaceholder.typicode.com/posts", {
//         method: "POST",
//         headers: {
//             "Content-type": "application/json",
//             Accept: "text/plain, application/json"
//         },
//         body: JSON.stringify({ title: title, body: body })
//     })
//         .then((response) => response.json())
//         .then((formData) => console.log(formData)) 
//         .catch((error) => console.log(error))
// };
const addPost =(preventForm) => {
    preventForm.preventDefault()

    let name = document.querySelector("#name").value
    let email = document.querySelector("#e-mail").value
    let phone = document.querySelector("#phone").value
    let message = document.querySelector("#message").value

    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
            "Content-type": "application/json",
            Accept: "text/plain, application/json"
        },
        body: JSON.stringify({ name: name, email: email, phone: phone, message: message })
    })
        .then((response) => response.json())
        .then((formData) => console.log(formData)) 
        .catch((error) => console.log(error))
};
document.querySelector("#addPost").addEventListener("submit", addPost)

