import RestaurantCard from "./ResturantCard.js";
import axios from "axios";
import resList from "../../utils/mockData.js";

import { useState,useEffect } from "react";

const Body=()=>{

    //State Variable

    const [ListOfResturants,setListOfResturants]=useState([]);

    //Normal JS Variable
    let ListOfResturants2=[ 
        {
        data: {
          id: "334475",
          name: "KFC",
          uuid: "eaed0e3b-7c0e-4367-8f59-f41d309fb93a",
          cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
          cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
          costForTwo: 40000,
          deliveryTime: 36,
          minDeliveryTime: 36,
          maxDeliveryTime: 36,
          avgRating: "3.8",
        },
        
        
      } ,
      {
        data: {
          id: "334477",
          name: "Dominos",
          uuid: "eaed0e3b-7c0e-4367-8f59-f41d309fb93a",
          cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
          cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
          costForTwo: 40000,
          deliveryTime: 36,
          minDeliveryTime: 36,
          maxDeliveryTime: 36,
          avgRating: "4.5",
        },
        
        
      }    ,
      {
        data: {
          id: "334479",
          name: "MCD",
          uuid: "eaed0e3b-7c0e-4367-8f59-f41d309fb93a",
          cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
          cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
          costForTwo: 40000,
          deliveryTime: 36,
          minDeliveryTime: 36,
          maxDeliveryTime: 36,
          avgRating: "4.1",
        },
        
        
      }   ];

      
      useEffect(  ()=>{
        fetchData();
     },[]);



      const fetchData= async ()=>{
        const response=await axios.get("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65491729999999&lng=77.1912904&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );

     //   const data1=await fetch("https://instafood.onrender.com/api/restaurants?lat=12.9351929&lng=77.62448069999999");
        const data=response.data.data.cards[2].card.card.gridElements?.infoWithStyle.restaurants;
        //const json=await data?.json();
       // setListOfResturants(resList);
       // console.log(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      //setListOfResturants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    //  setListOfResturants(json?.data1?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setListOfResturants(data);
  
  };

      


    return(
        <div className="body">
            <div className="filter">
            <button className="filter-btn" onClick={()=>{
                //Filter Logic Here
                const filteredList=ListOfResturants.filter(res=>res.data.avgRating>4);
                setListOfResturants(filteredList);
                console.log(ListOfResturants);
            }}>Top Rated Resturants</button>
            </div>
            
            <div className="res-container">
            
                 {
                    
                    ListOfResturants?.map( (obj)=>(
                      
                        console.log(obj),
                      
                        <RestaurantCard key={obj?.info?.id} resdata={obj}/>

                    )
                    )
                    } 
                 

            </div>
        </div>
    )
};

export default Body;