import Introduction from "../Sections/intro"
import "../Style/main.css"
import ispayMain from '../Asset/ispayMain.png'
import Project from "../Sections/project"
import coffeeMate from "../Asset/coffeeMate.png"
import rps from "../Asset/rps.png"
import IosProject from "../Sections/iosProject"
import gridQuest from "../Asset/gridQuest.png"
import Footer from "./footer"



const MainSection = () =>{
    return(
        <>
        <div className="main-section">
            <Introduction />
                <div className="tag-line">
                    <h3>Exploring New Frontiers in Development by transforming ideas into reality.</h3>
                </div>
                
                <Project 
                    title="isPay App"
                    description="isPay, a user-friendly banking application created by leveraging the power of the MERN stack"
                    imageUrl={ispayMain}
                    altText="ispay picture"
                    urlTo={"https://ispayapp.onrender.com/"}
                />
            <div id="project">
                <IosProject
                    title="Grid Conquest"
                    description="Immerse yourself in this classic and engaging board game, where you'll be challenged by a well-balanced AI opponent."
                    imageUrl={gridQuest}
                    bgColor="#fceff1"
                    fontColor="#770012"
                    altText="CoffeeMate picture"
                    LinkTo="/gridConquest"
                    flag="-128px"


                />

                <Project
                    title="Rock-Paper-Scissors"
                    description="Unleash Your Inner Champion: Rock, Paper, Scissors - The Classic Showdown!"
                    imageUrl={rps}
                    altText="Rock-Paper-Scissors picture"
                    bgColor="#EDE4FF"
                    fontsize="25px" 
                    txtcolor="#D7BBF5"
                    urlTo={"https://trident14.github.io/RockPaperScissor/"}
                />


                <IosProject
                    title="Coffee Mate"
                    description="Experience the Finest Coffee Ordering with Our SwiftUI-Powered iOS App"
                    imageUrl={coffeeMate}
                    altText="CoffeeMate picture"
                    LinkTo="/CoffeeMate"
                    flag="35px"
                />
                </div>
                <div id="contact">
                <Footer />
                </div>
            </div>
        </>
    )
}

export default MainSection