document.addEventListener("DOMContentLoaded",()=>{
    const layer = document.querySelector(".layer");
    const img = document.querySelector(".img");
    const bottom = img.getBoundingClientRect().bottom;
    const height = img.getBoundingClientRect().height;
    const top = img.getBoundingClientRect().top;
    const width = img.getBoundingClientRect().width;
    const right = img.getBoundingClientRect().right;
    const left = img.getBoundingClientRect().left;
    const box = document.querySelector(".box");
    const centerY = (bottom + top) / 2;
    const centerX = (right + left) / 2;
    layer.style.width = `${img.offsetWidth}px`;
    box.style.width = `${img.offsetWidth}px`;
    layer.addEventListener("mousemove",(e)=>{
        img.style.transform = "translate(-50%,-50%) scale(3)";
        if ((img.offsetWidth / 2) + ((centerX - e.clientX) * 3) <= ((img.offsetWidth / 2) * 3) && (-(img.offsetWidth / 2)) <= (img.offsetWidth / 2) + ((centerX - e.clientX) * 3)) {
            img.style.left = `${(img.offsetWidth / 2) + ((centerX - e.clientX) * 3)}px`;
        } else if ((img.offsetWidth / 2) + ((centerX - e.clientX) * 3) <= ((img.offsetWidth / 2) * 3) && (-(img.offsetWidth / 2)) > (img.offsetWidth / 2) + ((centerX - e.clientX) * 3)) {
            img.style.left = `${(-(img.offsetWidth / 2))}px`;
        } else if ((img.offsetWidth / 2) + ((centerX - e.clientX) * 3) > ((img.offsetWidth / 2) * 3) && (-(img.offsetWidth / 2)) <= (img.offsetWidth / 2) + ((centerX - e.clientX) * 3)) {
            img.style.left = `${((img.offsetWidth / 2) * 3) }px`;
        }
        if ((img.offsetHeight / 2) + ((centerY - e.clientY) * 3) <= ((img.offsetHeight / 2) * 3) && (-(img.offsetHeight / 2)) <= (img.offsetHeight / 2) + ((centerY - e.clientY) * 3)) {
            img.style.top = `${(img.offsetHeight / 2) + ((centerY - e.clientY) * 3)}px`;
        } else if ((img.offsetHeight / 2) + ((centerY - e.clientY) * 3) <= ((img.offsetHeight / 2) * 3) && (-(img.offsetHeight / 2)) > (img.offsetHeight / 2) + ((centerY - e.clientY) * 3)) {
            img.style.top = `${(-(img.offsetHeight / 2))}px`;
        } else if ((img.offsetHeight / 2) + ((centerY - e.clientY) * 3) > ((img.offsetHeight / 2) * 3) && (-(img.offsetHeight / 2)) <= (img.offsetHeight / 2) + ((centerY - e.clientY) * 3)) {
            img.style.top = `${((img.offsetHeight / 2) * 3) }px`;
        }
    })
    layer.addEventListener("mouseleave",()=> {
        img.style.transform = "translate(-50%,-50%) scale(1)";
        img.style.top = `50%`;
        img.style.left = `50%`;
    })
})
