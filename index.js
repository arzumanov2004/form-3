const formGroupExampleInput = document.getElementById("formGroupExampleInput")
const formGroupExampleInput1 = document.getElementById("formGroupExampleInput1")
const formGroupExampleInput2 = document.getElementById("formGroupExampleInput2")
const formGroupExampleInput3 = document.getElementById("formGroupExampleInput3")
const formGroupExampleInput4 = document.getElementById("formGroupExampleInput4")
const formGroupExampleInput5 = document.getElementById("formGroupExampleInput5")
const formGroupExampleInput6 = document.getElementById("formGroupExampleInput6")
const formGroupExampleInput7 = document.getElementById("formGroupExampleInput7")
const formGroupExampleInput8 = document.getElementById("formGroupExampleInput8")
const formGroupExampleInput9 = document.getElementById("formGroupExampleInput9")
const form = document.getElementById("form")


function fetchPost (e) {
        e.preventDefault();
            axios.post("https://655c84d425b76d9884fd7251.mockapi.io/nihad", {
                Title: formGroupExampleInput.value,
                Price: formGroupExampleInput1.value,
                Description: formGroupExampleInput2.value,  
                Discount: formGroupExampleInput3.value,
                Stock: formGroupExampleInput4.value,
                Quality: formGroupExampleInput5.value,
                Country: formGroupExampleInput6.value,
                CustomersCount: formGroupExampleInput7.value,
                Category: formGroupExampleInput8.value,
                City: formGroupExampleInput9.value,
            }).then(res => {
                    console.log(res);
                    form.reset()
                })
                }
                
                
                form.addEventListener('submit', fetchPost)