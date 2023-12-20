let fetchUserBtn=document.getElementById("fetchUserBtn");
fetchUserBtn.addEventListener("click",fetchUser);

function fetchUser() {
    fetch(`https://reqres.in/api/users`)
    .then(res=>res.json())
    .then(vinay=>{
        // let displayData=``;
        vinay.data.forEach(user => {
            // displayData += 
            let div = document.createElement("div");

            let avatar=document.createElement("img");
            avatar.src=user.avatar;
           

            let name=document.createElement("p")
            name.innerText=`Name:- ${user.first_name} ${user.last_name}`


            let email=document.createElement("p")
            email.innerText= `Email:- ${user.email}`;


            div.append(avatar,name,email);

            container.appendChild(div);
        });
        // document.getElementById("Userslist").innerText=displayData;

    })
    .catch(error=>{
        console.error("There was an error fetching the data.", error);
    })
}

