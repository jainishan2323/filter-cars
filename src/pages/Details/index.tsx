import React from 'react';
import { ImageWrapper, DetailsWrapper, SaveControl } from 'pages/Details/styles';
import Button, { BUTTON_TYPES } from 'components/Button';
import { useParams, useNavigate } from 'react-router-dom';
import { useFetchCarByStockNumber } from 'hooks/api-hooks';
import { useLocalStorage } from 'hooks/common';
import { SAVED_TEXT, SAVE_TEXT } from 'pages/Details/constants';
import { toLocaleString } from 'utils/common';
import { Shimmer } from 'components/Shimmer';

const Details: React.FC = () => {
    const navigate = useNavigate();
    const { stockNumber } = useParams();
    const { data, isLoading } = useFetchCarByStockNumber(['car-details', stockNumber], stockNumber);
    const [value, setValue] = useLocalStorage('savedCars', {});

    const updateSave = () => {
        const updatedValue = value[`${stockNumber}`] ? false : true;
        setValue({...value, [`${stockNumber}`]: updatedValue})
    }

    return (
        <div>
           <ImageWrapper>
               <img src={data?.car.pictureUrl} alt={data?.car.modelName} />
            </ImageWrapper>
            <DetailsWrapper>
                <div>
                    <Button type={BUTTON_TYPES.LINK} onClick={() => navigate('/')}>
                        ◀ Back to cars list
                    </Button>
                    {
                        isLoading ? <Shimmer height="24px"/> : <h1>{data?.car.manufacturerName} {data?.car.modelName}</h1>
                    }
                    {
                        isLoading ? <Shimmer height="18px"/> : (
                            <h3>
                                <span>Stock # {data?.car.stockNumber}</span>
                                <span> - {toLocaleString(data?.car.mileage?.number)}</span>
                                <span> {data?.car.mileage?.unit}</span>
                                <span> - {data?.car.fuelType}</span>
                                <span> - {data?.car.color}</span>
                            </h3>
                        )
                    }
                    <p>
                        The car is currently Available can be delivered as soon as tomorrow morning.
                        Please be aware that the delivery times shown in this page are not definitive,
                        and are subject to change due to bad weather
                    </p>
                </div>
                <SaveControl>
                    <p>
                        { value[`${stockNumber}`] ? SAVED_TEXT : SAVE_TEXT }
                    </p>
                    <Button onClick={() => updateSave()}>
                        { value[`${stockNumber}`] ? 'Remove' : 'Save' }
                    </Button>
                </SaveControl>
            </DetailsWrapper>
        </div>
    )
}

export default Details;
