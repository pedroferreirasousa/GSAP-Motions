
const container = document.querySelector(".container-div");
const title = document.querySelector(".title");
const item = document.querySelectorAll(".item");
const btnStart = document.querySelector("#btn-start");


const animarItens = () =>{
    
    item.forEach((item, index) => {
    
        console.log(index);
    
        gsap.to(item, 1.5 , {
            x: (index === 0) ? 100 : (index === 1) ? 0 : -100 ,
            rotate: (index === 0 ) ? "90deg" : (index === 1) ? "0deg" : "-90deg",
            repeat: 1,  
            yoyo: true,
            ease: "power2.inOut",
            borderRadius: "50%",
            boxShadow: (index === 0) ? "15px 10px 30px 10px rgba(235, 0, 0, 0.5)" : (index === 1) ? "10px 10px 30px 10px rgba(46, 230, 0, 0.5)" : "10px 10px 30px 10px rgba(0, 4, 243, 0.5)",
            mixBlendMode: "lighten",
            backgroundColor: "transparent",
        });
    })


}

btnStart.addEventListener("click", (e) => {
    animarItens();
    e.target.disabled = true;
    e.target.innerHTML = "Aguarde...";
    setTimeout(() => {
        e.target.disabled = false;
        e.target.innerHTML = "Fazer Animação";
    }, 3000)
});




// gsap.to(item[0] , 1, {
//     x:200,
//     rotate: "360deg",
//     repeat: 1,  
//     yoyo: true,
//     ease: "power1.inOut",
//     boxShadow: "10px 10px 20px rgb(46, 230, 0)"
// })
// gsap.to(item [1], 1, {
//     x:200,
//     rotate: "360deg",
//     repeat: 1,  
//     yoyo: true,
//     ease: "power1.inOut",
//     boxShadow: "10px 10px 20px rgb(46, 230, 0)",
//     delay: 0.33,
// })
// gsap.to(item [2], 1, {
//     x:200,
//     rotate: "360deg",
//     repeat: 1,  
//     yoyo: true,
//     delay: 0.66,
//     ease: "power1.inOut",
//     boxShadow: "10px 10px 20px rgb(46, 230, 0)"
// });

// gsap.to(container, 1 , {
//     y:200,
//     rotate: "360deg",
//     repeat: 1,  
//     yoyo: true,
//     ease: "power1.inOut",
//     boxShadow: "10px 10px 20px rgb(255, 255, 255)",
//     border: "none",
// });