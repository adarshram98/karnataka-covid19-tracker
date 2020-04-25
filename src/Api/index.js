import axios from 'axios'

const url=' https://api.covid19india.org/state_district_wise.json'

export const fetchData = async () =>{
    try {
        const {data:{Karnataka}} = await axios.get(url);
        return {Karnataka};
    } catch (error) {
        
    }
}