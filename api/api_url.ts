export const baseUrl: string = "https://swarupapp.in/"

export const productEnd: string = "mypagination/api/product/"
export const productListEnd:(pageno: number) => string = (pageno)=>`mypagination/api/productlist/?page=${pageno}`
