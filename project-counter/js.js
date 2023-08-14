let countt=0;
            let count = document.getElementById('count')
            function counttt() {
            }
            let inc = document.getElementById('inc');
            inc.addEventListener('click' , ()=>{
              countt++;
              count.innerHTML = countt;
            })
            let dec = document.getElementById('dec');
            dec.addEventListener('click' , ()=>{
              countt--;
              count.innerHTML = countt;
            })
            let reset = document.getElementById('reset');
            reset.addEventListener('click' , ()=>{
              countt = 0;
              count.innerHTML = countt;
            })