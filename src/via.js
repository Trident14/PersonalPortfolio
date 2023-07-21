import React from "react";
import Product from "./Pages/productPage.js";

import gridAppII from "./Asset/gridAppII.png";
import gridAppWin from "./Asset/gridAppWin.png";
import gridAppLost from "./Asset/gridAppLost.png";
import gridAppDraw from "./Asset/gridAppDraw.png";
import gridQuest from "./Asset/gridQuest.png";
import coffeeMate from "./Asset/coffeeMate.png"

import CoffeeMateII from  "./Asset/CoffeeMateII.png"

import coffeeMateIII from  "./Asset/CoffeeMateIII.png"
import CoffeeMate1 from "./Asset/CoffeeMate1.png"
import coffeeMateV from  "./Asset/CoffeeMateV.png"
const Via = ({ LinkToPage }) => {
  // Define your cases and corresponding props for each page
  let title, description, subText1, subText2, imageUrl, bgColor, fontColor,images1,images2,images3,images4,setSize;

  switch (LinkToPage) {
    case "/gridConquest":
      title = "Grid Conquest";
      description =
        "Immerse yourself in this classic and engaging board game, where you'll be challenged by a well-balanced AI opponent.";
      subText1 =
        "Grid Conquest is an engaging iOS app that brings the classic Tic-Tac-Toe game to life using SwiftUI. This delightful project takes the timeless concept of Tic-Tac-Toe and adds a new twist by incorporating a moderate-level computer algorithm that challenges players to strategic matches. The app's intuitive user interface allows players to compete against the computer, aiming for victory while facing a clever AI opponent. The computer algorithm has been designed to provide an enjoyable challenge to players, with an emphasis on offering competition and, in its best moves, aiming to secure a win or achieve a draw.";
      subText2 =
        "Grid Connquest is a fantastic choice for users seeking a nostalgic yet thrilling gaming experience on their iOS devices, combining elegant design with strategic gameplay for endless hours of fun and entertainment.";
      imageUrl = gridQuest;
      bgColor = "#fceff1";
      fontColor = "#770012";
          images1=gridAppII;
          images2=gridAppWin;
          images3=gridAppDraw;
          images4=gridAppLost;
          setSize="-128px"
      break;
    // Add more cases for other pages if needed
    case "/CoffeeMate":
        title = "CoffeeMate";
        description =
          "Experience the Finest Coffee Ordering with Our SwiftUI-Powered iOS App";
        subText1 =
          "With a sleek and modern design, navigating the app is a breeze. You'll find an extensive menu of premium coffees from around the world, each with detailed descriptions that showcase their unique flavors and characteristics. From velvety lattes to bold espressos, our app caters to every coffee lover's preference.";
        subText2 =
          "The app features a convenient cart feature that allows you to add your favorite coffee choices and review your selections before finalizing the order. Whether you prefer a rich espresso, a frothy cappuccino, or a smooth cold brew, our app has it all. You can customize your coffee with various milk options, flavors, and sweeteners to perfectly suit your taste.          ";
        imageUrl = coffeeMate;
        bgColor = "#fceff1";
        fontColor = "#770012";
       
          images1=coffeeMateV;
          images2=CoffeeMate1;
          images3=coffeeMateIII;
          images4=CoffeeMateII;
          setSize="35px"
         

        break;

    default:
      title = "Default Title";
      description = "Default Description";
      subText1 = "Default Subtext 1";
      subText2 = "Default Subtext 2";
      imageUrl = ""; // Add a default image URL if needed
      bgColor = "#ffffff"; // Add a default background color if needed
      fontColor = "#000000"; // Add a default font color if needed
       // Add default grid app images if needed
  }

  return (
    <Product
      title={title}
      description={description}
      imageUrl={imageUrl}
      bgColor={bgColor}
      fontColor={fontColor}
      altText="CoffeeMate picture"
      LinkTo={LinkToPage}
        imgA={images1}
        imgB={images2}
        imgC={images3}
        imgD={images4}
      subText1={subText1}
      subText2={subText2}
      sizeImg={setSize}
    />
  );
};

export default Via;
