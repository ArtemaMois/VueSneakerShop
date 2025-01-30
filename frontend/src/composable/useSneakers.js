import { onMounted, ref } from "vue";
import axios from "axios";

export function useSneakers()
{
    const sneakers = ref([]);
    const page = ref(0);
    const nextPagerRef = ref('');

    const fetching = async () => {
        try{
            const response = await axios.get('http://localhost:90/api/sneakers');
            sneakers.value = response.data.sneakers.data;
            nextPagerRef.value = response.data.sneakers.next_page_url;
        } catch (e) {
            alert(e);
        }
    }

    onMounted(fetching) 
    {
        return {
            sneakers,
            nextPagerRef
        };
    }
}