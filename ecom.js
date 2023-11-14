let container=document.getElementById("grid-container")
let midnavigation=document.querySelectorAll(".mid-navigation li")
console.log(midnavigation)
let arr=[];


  async function fetchData(url){
    try{

        let response=await fetch(url)
        let data=await response.json();
        arr=data.products;
        console.log(arr);
        card();
        
    } catch(e){
        console.log("Error in fetching data")
    }
 }

  function card(){
    arr.forEach((product=>{
        let card=document.createElement("div");
        card.className="card";
        

        let images=document.createElement("img");
        images.src=product.thumbnail;

        let title=document.createElement("p");
        title.className="title"
        title.textContent=product.title;

        let desc=document.createElement("p");
        desc.textContent=product.description;

        let price=document.createElement("p");
        price.textContent=`${product.price} $`

        card.appendChild(images);
        card.appendChild(title)
        card.appendChild(desc);
        card.appendChild(price);
        container.appendChild(card);
    }))
    
  }
  function reset() {
    container.innerHTML = "";
  }
  midnavigation.forEach((event) => {
    event.addEventListener("click", () => {
      const productvariable = event.textContent;
      // console.log(productvariable);
      if (productvariable === 'ALL') {
        reset();
        fetchData('https://dummyjson.com/products?limit=10');
        // datafetch(urll);
      }
      else {
        reset();
        fetchData(`https://dummyjson.com/products/category/${productvariable}`);
      }
   
    });
   
  })




