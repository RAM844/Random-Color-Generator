let btn = document.getElementById("clrBtn");
        btn.addEventListener("click",bgChange);

        function bgChange() {
            let temp = random();
           let temp1 = document.body.style.backgroundColor = temp;
           document.getElementById("clr").textContent = temp;
        }
        function random() {
            let val = "0123456789ABCDEF";
            let cons = "#";
            for(let i = 0; i<6; i++){
                cons+=val[Math.floor(Math.random()*16)];
            }
            console.log(cons);
            return cons;
        }