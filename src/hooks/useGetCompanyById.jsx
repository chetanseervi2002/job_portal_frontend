import { setSingleCompany } from '@/redux/companySlice';
import { VITE_COMPANY_API_END_POINT } from '@/utils/constant';
import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const useGetCompanyById = (companyId) => {
    const dispatch = useDispatch();
    
    useEffect(() => {
    // if (!companyId) {
    //     console.warn("Company ID is undefined. Skipping API call.");
    //     return;
    // }
    // dispatch(setSingleCompany(null));
    const fetchSingleCompany = async () => {
        try {
          console.log("This is You");
          console.log(`"This is yours ${VITE_COMPANY_API_END_POINT}/get/${companyId}"`);
            const res = await axios.get(`${import.meta.env.VITE_COMPANY_API_END_POINT}/get/${companyId}`, {
              withCredentials: true,
            });
            console.log(`"This is Mine ${VITE_COMPANY_API_END_POINT}/get/${companyId}"`);
            console.log("ye apni Company hai:");
            console.log("ye apni Company hai:", res.data.company);
            if(res.data.success){
                dispatch(setSingleCompany(res.data.company));
            }
        } catch (error) {
            console.log(error);
        }
    }
    fetchSingleCompany();
  },[companyId, dispatch])
}

export default useGetCompanyById