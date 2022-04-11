export function toLocaleString(value: number | undefined): string | void {
    if (!value) {
        return;
    }
    return Number(value).toLocaleString("es-ES");
}

export function capitalize(str: string): string {
    return `${str[0].toUpperCase() + str.slice(1)}`;
}
