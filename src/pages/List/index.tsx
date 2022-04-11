import React, { useState } from 'react';
import { useFetchCarsList } from 'hooks/api-hooks';
import Filters from 'pages/List/Filters';
import CarsList from 'pages/List/CarsList';
import Pagination from 'pages/List/Pagination';
import { CarsFilterParams } from 'api-types';
import { Wrapper } from './styles';

import { Shimmer } from 'components/Shimmer';

interface FilterStateType extends CarsFilterParams{};

const List: React.FC = () => {
    const [filters, updateFilters] = useState<FilterStateType>({
        page: 1,
    })
    const { data, isLoading } = useFetchCarsList(['cars', filters], filters);

    const onFiltersUpdate = (sideFilters: CarsFilterParams) => {
        // Reset page to 0 on each filter update
        updateFilters((prevFilters) => ({
            ...prevFilters,
            ...sideFilters,
            page: 1,
        }));
    }

    const onPageUpdate = (pageNumber: number) => {
        updateFilters((prevFilters) => ({
            ...prevFilters,
            page: pageNumber,
        }))
    }

    return (
        <Wrapper>
            <Filters onChange={onFiltersUpdate} />
            <div>
                <h2>Available Cars</h2>
                {
                    isLoading ? <Shimmer width="300px" margin="8px" height="18px" /> : (
                        <h3>Showing {Number(data?.cars.length) + 10 * (Number(filters.page) - 1)} of {data?.totalCarsCount} Results</h3>
                    )
                }
                <CarsList data={data?.cars} isLoading={isLoading} />
                <Pagination
                    currentPage={filters.page}
                    totalPages={data?.totalPageCount}
                    updatePage={onPageUpdate}
                />
            </div>
        </Wrapper>
    )
}

export default List;
