export async function googleForms(route: string, init?: RequestInit): Promise<unknown> {

    if (!route || typeof route != "string") {
        throw new Error("googleForms: Se esperaba una cadena en «route»");
    }

    const urlBase: string = 'https://forms.googleapis.com';

    const action: string = `${urlBase}/${route}`;
    const response: Response = await fetch(action, init);

    try {
        const data: unknown = await response.json();
        return data;
    } catch (e) {
        const stringData: string = await response.text();
        return stringData;
    }

    return "algo" as unknown;
}