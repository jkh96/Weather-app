import {Cali} from './CA'
 export function ac(){
    let citysearch = document.querySelector('.search-input')
    citysearch.addEventListener('input', autocomplete)
    let container = document.querySelector('.search-container')
    var currentFocus;

    function autocomplete(e) {
        if (!citysearch.value) { return false;}
      currentFocus = -1;
        let caArray = []
        let a,b
        closeAllLists()
        a = document.createElement('div')
        a.setAttribute("id","autocomplete-list");
        a.setAttribute("class", "autocomplete-items flex-column");
        container.appendChild(a)
    if (e.target.value){
        // caArray = CA.Ca.filter(cities => cities.toLowerCase().includes(e.target.value))
        caArray = Cali
        for (let i = 0; i < caArray.length; i++) {
            if(caArray[i].substr(0, citysearch.value.length).toUpperCase() == citysearch.value.toUpperCase()){
                b = document.createElement('div')
                b.innerText = caArray[i]
                b.innerHTML += "<input type='hidden' value='" + caArray[i] + ',' + " CA" + "'>";
                b.addEventListener("click", function(e) {
                    /*insert the value for the autocomplete text field:*/
                    citysearch.value = this.getElementsByTagName("input")[0].value;
                    /*close the list of autocompleted values,
                    (or any other open lists of autocompleted values:*/
                    closeAllLists();
                });
                a.appendChild(b)
            }
            
        }
    }
    // console.log(caArray)  
    }
    function closeAllLists(elmnt) {
        /*close all autocomplete lists in the document,
        except the one passed as an argument:*/
        var x = document.getElementsByClassName("autocomplete-items");
        for (var i = 0; i < x.length; i++) {
          if (elmnt != x[i] && elmnt != citysearch) {
            x[i].parentNode.removeChild(x[i]);
          }
        }
      }

         // Detect all clicks on the document
    window.addEventListener("click", function(event) {
        // If user clicks inside the element, do nothing
        if (event.target.closest(".search-container") )
            return;

        // If user clicks outside the element, hide it!
        closeAllLists()
    });

     /*execute a function presses a key on the keyboard:*/
  citysearch.addEventListener("keydown", function(e) {
    var x = document.getElementById(this.id + "autocomplete-list");
    if (x) x = x.getElementsByTagName("div");
    if (e.keyCode == 40) {
      /*If the arrow DOWN key is pressed,
      increase the currentFocus variable:*/
      currentFocus++;
      /*and and make the current item more visible:*/
      addActive(x);
    } else if (e.keyCode == 38) { //up
      /*If the arrow UP key is pressed,
      decrease the currentFocus variable:*/
      currentFocus--;
      /*and and make the current item more visible:*/
      addActive(x);
    } else if (e.keyCode == 13) {
      /*If the ENTER key is pressed, prevent the form from being submitted,*/
      e.preventDefault();
      if (currentFocus > -1) {
        /*and simulate a click on the "active" item:*/
        if (x) x[currentFocus].click();
      }
    }
    });
    function addActive(x) {
    /*a function to classify an item as "active":*/
    if (!x) return false;
    /*start by removing the "active" class on all items:*/
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    /*add class "autocomplete-active":*/
    x[currentFocus].classList.add("autocomplete-active");
    }
    function removeActive(x) {
    /*a function to remove the "active" class from all autocomplete items:*/
    for (var i = 0; i < x.length; i++) {
        x[i].classList.remove("autocomplete-active");
    }
    }
}
