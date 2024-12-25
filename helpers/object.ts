export function objToStr(obj: any) {
    if (!!!obj) return ""
    return JSON.stringify(obj)
}