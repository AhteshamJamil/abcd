const faqs = document.querySelectorAll(".fqa");

faqs.forEach(faq =>{
    faq.addEventListener("click", () => {
        faq.classList.toggle("active");
    })
})