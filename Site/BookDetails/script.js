function searchFunction() {
    const searchTerm = document.getElementById("searchBar").value.toLowerCase();
    const containers =document.querySelectorAll(".container");
    containers.forEach(container=>{
        const text = container.getElementsByTagName("h3")[0].innerText.toLowerCase();
       if (text.includes(searchTerm)){
           container.style.display ="block";
           container.classList.add("highlight");
       }
        else{
            container.style.display="none";
            container.classList.remove("highlight");
        }
        
    });
}
                                                                            
