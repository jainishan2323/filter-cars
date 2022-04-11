import React from 'react';
import { Cars } from 'api-types';

import { Shimmer } from 'components/Shimmer';
import { ListItemWrapper, ListWrapper } from 'pages/List/styles';
import { Link } from 'react-router-dom';
import { useTheme } from 'styled-components';

interface LisItemProps extends Cars {
    isLoading: boolean;
};

const ListItem: React.FC<LisItemProps> = (props) => {
    const appTheme = useTheme();
    return (
        <ListItemWrapper key={props?.stockNumber}>
            {
                props?.isLoading ? <Shimmer margin="0px" width="72px" height="60px" /> : (
                    <img className="img" src={props?.pictureUrl} alt={props?.modelName} />
                )
            }
            <div className='content'>
                {
                    props?.isLoading ? <Shimmer margin="12px" width="200px" height="20px" /> : <h2>{props?.manufacturerName} {props?.modelName}</h2>
                }
                {
                    props?.isLoading ? <Shimmer margin="8px" width="200px" height="20px" /> : (
                        <p>
                            <span>Stock # {props?.stockNumber}</span>
                            <span> - {props?.mileage?.number}</span>
                            <span>{props?.mileage?.unit}</span>
                            <span> - {props?.fuelType}</span>
                            <span> - {props?.color}</span>
                        </p>
                    )
                }
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
    return (
       <ListWrapper>
           {
               data?.map((item) => <ListItem key={item.stockNumber} isLoading={isLoading} {...item} />)
           }
       </ListWrapper>
    )
}

export default CarsList;
