import { createContext, useState } from "react";
import axios from "axios";

const newsContext = createContext();

function Provider ({ children }) {

    const [newsData, setNewsData] = useState([]);
    const [fashionData, setFashionData] = useState([]);
    const [sportsData, setSportsData] = useState([]);
    const [technologyData, setTechnologyData] = useState([]);
    const [musicData, setMusicData] = useState([]);
    const [lifestyleData, setLifestyleData] = useState([]);
    const [foodData, setFoodData] = useState([]);
    const [environmentData, setEnvironmentData] = useState([]);
    const [cryptocurrencyData, setCryptocurrencyData] = useState([]);
    const [entertainmentData, setEntertainmentData] = useState([]);

    const getLastMonthDate = () => {
        const today = new Date();
        const lastMonth = new Date(today.setMonth(today.getMonth() - 1));
        return lastMonth.toISOString().split('T')[0]; 
    };

    const fetchNews = async () => {
        const lastMonthDate = getLastMonthDate();

        // BUSINESS NEWS

        try {
            const response = await axios.get(`https://newsapi.org/v2/everything?q=business&from=${lastMonthDate}&language=en&sortBy=publishedAt&apiKey=${import.meta.env.VITE_API_KEY}`);
            setNewsData(response.data.articles);
        } catch (error) {
            console.error('Error fetching news:', error);
        }

        // FASHION NEWS

        try {
            const response = await axios.get(`https://newsapi.org/v2/everything?q=fashion&from=${lastMonthDate}&language=en&sortBy=publishedAt&apiKey=${import.meta.env.VITE_API_KEY}`);
            setFashionData(response.data.articles);
        } catch (error) {
            console.error('Error fetching news:', error);
        }

        // SPORTS NEWS

        try {
            const response = await axios.get(`https://newsapi.org/v2/everything?q=sports&from=${lastMonthDate}&language=en&sortBy=publishedAt&apiKey=${import.meta.env.VITE_API_KEY}`);
            setSportsData(response.data.articles);
        } catch (error) {
            console.error('Error fetching news:', error);
        }

        // TECHNOLOGY NEWS

        try {
            const response = await axios.get(`https://newsapi.org/v2/everything?q=technology&from=${lastMonthDate}&language=en&sortBy=publishedAt&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`);
            setTechnologyData(response.data.articles);
        } catch (error) {
            console.error('Error fetching news:', error);
        }
    
        // MUSIC NEWS

        try {
            const response = await axios.get(`https://newsapi.org/v2/everything?q=music&from=${lastMonthDate}&language=en&sortBy=publishedAt&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`);
            setMusicData(response.data.articles);
        } catch (error) {
            console.error('Error fetching news:', error);
        }
    
        // LIFESTYLE NEWS

        try {
            const response = await axios.get(`https://newsapi.org/v2/everything?q=lifestyle&from=${lastMonthDate}&language=en&sortBy=publishedAt&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`);
            setLifestyleData(response.data.articles);
        } catch (error) {
            console.error('Error fetching news:', error);
        }

        // FOOD NEWS

        try {
            const response = await axios.get(`https://newsapi.org/v2/everything?q=food&from=${lastMonthDate}&language=en&sortBy=publishedAt&apiKey=${import.meta.env.VITE_NEWS_THREE_API_KEY}`);
            setFoodData(response.data.articles);
        } catch (error) {
            console.error('Error fetching news:', error);
        }

        // ENVIRONMENT NEWS

        try {
            const response = await axios.get(`https://newsapi.org/v2/everything?q=environment&from=${lastMonthDate}&language=en&sortBy=publishedAt&apiKey=${import.meta.env.VITE_NEWS_THREE_API_KEY}`);
            setEnvironmentData(response.data.articles);
        } catch (error) {
            console.error('Error fetching news:', error);
        }

        // CRYPTOCURRENCY NEWS

        try {
            const response = await axios.get(`https://newsapi.org/v2/everything?q=cryptocurrency&from=${lastMonthDate}&language=en&sortBy=publishedAt&apiKey=${import.meta.env.VITE_NEWS_THREE_API_KEY}`);
            setCryptocurrencyData(response.data.articles);
        } catch (error) {
            console.error('Error fetching news:', error);
        }

        // ENTERTAINMENT NEWS

        try {
            const response = await axios.get(`https://newsapi.org/v2/everything?q=entertainment&from=${lastMonthDate}&language=en&sortBy=publishedAt&apiKey=${import.meta.env.VITE_NEWS_THREE_API_KEY}`);
            setEntertainmentData(response.data.articles);
        } catch (error) {
            console.error('Error fetching news:', error);
        }
    };
    
    const valueToShare = {
        newsData,
        fashionData,
        sportsData,
        technologyData,
        musicData,
        lifestyleData,
        foodData,
        environmentData,
        cryptocurrencyData,
        entertainmentData,
        fetchNews
    };

    return (
        <newsContext.Provider value={valueToShare}>
            {children}
        </newsContext.Provider>
    );
};

export { Provider };
export default newsContext; 