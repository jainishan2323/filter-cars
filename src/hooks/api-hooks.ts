import {
    useQuery,
    UseQueryOptions,
    QueryKey,
} from 'react-query'
import { AxiosError } from 'axios'
import { fetchCars, fetchColors, fetchManufacturers, fetchCarByStock } from 'api/heroku';
import {
    CarsAPIResponse,
    CarsFilterParams,
    ColorsAPIResponse,
    ManufacturersAPIResponse,
    CarByStockNumberAPIResponse,
} from 'api-types';

export function useFetchCarsList<TData = CarsAPIResponse>(
    key: QueryKey,
    payload: CarsFilterParams,
    options?: UseQueryOptions<CarsAPIResponse, AxiosError, TData>
) {
    return useQuery(key, () => fetchCars(payload), options)
}

export function useFetchColors<TData = ColorsAPIResponse>(
    payload: QueryKey,
    options?: UseQueryOptions<ColorsAPIResponse, AxiosError, TData>
) {
    return useQuery(payload, fetchColors, options);
}

export function useFetchManufacturers<TData = ManufacturersAPIResponse>(
    payload: QueryKey,
    options?: UseQueryOptions<ManufacturersAPIResponse, AxiosError, TData>
) {
    return useQuery(payload, fetchManufacturers, options);
}

export function useFetchCarByStockNumber<TData = CarByStockNumberAPIResponse>(
    key: QueryKey,
    stockNumber: number | string | undefined,
    options?: UseQueryOptions<ManufacturersAPIResponse, AxiosError, TData>
) {
    return useQuery(key, () => fetchCarByStock(stockNumber), options);
}
