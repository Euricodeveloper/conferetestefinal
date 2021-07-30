

let BASE = 'http://localhost:3000/';

export default {
    getCategories: async () => {
        const res = await fetch(BASE)
        const json = await res.json();
        return json;
            },

     getProducts: async (search, page, category) => {
        let fields = {}
            if(search !== ''){
                fields.search = search;
            }
            if(page > 0){
                fields.page = page;
            }

            if(category !== 0){
                fields.category = category;
            }

        let queryString = new URLSearchParams(fields).toString();

        const res = await fetch(BASE+'posts?id'+queryString);
        const json = await res.json();
        return json;
    }
};