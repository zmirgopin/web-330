    /**
================================
Title: theme.js
Author: Zahava Gopin 
Date: 3 January 2023
Description: JavaScript for WEB 330 
================================
*/

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

        /**
         * Setting the default theme to light 
         */

        setDefaultTheme();
        /**
         * This function switches the users selected website theme.
         */
        function toggleMode(x){
            let colorTheme = document.body.classList; //get the body's CSS class
            let iconMode = x.classList;//assigneign the triggered button to the current classes.
        
        /**
         * If the current body class is set to the light-theme, update the users's preferance to the dark-theme in the browsers.
         */
            if (colorTheme.value==="light-theme")
            {
                localStorage.clear();
                localStorage.setItem("mode", "dark-theme");
                localStorage.setItem("iconMode", "fa-toggle-on");
                localStorage.setItem("iconText", "Dark Mode");
            }

        /**
         * If the current body class is set to the dark-theme, update the user preference to the light-theme in the browser
         */
            else
            {
                localStorage.clear();
                localStorage.setItem("mode", "light-theme");
                localStorage.setItem("iconMode", "fa-toggle-off");
                localStorage.setItem("iconText", "Light Mode");
            }

        /**
         * Apply the updated selection to the HRML page elements 
         */
            colorTheme.value = localStorage.getItem("mode");

            iconMode.value =   `fa
            ${localStorage.getItem("iconMode")} pull-right`;

            document.getElementById("icon-text").innerHTML= localStorage.getItem("iconText");
        }
