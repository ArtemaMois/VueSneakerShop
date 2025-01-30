import { useStore } from "vuex";

export function useLikedSneakers()
{
    const store = useStore();
    const likedIds = localStorage.getItem('likedSneakers');
    if(likedIds === null)
    {
        return [];
    }
    const likedSneakers = store.getters.getSneakers.filter((item) => likedIds.includes(item.id));
    return likedSneakers;
}