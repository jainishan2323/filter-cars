import React, { useState } from 'react';
import Select, { SingleValue } from 'react-select';
import { useTheme } from 'styled-components';
import { useFetchColors, useFetchManufacturers } from 'hooks/api-hooks';
import { ColorsAPIResponse, ManufacturersAPIResponse, CarsFilterParams } from 'api-types';
import Button from 'components/Button';
import { FilterWrapper } from 'pages/List/styles';
import { DefaultColorFilter , DefaultManufacturerFilter} from 'pages/List/constants';

interface FilterProps {
    onChange: (value: SingleValue<SelectOption>) => void;
};

// Converts the data of api response to key value pair of type SelectOption
const colorSelector = (data: ColorsAPIResponse): SelectOption[] => {
    const options = data.colors.map((color) => {
        return {
            value: color,
            label: `${color[0].toUpperCase() + color.slice(1)}`,
        }
    });
    // Adds a default filter of all colors which is used to reset filters
    options.unshift(DefaultColorFilter);
    return options;
}

export const ColorsFilter: React.FC<FilterProps> = ({ onChange }) => {
    const { data, isLoading } = useFetchColors('colors', { select: colorSelector });
    const appTheme = useTheme();

    return (
        <div>
            <p>Colors</p>
            <Select
                defaultValue={data?.[0]}
                isLoading={isLoading}
                options={data}
                onChange={onChange}
                theme={(theme) => ({
                    ...theme,
                    colors: {
                      ...theme.colors,
                      primary25: appTheme.colors.primary,
                      primary: appTheme.colors.primary,
                    },
                })}
            />
        </div>
    )
}

const manufacturerSelector = (data: ManufacturersAPIResponse): SelectOption[] => {
    const options = data.manufacturers.map((manufacture) => {
        return {
            value: manufacture.name,
            label: `${manufacture.name[0].toUpperCase() + manufacture.name.slice(1)}`,
        }
    });
    // Adds a default filter of all colors which is used to reset filters
    options.unshift(DefaultManufacturerFilter);
    return options;
}

export const ManufacturerFilter: React.FC<FilterProps> = ({ onChange }) => {
    const { data, isLoading } = useFetchManufacturers('manufacturer', { select: manufacturerSelector });
    const appTheme = useTheme();
    return (
        <div>
            <p>Manufacturer</p>
            <Select
                defaultValue={data?.[0]}
                isLoading={isLoading}
                options={data}
                onChange={onChange}
                theme={(theme) => ({
                    ...theme,
                    colors: {
                      ...theme.colors,
                      primary25: appTheme.colors.primary,
                      primary: appTheme.colors.primary,
                    },
                })}
            />
        </div>
    )
}

interface FiltersProps {
    onChange: (filters: CarsFilterParams) => void;
}

const Filters: React.FC<FiltersProps> = ({ onChange }) => {
    const [color, setColor] = useState<string | undefined>('');
    const [manufacturer, setManufacturer] = useState<string | undefined>('');

    const onColorChange = (v: SingleValue<SelectOption>) => {
        setColor(v?.value);
    }

    const onManufacturerChange = (v: SingleValue<SelectOption>) => {
        setManufacturer(v?.value);
    }

    const onFilterChange = () => {
        onChange({
            color,
            manufacturer,
        })
    }

    return (
        <FilterWrapper>
            <ColorsFilter onChange={onColorChange} />
            <ManufacturerFilter onChange={onManufacturerChange} />
            <Button onClick={() => onFilterChange()}>
                Filter
            </Button>
        </FilterWrapper>
    )
}

export default React.memo(Filters);
