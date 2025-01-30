import { useStore } from "vuex";

export function useAddLikedItem(sneaker, store)
{
    store.getters.getSneakers.forEach((item) => {
        if(item.id === sneaker.id)
        {
            item.isLiked = true;
        }
    })
    const items = localStorage.getItem('likedSneakers');
    if(items === null)
    {
        let itemsForLiked = [];
        itemsForLiked.push(sneaker.id);
        const likedItems = JSON.stringify(itemsForLiked);
        localStorage.setItem('likedSneakers', likedItems);
    } else {
        let newLikedItems = JSON.parse(items);
        if(!newLikedItems.includes(sneaker.id))
        {
            newLikedItems.push(sneaker.id);
        }
        localStorage.setItem('likedSneakers', JSON.stringify(newLikedItems)); 
    }
}