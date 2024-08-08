document.addEventListener("keyup", e=>{

    if (e.target.matches("#buscador")){
  
        if (e.key ==="Escape")e.target.value = ""
  
        document.querySelectorAll(".book-item").forEach(book =>{
  
            book.textContent.toLowerCase().includes(e.target.value.toLowerCase())
              ?book.classList.remove("filtro")
              :book.classList.add("filtro")
        })
  
    }
  
  
  })