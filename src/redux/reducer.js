import spotify from "./icons8-spotify-48.png"
import instagram from "./icons8-instagram-48.png"
import tiktok from "./icons8-tiktok-48 (1).png"



const initialState = [
    {
     
        MonthlyListeners: "334000",
        followers: "47800000",
        TotalStreams: "400000",
        popularityscore: '40000000',
        engagement_rate: "731000",
        
    },
    {
       
        followers: "800000",
        TotalStreams: "566900",
        comments: "731000",
        engagement_rate: "11400",
        popularityscore:"334000"
    },
    {
        popularityscore:"334000",
        followers: "236000",
        views: "463000",
        creations: "56000",
        engagement_rate: "11400",
       
    }


]

const dataSelector = (state = initialState, action) => {
    switch (action.type) {
        case "SPOTIFY":
            return { ...state, spotify }
        case "INSTAGRAM":
            return { ...state, instagram }
        case "TIKTOK":
            return { ...state, tiktok }
        default:
            return state
    }
}

export default dataSelector;