import React from 'react'
import "./Widgets.css"
import InfoIcon from '@mui/icons-material/Image';
import { FiberManualRecord } from '@mui/icons-material';

function Widgets() {


    const newsArticle=(heading,subtitle)=>(
        <div className="widgets_article">
            <div className="widgets_articleLeft">
                <FiberManualRecord />
            </div>
            <div className="widgets_articleRight">
                <h4>{heading}</h4>
                <p>{subtitle} </p>
            </div>
        </div>
    )

    return (
        <div className="widgets">
            <div className="widgets_header">
                <h2>LinkedIn News </h2>
                <InfoIcon />
            </div>
                {newsArticle("Burak React is back","Top news -9999 readers")} 
                {newsArticle("Coronavirus:Amasya Updates","Top news -9999 readers")} 
                {newsArticle("Tesla hits new high","Top news -9999 readers")} 
                {newsArticle("Crypto breaking out","Top news -9999 readers")} 
                {newsArticle("Dead in Amasya","Top news -9999 readers")} 
                {newsArticle("Mr.Demir about murders","Top news -9999 readers")} 
                {newsArticle("Mr.Demir about murders","Top news -9999 readers")} 
        </div>

    )
}

export default Widgets
