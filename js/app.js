const darkmode = document.querySelector(".darkmode");
const body = document.querySelector('body');
const dark_icon = document.querySelector('.dark_icon');
const ligth_icon = document.querySelector('.ligth_icon');

darkmode.addEventListener( "click", () =>{
    if(document.body.classList.contains("dark")){
        document.body.classList.remove('dark');
        document.body.classList.add('light');
        dark_icon.classList.remove("dark_icon_hidden");
        ligth_icon.classList.add("light_icon_hidden");

        // darkmode.textContent = "Darkmode"
    }
    // if(!dark_icon.classList('dark_icon_an')){
    //     document.dark_icon.classList.add('dark_icon_an');
    // }
    else{
        document.body.classList.add('dark');
        ligth_icon.classList.remove("light_icon_hidden");
        dark_icon.classList.add("dark_icon_hidden");
        // darkmode.textContent = "Lightmode"
    }
})