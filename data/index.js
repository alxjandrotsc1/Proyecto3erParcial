import {servicio as servicioPageData} from "./pages/servicios"
import {testimonios as testimoniosPageData} from "./pages/testimonios"
import {nosotros as nosotrosPageData} from "./pages/nosotros"
import {eventos as eventosPageData} from "./pages/eventos"

export const getPageContext = (pagePath)=>{
    console.log("Page to Load Context:", pagePath)

    let pageVariables = {};
    console.log("Page been loaded:", pagePath);
    switch (pagePath) {
        case '/nosotros.html':           
            pageVariables = nosotrosPageData
            break;
        case '/servicios.html':
            pageVariables = servicioPageData
            break;
        case '/eventos.html':
            pageVariables = eventosPageData
            break;
        case '/testimonios.html':           
            pageVariables = testimoniosPageData
            break;
 

    }
    const finalContext = {
        ...pageVariables
    }
    return finalContext
}
