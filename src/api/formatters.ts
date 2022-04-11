// This file contains list of functions which formats api data
import { DefaultColorFilter , DefaultManufacturerFilter} from 'constants/app';
import { ColorsAPIResponse, ManufacturersAPIResponse } from 'api-types';
import { capitalize } from 'utils/common';

export const colorSelector = (data: ColorsAPIResponse): SelectOption[] => {
    const options = data.colors.map((color) => {
        return {
            value: color,
            label: capitalize(color),
        }
    });
    // Adds a default filter of all colors which is used to reset filters
    options.unshift(DefaultColorFilter);
    return options;
}

export const manufacturerSelector = (data: ManufacturersAPIResponse): SelectOption[] => {
    const options = data.manufacturers.map((manufacture) => {
        return {
            value: manufacture.name,
            label: capitalize(manufacture.name),
        }
    });
    // Adds a default filter of all colors which is used to reset filters
    options.unshift(DefaultManufacturerFilter);
    return options;
};
