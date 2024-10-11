var items = document.querySelector("#items");
var listitem = document.querySelector("#listitem");

items.addEventListener("keyup", function(abc) {
    // console.log(abc.key);
    if(abc.key == "Enter"){
        addtolist(this.value);
        this.value = "";
    }
});

const addtolist = (val) => {
    var newitem = document.createElement("li");
    newitem.innerHTML = `${val} <i class="ri-close-circle-line"></i>`;
    newitem.addEventListener("click", function () {
        this.classList.toggle("complete");
    });
    var del = newitem.querySelector("i");
    del.addEventListener("click", function () {
        newitem.remove();
    })
    newitem.addclassList("complete");
    listitem.appendChild(newitem);
};