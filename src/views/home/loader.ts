interface ILodge {
    id:string;
    cover:string;
    title:string;
    [key:string]:any
  }

export async function LodgesLoader() {
    try {
        const res = await fetch('http://localhost:4000/logements');
        const lodges:ILodge[] = await res.json()
        return { lodges };
    } catch (error) {
        throw Error('impossible de récupérer les données')
    }

}