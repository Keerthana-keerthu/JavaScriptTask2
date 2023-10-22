function fetchUserDeta() {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((response) => response.json())
      .then((data) => {
        const userData = document.getElementById("userData");
        data.forEach((user) => {
          const card = document.createElement("div");
          card.classList.add("card");
          card.innerHTML = `
                      <div class="row">
                      <div class="col-1">
                        <div class="card-body">
                            <h4 class="card-title"><b class="userNametitle"> User Name:</b><span class="userName"> ${user.name}</span></h5>
                            <h6 class="card-subtitle mb-2 text-muted"><b class="userEmail"></i> Email:</b> ${user.email}</h6>
                            <p class="card-text"><b class="userComment">Comment: </b><span class="comments">${user.body}</span></p>
                        </div>
                        </div>
                        </div>
                    `;
          userData.appendChild(card);
        });
      })
      .catch((error) => {
        console.error("Error fetching user details:", error);
      });
  }
  fetchUserDeta();