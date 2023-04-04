import type {Stats} from "@/models/stats/Stats";
import axios from "axios";
import type { AxiosResponse } from "axios";

export default {
    fetchStats(): Promise<Stats> {
        return axios
            .get('/stats/stats')
            .then((response: AxiosResponse) => response.data as Stats)
    }
}
