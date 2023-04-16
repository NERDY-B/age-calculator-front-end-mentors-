'use strict mode'

const dayInput = document.querySelector('.day-input');
const monthInput = document.querySelector('.month-input');
const yearInput = document.querySelector('.year-input');
const result = document.querySelector('.arrow');
const parentEl = document.querySelector('.parent-list');
const years =document.querySelector('.years');
const months =document.querySelector('.months');
const day =document.querySelector('.day');


let dayInputResult, monthInputResult, yearInputResult;
let dayBool, monthBool, yearBool;

const time = new Date();
console.log(time.toLocaleDateString());

const timeArr = time.toLocaleDateString().split('/')
.map(el => +el);
console.log(timeArr);

const [curMonth, curDay, curYear] = timeArr;


result.addEventListener('click', function(e){
if(e.target.closest('.arrow')){
    if(monthInput.value === '' && dayInput.value === '' && yearInput.value === ''){
        console.log('fill in the fields');

        const html = `<div class="empty-fields">
        <li>THE FIELD IS REQUIRED</li>
        <li>THE FIELD IS REQUIRED</li>
        <li>THE FIELD IS REQUIRED</li>
    </div> `;
    parentEl.insertAdjacentHTML('beforeend', html);
        return;
    }

   
    if(+monthInput.value <=12)  {    
        if(+monthInput.value === 4 || +monthInput.value === 9 || +monthInput.value ===6){
            if(+dayInput.value <= 30){
                monthInputResult = curMonth - +monthInput.value
                console.log(monthInputResult);
                monthBool = true;
                months.querySelector(h1).textContent = monthInputResult;
            }
            
        }
        else {
            
            monthInputResult = curMonth - +monthInput.value;
            console.log(monthInputResult);
            monthBool = true;      
            months.querySelector('h1').textContent = ` ${monthInputResult}`;
            months.querySelector('h1').style.color = `rgb(99, 99, 248)`;
        }
        // document.querySelector('.invalid-month').classList.add('.hidden');
    }
    else{
    
            const html = `<div class="invalid-month ">
            <li>invalid month</li> 
               </div> `;
        parentEl.insertAdjacentHTML('beforeend', html);
    }


 // else{
        //     insert and html that under the month input and make the value of label empty string
        // }

    //for the year logic

    if(+yearInput.value <= time.getFullYear()){
       yearInputResult = time.getFullYear() - +yearInput.value;
       console.log(yearInputResult);
       years.querySelector('h1').textContent = ` ${yearInputResult}`;
       years.querySelector('h1').style.color = `rgb(99, 99, 248)`;
    }
    else{
     const html =  `<div class="invalid-year">
        <li>invalid year</li> 
           </div>`;
         parentEl.insertAdjacentHTML('beforeend', html);
    }


    if(+dayInput.value <= 31){

        dayInputResult = 31 - time.getDate();
        day.querySelector('h1').textContent = ` ${dayInputResult}`;
        day.querySelector('h1').style.color = `rgb(99, 99, 248)`;
        console.log(dayInputResult);
    }

    else{
        const html =  `<div class="invalid-date">
           <li>invalid date</li> 
              </div>`;
            parentEl.insertAdjacentHTML('beforeend', html);
       }

    }

    

    console.log(`${yearInputResult}  : ${monthInputResult} : ${dayInputResult} `);
})