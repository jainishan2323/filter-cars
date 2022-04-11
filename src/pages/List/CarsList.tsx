import React from 'react';
import { Cars } from 'api-types';

import { Shimmer } from 'components/Shimmer';
import { ListItemWrapper, ListWrapper } from 'pages/List/styles';
import { Link } from 'react-router-dom';
import { useTheme } from 'styled-components';
import { capitalize, toLocaleString } from 'utils/common';

interface LisItemProps extends Cars {};

const ListItem: React.FC<LisItemProps> = (props) => {
    const appTheme = useTheme();
    return (
        <ListItemWrapper key={props?.stockNumber}>
            <img className="img" src={props?.pictureUrl} alt={props?.modelName} />
            <div className='content'>
                <h2>{props?.manufacturerName} {props?.modelName}</h2>
                <p>
                    <span>Stock # {props?.stockNumber}</span>
                    <span> - {toLocaleString(props?.mileage?.number)} </span>
                    <span>{capitalize(props?.mileage?.unit)}</span>
                    <span> - {props?.fuelType}</span>
                    <span> - {capitalize(props?.color)}</span>
                </p>
                <Link style={{
                    color: appTheme.colors.primary
                }} to={`/details/${props?.stockNumber}`}>View Details</Link>
            </div>
        </ListItemWrapper>
    );
}

type ListProps = {
    data?: Cars[];
    isLoading: boolean;
}

const CarsList: React.FC<ListProps> = ({ data, isLoading }) => {
    if (isLoading) {
        return (
            <ListWrapper>
                {
                    [1,2,3,4,5,6,7,8,9,10].map((item: number) => (
                        <ListItemWrapper key={item}>
                            <Shimmer margin="0px" width="72px" height="60px" />
                            <div className='content'>
                                <Shimmer margin="12px" width="200px" height="20px" />
                                <Shimmer margin="8px" width="200px" height="20px" />
                                <Shimmer margin="8px" width="200px" height="14px" />
                            </div>
                        </ListItemWrapper>
                    ))
                }
            </ListWrapper>
        )
    }
    return (
       <ListWrapper>
           {
               data?.map((item) => <ListItem key={item.stockNumber} {...item} />)
           }
       </ListWrapper>
    )
}

export default CarsList;
