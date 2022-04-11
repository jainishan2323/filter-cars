// Contains list of all apis
import { axiosInstance } from 'api/requester';
import {
    CarsAPIResponse,
    CarsFilterParams,
    ColorsAPIResponse,
    ManufacturersAPIResponse,
} from 'api-types';

export async function fetchCars(params?: CarsFilterParams): Promise<CarsAPIResponse> {
    const res = await axiosInstance.get('/api/cars', {
        params,
    });
    return res.data
}

export async function fetchColors(): Promise<ColorsAPIResponse> {
    const res = await axiosInstance.get('/api/colors')
    return res.data
}

export async function fetchManufacturers(): Promise<ManufacturersAPIResponse> {
    const res = await axiosInstance.get('/api/manufacturers');
    return res.data
}

export async function fetchCarByStock(stockNumber: number | string | undefined): Promise<ManufacturersAPIResponse> {
    if (!stockNumber) {
        throw new Error('Invalid stock id')
    }
    const res = await axiosInstance.get(`/api/cars/${stockNumber}`);
    return res.data
}