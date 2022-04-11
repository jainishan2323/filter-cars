declare module 'api-types' {
    interface CarsAPIResponse {
        cars: Cars[];
        totalPageCount: number;
        totalCarsCount: number;
    };
    
    interface CarByStockNumberAPIResponse {
        car: Cars;
    }

    interface CarsFilterParams {
        color?: string;
        manufacturer?: string;
        page?: number;
    }

    interface Cars {
        stockNumber: number;
        manufacturerName: string;
        modelName: string;
        mileage: {
            number: number;
            unit: string;
        };
        fuelType: string;
        color: string;
        pictureUrl: string;
    }

    interface ColorsAPIResponse {
        colors: string[];
    }

    type Manufacture = {
        name: string;
        models: Record<string, string>[]
    }

    interface ManufacturersAPIResponse {
        manufacturers: Manufacture[]
    }
}