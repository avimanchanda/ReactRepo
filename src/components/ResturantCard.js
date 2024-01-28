import { CDN_URL } from "../../utils/constants";

const RestaurantCard=(props)=>{
    const {resdata}=props;
  
    return(
        <div className="res-card">
        <img className="res-logo" src={
          CDN_URL+
          resdata.info.cloudinaryImageId
        }></img>
             <h3>{resdata.info.name}</h3>
            <h4>{resdata.info.cuisines.join(", ")}</h4>
            <h4>{resdata.info.avgRating} stars</h4>
            <h4>Rs {resdata.info.costForTwo/100} FOR TWO</h4>
       

        </div>
    )
};

export default RestaurantCard;