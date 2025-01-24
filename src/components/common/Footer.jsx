import "@fortawesome/fontawesome-free/css/all.min.css";
import React from 'react'
import socialMedia from "../../data/iconData";
import menuData from "../../data/navBar";
import logo from "../../assets/Logo.svg"
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-cyan-50">
        <div>
            <div>
                <img src={logo} alt="Not" />
            </div>
            <div>
                {
                    menuData.map( (data, index) => {
                        return(
                            <div key={index}>
                                <Link to={data.url}>{data.name}</Link>
                            </div>
                        )
                    })
                }
            </div>
            <div>
                <div>

                </div>
                <div>
                    {
                        socialMedia.map( (icon, index) => {
                            return(
                                <div>
                                    <Link to={icon.link}>{icon.icon}</Link>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer