
function click_button () {
    let change_text = document.querySelector('#change_text')
    let change_color = document.querySelector('#change_color')

    change_text.textContent = "You are awesome, don't give up"
    change_color.style.color = "yellow"

}

/** 
 * normal anonymous function
 * es6 arrow anonymous function
 * 
 * async/await
 */

// (function () {
//     let change_text = document.querySelector('#change_text')
//     let change_color = document.querySelector('#change_color')

//     change_text.textContent = "You are awesome, don't give up"
//     change_color.style.color = "blue"
// })()

// (() => {
//     let change_text = document.querySelector('#change_text')
//     let change_color = document.querySelector('#change_color')

//     change_text.textContent = "You are awesome, never give up"
//     change_color.style.color = "red"
// })()

(async  () => {
    await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
        }, 2500);
    })
    let change_text = document.querySelector('#change_text')
    let change_color = document.querySelector('#change_color')

    change_text.textContent = "You are awesome, don't give up, you are a great programmer"
    change_color.style.color = "red"
})()