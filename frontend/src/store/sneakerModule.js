import { ref } from "vue"

export const sneakerModule = {
    state: () => {
        return {
            sneakers: [
                {
                    id: 1,
                    title: "Мужские Кроссовки Nike Blazer Mid Suede",
                    cost: 12999,
                    img: "/icons/sneakers/sneakers-1.jpg",
                    isLiked: false,
                    inCart: false,
                },
                {
                    id: 2,
                    title: "Мужские Кроссовки Nike Air Max 270",
                    cost: 12999,
                    img: "/icons/sneakers/sneakers-2.jpg",
                    isLiked: false,
                    inCart: false,
                },
                {
                    id: 3,
                    title: "Мужские Кроссовки Nike Blazer Mid Suede",
                    cost: 8499,
                    img: "/icons/sneakers/sneakers-3.jpg",
                    isLiked: false,
                    inCart: false,
                },
                {
                    id: 4,
                    title: "Кроссовки Puma X Aka Boku Future Rider",
                    cost: 8999,
                    img: "/icons/sneakers/sneakers-4.jpg",
                    isLiked: false,
                    inCart: false,
                },
                {
                    id: 5,
                    title: "Мужские Кроссовки Under Armour Curry 8",
                    cost: 15199,
                    img: "/icons/sneakers/sneakers-5.jpg",
                    isLiked: false,
                    inCart: false,
                },
                {
                    id: 6,
                    title: "Мужские Кроссовки Nike Blazer Mid Suede",
                    cost: 11299,
                    img: "/icons/sneakers/sneakers-6.jpg",
                    isLiked: false,
                    inCart: false,
                },
                {
                    id: 7,
                    title: "Мужские Кроссовки Nike Blazer Mid Suede",
                    cost: 10799,
                    img: "/icons/sneakers/sneakers-7.jpg",
                    isLiked: false,
                    inCart: false,
                },
                {
                    id: 8,
                    title: "Мужские Кроссовки Nike LeBron XVIII",
                    cost: 16499,
                    img: "/icons/sneakers/sneakers-8.jpg",
                    isLiked: false,
                    inCart: false,
                },
                {
                    id: 9,
                    title: "Мужские Кроссовки Nike Lebron XVIII Low",
                    cost: 13999,
                    img: "/icons/sneakers/sneakers-9.jpg",
                    isLiked: false,
                    inCart: false,
                },
                {
                    id: 10,
                    title: "Мужские Кроссовки Nike Blazer Mid Suede",
                    cost: 8499,
                    img: "/icons/sneakers/sneakers-10.jpg",
                    isLiked: false,
                    inCart: false,
                },
                {
                    id: 11,
                    title: "Кроссовки Puma X Aka Boku Future Rider",
                    cost: 8999,
                    img: "/icons/sneakers/sneakers-11.jpg",
                    isLiked: false,
                    inCart: false,
                },
                {
                    id: 12,
                    title: "Мужские Кроссовки Nike Kyrie Flytrap IV",
                    cost: 11299,
                    img: "/icons/sneakers/sneakers-12.jpg",
                    isLiked: false,
                    inCart: false,
                },

            ]
        }
    },
    getters: {
        getSneakers(state)
        {
            return state.sneakers;
        }
    },
    mutations: {
        setSneakers(state, sneakers)
        {
            state.sneakers = sneakers;
        }
    },
    actions: {
    },
    namespaced: true
}