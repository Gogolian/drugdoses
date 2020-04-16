import React from 'react'
let userLang = navigator.language || navigator.userLanguage; 
const lang = {
        pl:{
             header:{
                 top: "Dawki leków u dzieci"
             }
        },
        en:{
         header:{
             top: "Drug doses..."
         }
     }
     
     
       }
const LangContext = React.createContext(userLang === "pl-PL" ? lang.pl : lang.en);
export default LangContext;


     


