import { Product } from '@/utils/interfaces/productInterface'
import { create } from 'zustand'
import axiosInstance from '../../api/axiosInstance'
import { productEnd } from '../../api/api_url'

interface ProductState {
    products: Product[],
    isLoading: boolean,
    error: null | string,
    addProduct: (data: FormData) => Promise<any>
    fetchProduct: () => Promise<Product[]>,
}

export const productStore = create<ProductState>((set,get) => ({
    products: [],
    isLoading: false,
    error: null,
    addProduct: async (data) => {
        set({ isLoading: true, error: null })
        try {
            const res = await axiosInstance.post(productEnd, data)
            console.log("Adding response", res);
            const list=await get().fetchProduct();
            console.log("List",list);
            
            set({ isLoading: false,products:list })
            return res.status;
        } catch (error) {
            console.log("Error to add data");
            set({ error: "Error to add data", isLoading: false })
        }
    },    
    fetchProduct: async () => {
        set({ isLoading: true ,error:null})
        try {
            const res = await axiosInstance.get(productEnd)
            console.log("Api response:", res)
            set({products:res?.data?.data,isLoading:false })
            return res?.data?.data;
        } catch (error) {
            console.log("Error to fetch data");
            set({ error: "Error to fetch data",isLoading:false  })
        } 
    }
        

}))



