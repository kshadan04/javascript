const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");
const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading4");
const heading5 = document.querySelector(".heading5");
const heading6 = document.querySelector(".heading6");
const heading7 = document.querySelector(".heading7");


function changeText(element,text,color,time,onSuccessCallBack,OnFailureCallBack){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(element){
                element.textContent = text;
                element.style.color = color;
                resolve();
            }
            else{
                reject();
            }
        },time)
    })
}

changeText(heading1,"one","red",1000)
  .then(()=>{
    changeText(heading2,"two","green",1000)
    .then(()=>{
        changeText(heading3,"three","yellow",1000)
        .then(()=>{
            changeText(heading4,"four","Brown",1000)
            .then(()=>{
                changeText(heading5,"five","blue",1000)
                .then(()=>{
                    changeText(heading6,"six","violet",1000)
                    .then(()=>{
                        changeText(heading7,"seven","orange",1000)
                    })
                })
            })
        })
    })
  })

  changeText(heading1,"one","red",1000)
  .then(()=>{
    return changeText(heading2,"two","yellow",1000)
  })
  .then(()=>{
    return changeText(heading3,"three","green",1000)
  })
  .then(()=>{
    return changeText(heading4,"four","brown",1000)
  })
  .then(()=>{
    return changeText(heading5,"five","violet",1000)
  })
  .then(()=>{
    return changeText(heading6,"six","blue",1000)
  })
  .then(()=>{
    return changeText(heading7,"seven","Orange",1000)
  });