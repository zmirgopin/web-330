
function setDefaultTheme(){

    const theme = localStorage.getItem("mode") || "light-theme";
    const iconMode= localStorage.getItem("iconMode") || "fa-toggle-off";
    const iconText = localStorage.getItem("iconText") || "Light Mode";
}

function setSelectedTheme()
{
    document.body.classList.value= localStorage.getItem("mode") || "light-theme";
}

