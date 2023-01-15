/**
 * setting the default theme to light. 
 */
function setDefaultTheme(){

    const theme = localStorage.getItem("mode") || "light-theme";
    const iconMode= localStorage.getItem("iconMode") || "fa-toggle-off";
    const iconText = localStorage.getItem("iconText") || "Light Mode";
}
/**
 * setting the HTML body to the selected theme, if none selected- set to light. 
 */
function setSelectedTheme()
{
    document.body.classList.value= localStorage.getItem("mode") || "light-theme";
}

