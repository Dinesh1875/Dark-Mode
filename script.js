      const mode = document.getElementById("mode");
      const body = document.querySelector("body");
      mode.addEventListener("click", () => {
        body.classList.toggle("darkmode");
        mode.classList.toggle("togafter");
      });