import * as request from "../utils/request";

export const search = async (q) => {
    try {
        return await request.get(`users`, {
            params: {
                q: q
            }
        })

    } catch (error) {
        console.log(error)
    }
}