export {};

declare global {
    /**
     * Contains app global types
     * or augment existing declarations in the global namespace.
     */
    type SelectOption = {
        value: string;
        label: string;
    }

    type Person = {
        name: string;
        age: number;
    };
}