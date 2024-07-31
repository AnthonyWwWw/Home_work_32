import { Outlet } from "react-router-dom"
import { ContentConteiner } from "./components"
import { Box }  from '@mui/material'
import Header from "../Header/index"
import Footer from "../Footer/index"

export default function Layout(){
    return(
        <ContentConteiner>
            <Header/>
            <Box sx={{marginTop: 15, flex: 1}}>
                <Outlet/>
            </Box>
            <Footer/> 
        </ContentConteiner>
    )
}