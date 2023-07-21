import React from 'react';
import IosProject from '../Sections/iosProject';
import Footer from '../components/footer';
import '../Style/productPage.css';

const Product = (props) => {
  const {
    title,
    description,
    imageUrl,
    bgColor,
    fontColor,
    altText,
    LinkTo,
    imgA,
    imgB,
    imgC,
    imgD,
    subText1,
    subText2,
    sizeImg,
  } = props;

  return (
    <>
      <div className="main-section">
        <IosProject
          title={title}
          description={description}
          imageUrl={imageUrl}
          bgColor={bgColor}
          fontColor={fontColor}
          altText={altText}
          LinkTo={LinkTo}
          flag={sizeImg}
        />
        <div className="mainProduct">
          <img className="pic1" src={imageUrl} alt="dispImg1"></img>
          <img className="pic2" src={imgA} alt="dispImg2"></img>
          <img className="pic3" src={imgB} alt="dispImg3"></img>
          <img className="pic4" src={imgC} alt="dispImg4"></img>
          <img className="pic5" src={imgD} alt="dispImg5"></img>
        </div>
        <div className="SubHeading">
          <h1>{subText1}</h1>
          <h1>
           {subText2}
          </h1>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Product;
