function focused() {

    let getDiv = document.querySelectorAll('input');
    let arr = [];
    for (let index = 0; index < getDiv.length; index++) {
        arr[arr.length] = getDiv[index].addEventListener('focus', focuse);
        arr[arr.length] = getDiv[index].addEventListener('blur', focusLost);
    }

    function focuse(e) {

        e.target.parentNode.className += "focused";
    }


    function focusLost(e) {

        e.target.parentNode.className -= "focused";
    }


}

// function focused() {
//     let mainDiv = document.getElementsByTagName("div")[0];

//     Array.from(mainDiv.getElementsByTagName("input")).forEach(element => {
//         element.addEventListener("focus", focus);
//     });

//     Array.from(mainDiv.getElementsByTagName("input")).forEach(element => {
//         element.addEventListener("blur", focusLost);
//     });


    // function focus(e) {
    //     let parent = e.target.parentNode;
    //     parent.classList.add("focused");
    // }


    // function focusLost(e) {
    //     let parent = e.target.parentNode;
    //     parent.classList.remove("focused");
    // }

// }