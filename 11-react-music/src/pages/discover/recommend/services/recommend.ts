import Request from "@/services";

export function getBanners() {
    return Request.get({
        url: "/banner"
    })
}