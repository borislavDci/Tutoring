const destinationList = document.querySelector("ul");

const button = document.querySelector("button");

const info = document.createElement("div");
info.classList.add("alert", "alert-success", "my-3");
info.role = "alert";

button.addEventListener("click", () => {
    destinationList.classList.toggle("d-none");
    if (destinationList.classList.contains("d-none"))
        button.innerText = "Show destinations";
    else button.innerText = "Hide destinations";
});



destinationList.addEventListener("click", (event) => {
    if (event.target.tagName === "LI") {
        for (const li of destinationList.children) {
            if (li.classList.contains("active")) li.classList.remove("active");
        }
        event.target.classList.toggle("active");

        info.innerText = `You selected ${event.target.innerText}`;
        destinationList.insertAdjacentElement("afterend", info);
    }
});

let dragged = null;
const lists = document.querySelectorAll('ul')
lists.forEach(list => {
    list.addEventListener('dragstart', (event) => {
        dragged = event.target
        dragged.classList.toggle('bg-warning')
    })
})

const dropTarget = document.querySelectorAll('.drop-target')

dropTarget.forEach(target => {
    target.addEventListener('dragover', (event) => {
        event.preventDefault()
    })

    target.addEventListener("drop", (event) => {
        event.preventDefault()

        if (event.target.parentNode.classList.contains('drop-target')) {
            event.target.parentNode.appendChild(dragged)
            dragged.classList.toggle('bg-warning')
            dragged.classList.toggle('bg-success')
            setTimeout(() => {
                dragged.classList.toggle('bg-success')
            }, (100));
        }
        if (dragged.classList.contains('active')) {
            dragged.classList.toggle('active')
            dragged.parentNode.parentNode.removeChild(info)
        }
    })

})

