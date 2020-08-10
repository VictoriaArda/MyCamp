import React from "react";
import {  MDBRow, MDBCol, MDBCard, MDBCardBody, MDBMask, MDBIcon, MDBView, MDBBadge } from "mdbreact";
import Head from "../components/Files/Head"

const Features = () => {

  const newsStyle = {
    borderBottom: "0px solid #e0e0e0",
    marginBottom: "1.5rem" ,
  };

  return (
    <MDBCard
    className="my-5 px-5 mx-auto"
    style={{ fontWeight: 300, maxWidth: "90%" }}
  >
    <Head></Head>
    <MDBCardBody style={{ paddingTop: 0 }}>
      <h2 className="h1-responsive font-weight-bold my-5 text-center">
      Get out and stretch your imagination
      </h2>
      <p className="dark-grey-text mx-auto mb-5 w-75 text-center">
      You don't have to go far to find a world of wonder.
      </p>
      <MDBRow>
        <MDBCol md="12" lg="4" className="mb-lg-0 mb-5">
          <MDBView hover rounded className="z-depth-1-half mb-4">
            <img
              className="img-fluid"
              src="https://mdbootstrap.com/img/Photos/Others/images/86.jpg"
              alt=""
            />
            <a href="https://adventure.com/">
              <MDBMask overlay="white-slight" className="waves-light" />
            </a>
          </MDBView>
          <MDBRow className="mb-3">
            <MDBCol size="12">
              <a href="https://adventure.com/">
                <MDBBadge color="pink">
                  <MDBIcon icon="camera" className="pr-2" aria-hidden="true" />
                  Adventure
                </MDBBadge>
              </a>
            </MDBCol>
          </MDBRow>
          <div className="d-flex justify-content-between" style={newsStyle}>
            <MDBCol size="11" className="text-truncate pl-0 mb-3">
              <a href="https://www.nationalgeographic.com/adventure/" className="font-weight-bold">
                This is title of the news
              </a>
            </MDBCol>
            <a href="https://www.nationalgeographic.com/adventure/">
              <MDBIcon icon="angle-double-right" />
            </a>
          </div>
          <div className="d-flex justify-content-between" style={newsStyle}>
            <MDBCol size="11" className="text-truncate pl-0 mb-3">
              <a href="https://www.eatthis.com/food-swaps-cut-calories/">24 Food Swaps That Slash Calories.</a>
            </MDBCol>
            <a href="https://www.eatthis.com/food-swaps-cut-calories/">
              <MDBIcon icon="angle-double-right" />
            </a>
          </div>
          <div className="d-flex justify-content-between" style={newsStyle}>
            <MDBCol size="11" className="text-truncate pl-0 mb-3">
              <a href="https://saltandwind.com/recipes/279-ginger-beet-martini-cocktail-recipe">How to Make a Beet Cocktail?</a>
            </MDBCol>
            <a href="https://saltandwind.com/recipes/279-ginger-beet-martini-cocktail-recipe">
              <MDBIcon icon="angle-double-right" />
            </a>
          </div>
          <div className="d-flex justify-content-between" style={newsStyle}>
            <MDBCol size="11" className="text-truncate pl-0 mb-3">
              <a href="https://www.health.com/weight-loss/reasons-always-hungry">8 Sneaky Reasons You're Always Hungry.</a>
            </MDBCol>
            <a href="https://www.health.com/weight-loss/reasons-always-hungry">
              <MDBIcon icon="angle-double-right" />
            </a>
          </div>
          <div className="d-flex justify-content-between mb-4">
            <MDBCol size="11" className="text-truncate pl-0 mb-3">
              <a href="https://www.pressurecookingtoday.com/top-10-pressure-cooker-recipes-2014/">5 Pressure Cooker Recipes You Need to Try.</a>
            </MDBCol>
            <a href="https://www.pressurecookingtoday.com/top-10-pressure-cooker-recipes-2014/">
              <MDBIcon icon="angle-double-right" />
            </a>
          </div>
        </MDBCol>

        <MDBCol md="12" lg="4" className="mb-lg-0 mb-5">
          <MDBView hover rounded className="z-depth-1-half mb-4">
            <img
              className="img-fluid"
              src="https://mdbootstrap.com/img/Photos/Others/images/31.jpg"
              alt=""
            />
            <a href="https://www.nytimes.com/section/travel">
              <MDBMask overlay="white-slight" className="waves-light" />
            </a>
          </MDBView>
          <MDBRow className="mb-3">
            <MDBCol size="12">
              <a href="https://www.nytimes.com/section/travel">
                <MDBBadge color="deep-orange">
                  <MDBIcon icon="plane" className="pr-2" aria-hidden="true" />
                  Travel
                </MDBBadge>
              </a>
            </MDBCol>
          </MDBRow>
          <div className="d-flex justify-content-between" style={newsStyle}>
            <MDBCol size="11" className="text-truncate pl-0 mb-3">
              <a href="https://www.nytimes.com/2020/08/07/travel/Canada-border-crossings-coronavirus.html" className="font-weight-bold">
              Canada to U.S. Visitors: Please Don’t Sneak Across the Border
              </a>
            </MDBCol>
            <a href="https://www.nytimes.com/2020/08/07/travel/Canada-border-crossings-coronavirus.html">
              <MDBIcon icon="angle-double-right" />
            </a>
          </div>
          <div className="d-flex justify-content-between" style={newsStyle}>
            <MDBCol size="11" className="text-truncate pl-0 mb-3">
              <a href="https://izea.com/2019/01/16/2019-blog-trends/">Trends in the blogosphere for 2020.</a>
            </MDBCol>
            <a href="https://izea.com/2019/01/16/2019-blog-trends/">
              <MDBIcon icon="angle-double-right" />
            </a>
          </div>
          <div className="d-flex justify-content-between" style={newsStyle}>
            <MDBCol size="11" className="text-truncate pl-0 mb-3">
              <a href="https://www.tripadvisor.com/Restaurants-g37611-zfp30-Warsaw_Indiana.html">Where can you eat the best lunch in Warsaw?</a>
            </MDBCol>
            <a href="https://www.tripadvisor.com/Restaurants-g37611-zfp30-Warsaw_Indiana.html">
              <MDBIcon icon="angle-double-right" />
            </a>
          </div>
          <div className="d-flex justify-content-between" style={newsStyle}>
            <MDBCol size="11" className="text-truncate pl-0 mb-3">
              <a href="https://www.techradar.com/news/best-travel-camera">What camera is worth taking for holidays?</a>
            </MDBCol>
            <a href="https://www.techradar.com/news/best-travel-camera">
              <MDBIcon icon="angle-double-right" />
            </a>
          </div>
          <div className="d-flex justify-content-between mb-4">
            <MDBCol size="11" className="text-truncate pl-0 mb-3">
              <a href="https://www.opodo.co.uk/blog/reasons-visit-lisbon/#:~:text=Lisbon%20is%2C%20among%20other%20things,colourful%20tiles%20and%20amazing%20food.&text=The%20city%20itself%20can%20definitely,visit%20the%20capital%20of%20Portugal.">Why should you visit Lisbon?</a>
            </MDBCol>
            <a href="https://www.opodo.co.uk/blog/reasons-visit-lisbon/#:~:text=Lisbon%20is%2C%20among%20other%20things,colourful%20tiles%20and%20amazing%20food.&text=The%20city%20itself%20can%20definitely,visit%20the%20capital%20of%20Portugal.">
              <MDBIcon icon="angle-double-right" />
            </a>
          </div>
        </MDBCol>

        <MDBCol md="12" lg="4" className="mb-lg-0 mb-5">
          <MDBView hover rounded className="z-depth-1-half mb-4">
            <img
              className="img-fluid"
              src="https://mdbootstrap.com/img/Photos/Others/images/52.jpg"
              alt=""
            />
            <a href="https://www.nature.com/">
              <MDBMask overlay="white-slight" className="waves-light" />
            </a>
          </MDBView>
          <MDBRow className="mb-3">
            <MDBCol size="12">
              <a href="https://www.nature.com/">
                <MDBBadge color="success">
                  <MDBIcon icon="leaf" className="pr-2" aria-hidden="true" />
                  Nature
                </MDBBadge>
              </a>
            </MDBCol>
          </MDBRow>
          <div className="d-flex justify-content-between" style={newsStyle}>
            <MDBCol size="11" className="text-truncate pl-0 mb-3">
              <a href="https://www.pbs.org/wnet/nature/topic/amazon-rainforest-experience/" className="font-weight-bold">
              Amazon Rainforest: An Interactive Experience
              </a>
            </MDBCol>
            <a href="https://www.pbs.org/wnet/nature/topic/amazon-rainforest-experience/">
              <MDBIcon icon="angle-double-right" />
            </a>
          </div>
          <div className="d-flex justify-content-between" style={newsStyle}>
            <MDBCol size="11" className="text-truncate pl-0 mb-3">
              <a href="https://www.greenbelly.co/pages/animal-tracks-identification-guide">
                How to recognize the footsteps of wild animals?
              </a>
            </MDBCol>
            <a href="https://www.greenbelly.co/pages/animal-tracks-identification-guide">
              <MDBIcon icon="angle-double-right" />
            </a>
          </div>
          <div className="d-flex justify-content-between" style={newsStyle}>
            <MDBCol size="11" className="text-truncate pl-0 mb-3">
              <a href="https://theculturetrip.com/europe/poland/articles/the-10-most-beautiful-national-parks-in-poland/">National Parks in Poland.</a>
            </MDBCol>
            <a href="https://theculturetrip.com/europe/poland/articles/the-10-most-beautiful-national-parks-in-poland/">
              <MDBIcon icon="angle-double-right" />
            </a>
          </div>
          <div className="d-flex justify-content-between" style={newsStyle}>
            <MDBCol size="11" className="text-truncate pl-0 mb-3">
              <a href="https://mygreentrip.com/">Traveling without littering the planet.</a>
            </MDBCol>
            <a href="https://mygreentrip.com/">
              <MDBIcon icon="angle-double-right" />
            </a>
          </div>
          <div className="d-flex justify-content-between mb-4">
            <MDBCol size="11" className="text-truncate pl-0 mb-3">
              <a href="https://rainforestfoundation.org/10-things-you-can-do-save-the-rainforest/">How to protect rainforests?</a>
            </MDBCol>
            <a href="https://rainforestfoundation.org/10-things-you-can-do-save-the-rainforest/">
              <MDBIcon icon="angle-double-right" />
            </a>
          </div>
        </MDBCol>
      </MDBRow>
    </MDBCardBody>
  </MDBCard>
);
}


export default Features;