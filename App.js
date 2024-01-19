import React from "react";
import  ReactDOM  from "react-dom/client";
/**
 * 
 * Header
 *      logo
 *      navitems
 * body
 *      search bar
 *      restra container
 *          restra card
 * footer
 *      Copyright 
 *      Disclaimer
 *      Link
 */
const Header = () =>{
    return (
        <div className="header">
            <div className="logos">
                <img className="logo" src="https://png.pngtree.com/png-clipart/20220903/ourmid/pngtree-chef-restaurant-logo-png-image_6136204.png"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
} 
const RestraCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating,  sla: { deliveryTime }, locality, areaName, costForTwo} =resData?.data?.info;
  return (
    <div className="res-card">
      <img
        className="res-image"
        src={
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_600,h_450,c_fill/" +
          cloudinaryImageId
        }
        alt={name}
      />
      <h4>{name}</h4>
      <h5>{cuisines.join(", ")}</h5>
      <h5>{avgRating}</h5>
      <h5>{deliveryTime} Mins</h5>
      <h5>
        {locality}, {areaName}
      </h5>
      <h5>{costForTwo}</h5>
    </div>
  );
};

const resList = [  
{  type:"restraunt",
    data: {      
      "info": {
              "id": "326429",
              "name": "Punjabi Angithi (Vegorama Group)",
              "cloudinaryImageId": "qclueiki6wnhbk1kc83e",
              "locality": "Satyawati Colony",
              "areaName": "Ashok vihar",
              "costForTwo": "₹400 for two",
              "cuisines": [
                  "North Indian",
                  "Chinese",
                  "Punjabi",
                  "Snacks"
              ],
              "avgRating": 4.2,
              "veg": true,
              "parentId": "465050",
              "avgRatingString": "4.2",
              "totalRatingsString": "10K+",
              "promoted": true,
              "adTrackingId": "cid=10560979~p=1~eid=0000018d-2201-7fe4-23aa-baf600860113~srvts=1705672540132~83647",
              "sla": {
                  "deliveryTime": 23,
                  "lastMileTravel": 2.9,
                  "serviceability": "SERVICEABLE",
                  "slaString": "23 mins",
                  "lastMileTravelString": "2.9 km",
                  "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                  "nextCloseTime": "2024-01-19 23:00:00",
                  "opened": true
              },
              "badges": {
                  "imageBadges": [
                  {
                      "imageId": "v1695133679/badges/Pure_Veg111.png",
                      "description": "pureveg"
                  }
                  ]
              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                  "entityBadges": {
                  "textBased": {
                      
                  },
                  "imageBased": {
                      "badgeObject": [
                      {
                          "attributes": {
                          "imageId": "v1695133679/badges/Pure_Veg111.png",
                          "description": "pureveg"
                          }
                      }
                      ]
                  },
                  "textExtendedBadges": {
                      
                  }
                  }
              },
              "aggregatedDiscountInfoV3": {
                  "header": "₹125 OFF",
                  "subHeader": "ABOVE ₹199",
                  "discountTag": "FLAT DEAL"
              },
              "orderabilityCommunication": {
                  "title": {
                  
                  },
                  "subTitle": {
                  
                  },
                  "message": {
                  
                  },
                  "customIcon": {
                  
                  }
              },
              "differentiatedUi": {
                  "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                  "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {
                      
                  },
                  "video": {
                      
                  }
                  }
              },
              "reviewsSummary": {
                  
              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {
                  
              }
        },
}},
{
  type:"restraunt",
  data: { "info": {
      "id": "13102",
      "name": "Berco's -If You Love Chinese",
      "cloudinaryImageId": "ef42358bf896927c2f1ed9bb90474092",
      "locality": "GTB Nagar",
      "areaName": "GTB Nagar",
      "costForTwo": "₹500 for two",
      "cuisines": [
        "Asian",
        "Thai",
        "Chinese",
        "Seafood",
        "Desserts",
        "Beverages"
      ],
      "avgRating": 4.2,
      "parentId": "471817",
      "avgRatingString": "4.2",
      "totalRatingsString": "5K+",
      "promoted": true,
      "adTrackingId": "cid=10709025~p=3~eid=0000018d-2201-7fe4-23aa-baf800860378~srvts=1705672540132~83647",
      "sla": {
        "deliveryTime": 35,
        "lastMileTravel": 4.7,
        "serviceability": "SERVICEABLE",
        "slaString": "35 mins",
        "lastMileTravelString": "4.7 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-01-20 00:00:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "newg.png",
            "description": "Gourmet"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "imageId": "newg.png",
                  "description": "Gourmet"
                }
              }
            ]
          },
          "textExtendedBadges": {
            
          },
          "textBased": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "30% OFF",
        "subHeader": "UPTO ₹75"
      },
      "orderabilityCommunication": {
        "title": {
          
        },
        "subTitle": {
          
        },
        "message": {
          
        },
        "customIcon": {
          
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
  }}},
{ type:"restraunt",
  data:{"info": {
      "id": "20019",
      "name": "Hudson Chopsticks",
      "cloudinaryImageId": "qov2jgbxo6yig6lc9kwa",
      "locality": "Delhi University",
      "areaName": "GTB Nagar",
      "costForTwo": "₹300 for two",
      "cuisines": [
        "Chinese",
        "Thai",
        "Asian",
        "Snacks",
        "Tibetan",
        "Nepalese",
        "Seafood",
        "Beverages",
        "Desserts",
        "Barbecue",
        "Grill",
        "Fast Food"
      ],
      "avgRating": 4.3,
      "parentId": "7129",
      "avgRatingString": "4.3",
      "totalRatingsString": "10K+",
      "promoted": true,
      "adTrackingId": "cid=10708039~p=6~eid=0000018d-2201-7fe4-23aa-bafb00860637~srvts=1705672540132~83647",
      "sla": {
        "deliveryTime": 35,
        "lastMileTravel": 4.6,
        "serviceability": "SERVICEABLE",
        "slaString": "35 mins",
        "lastMileTravelString": "4.6 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-01-20 02:00:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "textBased": {
            
          },
          "imageBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "50% OFF",
        "subHeader": "UPTO ₹100"
      },
      "orderabilityCommunication": {
        "title": {
          
        },
        "subTitle": {
          
        },
        "message": {
          
        },
        "customIcon": {
          
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    }}}
,{ type:"restraunt",
  data:{"info": {
      "id": "76218",
      "name": "Tasty noodle twist",
      "cloudinaryImageId": "u9melcto0oxcgkgzoxbx",
      "locality": "2nd Phase",
      "areaName": "Model Town 2",
      "costForTwo": "₹400 for two",
      "cuisines": [
        "Chinese",
        "Pan-Asian",
        "Snacks"
      ],
      "avgRating": 4.2,
      "parentId": "15732",
      "avgRatingString": "4.2",
      "totalRatingsString": "1K+",
      "promoted": true,
      "adTrackingId": "cid=10722143~p=7~eid=0000018d-2201-7fe4-23aa-bafc00860774~srvts=1705672540132~83647",
      "sla": {
        "deliveryTime": 37,
        "lastMileTravel": 5.6,
        "serviceability": "SERVICEABLE",
        "slaString": "37 mins",
        "lastMileTravelString": "5.6 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-01-20 00:00:00",
        "opened": true
      },
      "badges": {
        "textExtendedBadges": [
          {
            "iconId": "guiltfree/GF_Logo_android_3x",
            "shortDescription": "options available",
            "fontColor": "#7E808C"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textExtendedBadges": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "",
                  "shortDescription": "options available",
                  "fontColor": "#7E808C",
                  "iconId": "guiltfree/GF_Logo_android_3x"
                }
              }
            ]
          },
          "textBased": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "40% OFF",
        "subHeader": "UPTO ₹80"
      },
      "orderabilityCommunication": {
        "title": {
          
        },
        "subTitle": {
          
        },
        "message": {
          
        },
        "customIcon": {
          
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    }}},

]

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {
          resList.map((data, index) => 
            <RestraCard key={data.id} resData={data}/>
          )
        }
      </div>
    </div>
  );
};

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <AppLayout />
);

