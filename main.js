let main_input = document.querySelector('.main_input')
let main_button = document.querySelector('.main_button')
let Error = document.querySelector('.Error')


let toddo_list = document.querySelector('.toddo_list')


// ==============function 
main_button.addEventListener('click' , ()=>{
    if(main_input.value==''){
        Error.style.display ='block'
    }else{
        // ==============create Element
        let singletoddo = document.createElement('div')
        let toddolistinput = document.createElement('input')
        let listdelete = document.createElement('button')
        let listEdit = document.createElement('button')

        // ==========making Child
        toddo_list.appendChild(singletoddo)
        singletoddo.appendChild(toddolistinput)
        singletoddo.appendChild(listdelete)
        singletoddo.appendChild(listEdit)

        //=============Class name
        singletoddo.classList.add('singletoddo')
        toddolistinput.classList.add('toddolistinput')
        listdelete.classList.add('listdelete')
        listEdit.classList.add('listEdit')

        // ===============add content
        listdelete.innerHTML='Delete'
        listEdit.innerHTML='Edit'
        // ================input fild Link
        toddolistinput.value=main_input.value
        main_input.value=''
        // ==========input Attributr
        toddolistinput.setAttribute('readonly' , 'readonly')
        // =========Deleting Option
        listdelete.addEventListener('click' ,()=>{
            singletoddo.remove()
        })
        
    }
    
})



