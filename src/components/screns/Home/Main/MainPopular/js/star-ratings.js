window.addEventListener('DOMContentLoaded', ()=>{
    const starContainers = document.querySelectorAll('.stars');
    starContainers.forEach((el)=>{
        const starsUL = createElements(el, 'ul', 'main')
        const output = createElements(el, 'div', 'output');
        for (let x = 0; x < 5; x++) {
            const star = createElements(starsUL, 'li', 'star');
            star.innerHTML = '&#10029;'
            star.starValue = (x+1);
            ["mouseover","mouseout","click"].forEach((ele)=>{
                star.addEventListener(ele, starRate)
            })
        }
    })

    function starRate(e){
        const eventType = e.type;
        const parent = e.target.closest('.stars');
        const output = parent.querySelector('.output')
        const curStars = parent.querySelectorAll('.star')
        if(eventType === 'click'){
            output.innerHTML = `${e.target.starValue} &#9733;`
            addColor(curStars, e.target.starValue)
        }else if (eventType === 'mouseover'){
            addYellow(curStars, e.target.starValue)
        }
    }
    function addYellow(curStars, val){

        curStars.forEach((star, index)=>{
            if(index < val){
                star.classList.add('yellow');
            }else{
                star.classList.remove('yellow')
            }
        })
    }
    function addColor(curStars, val){
        curStars.forEach((star, index)=>{
            if(index < val){
                star.classList.add('orange');
            }else{
                star.classList.remove('orange')
            }
        })
    }
    function createElements(parent, elType, myClass){
        const el = document.createElement(elType)
        el.classList.add(myClass)
        parent.append(el)
        return el;
    }
})
