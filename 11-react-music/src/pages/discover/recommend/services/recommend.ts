import Request from "@/services";

export function getBanners() {
    return Request.get({
        url: "/banner"
    })
}
export function getHotRecommends(limit: number) {
    return Request.get({
        url: "/personalized",
        params: {
            limit
        }
    })
}