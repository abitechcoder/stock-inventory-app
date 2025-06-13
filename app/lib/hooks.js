import useSWR from "swr";
import { fetcher } from "../lib/fetcher";

const API_ENDPOINT = "https://msalehgroup.co.in/msalah/api/RestController.php";

export function useDelivery() {
    const {data, isLoading, error} = useSWR(`${API_ENDPOINT}?action=getDelivery`, fetcher)

    return {
        deliveries: data?.output,
        isLoading,
        isError: error
    }
}