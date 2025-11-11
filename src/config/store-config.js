export function getItem(kalit){
    try {
    const qiymatlar=localStorage.getItem(kalit);
    if(!qiymatlar)return undefined;
    return JSON.parse(qiymatlar)
    } catch (error) {
        console.log(error)
        return undefined

    }
}


export function saveState(kalit, data) {
    try {
        const qiymat = JSON.stringify(data)
        localStorage.setItem(kalit, qiymat)
        console.log("saqlandi")
    } catch (errro) {
        console.log(errro)
        return errro
    }
}