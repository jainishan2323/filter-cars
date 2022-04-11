import styled from 'styled-components';

type ShimmerProps = {
    width?: string;
    margin?: string;
    height?: string;
}

export const Shimmer = styled.div<ShimmerProps>`
    animation: shimmer 3s;
    margin: ${props => props?.margin ? props?.margin : props?.theme.spacing.large} 0;
    animation-iteration-count: infinite;
    background: linear-gradient(to right, #e6e6e6 5%, #cccccc 25%, #e6e6e6 35%);
    background-size: 1000px 100%;
    -webkit-animation-fill-mode: forwards; 
    -webkit-animation-iteration-count: infinite;
    -webkit-animation-timing-function: linear;
    height: ${props => props?.height};
    width: ${props => props?.width};
    @keyframes shimmer {
        from {
        background-position: -1000px 0;
        }
        to {
        background-position: 1000px 0;
        }
    }
`;
