import React, { useState } from 'react';
import Select, { SingleValue } from 'react-select';
import { useTheme } from 'styled-components';
import { useFetchColors, useFetchManufacturers } from 'hooks/api-hooks';
import { CarsFilterParams } from 'api-types';
import Button from 'components/Button';
import { FilterWrapper } from 'pages/List/styles';
import { colorSelector, manufacturerSelector } from 'api/formatters';
interface FilterProps {
    onChange: (value: SingleValue<SelectOption>) => void;
};

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
