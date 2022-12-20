const body = document.querySelector("body"),
      sidebar = body.querySelector(".sidebar"),
      toggle = body.querySelector(".toggle"),
      searchBtn = body.querySelector(".search-box"),
      modeSwitch = body.querySelector(".mode"),
      modeText = body.querySelector(".mode-text");


    
      toggle.addEventListener("click", () => {
        sidebar.classList.toggle("close");
      });

      modeSwitch.addEventListener("click", () => {
        body.classList.toggle("dark");

        if(body.classList.contains("dark")){
            document.querySelector(".text-light").style.display = "block";
            document.querySelector(".text-dark").style.display = "none"
        }else {
            document.querySelector(".text-light").style.display = "none";
            document.querySelector(".text-dark").style.display = "block"
        }
      });