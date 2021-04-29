import axios from 'axios';

import {useState,useEffect} from 'react';

const useCollectData = (url)=>{

	const [fetch,setFetch] = useState({isFetching:false})
	const [dataState,setdataState] = useState({data:[]});
	const [apiurl] = useState(url);

	useEffect(()=>{
		const fetchDataFromApi = async ()=>{

			try{
				setFetch({isFetching:true})

				const response = await axios.get(apiurl)

				setdataState({...dataState, data:response.data});

			}
			catch (e){
				setFetch({...fetch, isFetching:true})
			}

		};

		fetchDataFromApi();
	},[]);

	console.log(dataState,"in use effect");

	return [dataState]

}

export default useCollectData;