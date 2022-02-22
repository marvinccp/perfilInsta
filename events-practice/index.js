let obj = [
    {id:1, on:false}, 
    {id:11, on:false}, 
    {id:2, on:false}, 
    {id:3, on:false}, 
    {id:9, on:false}, 
    {id:4, on:false}, 
    {id:5, on:false}, 
    {id:10, on:false}, 
    {id:6, on:false}, 
    {id:7, on:false}, 
    {id:8, on:false}, 
    {id:12, on:false}, 
]

const box = obj.map(box => {
    const container = document.getElementById('container')
    const caja = document.createElement('div')
    caja.classList.add('box');
    container.appendChild(caja)

    caja.addEventListener("click", () => {

        switch (box.id) {
          case 1:
            caja.classList.toggle("blackBox");
            break;
          case 2:
            caja.classList.toggle("redBox");
            break;

          case 3:
            caja.classList.toggle("blueBox");
            break;
          case 4:
            caja.classList.toggle("orangeBox");
            break;
          case 5:
            caja.classList.toggle("greyBox");
            break;
          case 6:
            caja.classList.toggle("greenBox");
            break;
          default:
              caja.classList.toggle("purpleBox");
            break;
        }
      
    });
})


