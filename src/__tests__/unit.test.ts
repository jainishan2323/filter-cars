import { toLocaleString, capitalize } from 'utils/common';
import { colorSelector, manufacturerSelector } from 'api/formatters';

it('Check Locale string function', () => {
    expect(toLocaleString(412345)).toEqual('412.345');
    expect(toLocaleString(undefined)).toEqual(undefined);
});

it('Validate capitalize function', () => {
    expect(capitalize('red')).toEqual('Red');
});

it('Testing color selector which formats /colors api data', () => {
    const mockApiData = {
        colors: ['red', 'green', 'blue'],
    }
    const resolvedData = [
        {
            "label": "All car colors",
            "value": "",
        },
        {
            "label": "Red",
            "value": "red",
        },
        {
            "label": "Green",
            "value": "green",
        },
        {
            "label": "Blue",
            "value": "blue",
        }
    ]
    expect(colorSelector(mockApiData)).toEqual(resolvedData);
});

it('Testing manufacturer formatter', () => {
    const mockApiData = {
        manufacturers: [
            {
                name: 'Audi',
                models: [{
                    "name": "RS3"
                }]
            },
            {
                name: 'BMW',
                models: [{
                    "name": "7er"
                }]
            }
        ],
    }
    const resolvedData = [
        {
            "label": "All manufacturers",
            "value": "",
        },
        {
            "label": "Audi",
            "value": "Audi",
        },
        {
            "label": "BMW",
            "value": "BMW",
        },
    ];
    expect(manufacturerSelector(mockApiData)).toEqual(resolvedData);
});