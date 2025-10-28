import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types"; // Import prop-types
import axios from "axios"
export const StoreContext = createContext(null);

export const StoreContextProvider = (props) => {
  const [cartItem, setcartItem] = useState({});
  const url = "https://family-food-app-backend.onrender.com"
  const [token, setToken] = useState("");
  const [food_list, setFoodList] = useState([])  

  const addToCart = async (itemId) => {
    if(!cartItem[itemId]){
        setcartItem(( prev )=>({...prev, [itemId]:1}));
    }
    else{
        setcartItem(( prev )=>({...prev, [itemId]:prev[itemId]+1}));
    }
    if(token){
      await axios.post(url+"/api/cart/add",{itemId},{headers:{token}});    
    }
  };

  const removeFromcart = async (itemId) => {

      setcartItem(( prev )=>({...prev, [itemId]:prev[itemId]-1}))
      if(token){
        await axios.post(url+"/api/cart/delete",{itemId},{headers:{token}});
      }
  };

  useEffect(() => {
    console.log(cartItem);
  }, [cartItem]);

  const getTotalcartAmount = ()=> {
    let totalamount = 0;
    for(const item in cartItem){
        if(cartItem[item]>0){
            let iteminfo = food_list.find((product)=>product._id === item);      
            if(iteminfo){
                totalamount += iteminfo.price* cartItem[item];
            }  
            
        }
        
    }
    return totalamount;
  }
  const fetchFoodList = async () => {
    const response = await axios.get(url+"/api/food/list");    
    setFoodList(response.data.data);  
  }
 
 const loadCartData = async (token) => {
      try {
        const response = await axios.post(url + "/api/cart/get", {}, { headers: { token } });
        setcartItem(response.data.cartData);
      } catch (error) {
        console.error(error);
      }
  }
     
  useEffect(()=>{
    
      async function loadData() {
        await fetchFoodList()  
        if(localStorage.getItem("token")){
          setToken(localStorage.getItem("token"));
          await loadCartData(localStorage.getItem("token"));      
        }  
      }
      loadData(); 
    
  },[])

  const contextValue = {
    food_list,
    cartItem,
    setcartItem,
    addToCart,
    removeFromcart,
    getTotalcartAmount,
    url,
    token,
    setToken,
    loadCartData
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

// Add prop-types validation
StoreContextProvider.propTypes = {
  children: PropTypes.node.isRequired, // Ensure children are passed and are valid React nodes
};

export default StoreContextProvider;
