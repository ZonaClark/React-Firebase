import styled from 'styled-components';

const SectionLeft = styled.section`
    color: AliceBlue;
    width: 50%;
    height: 100vh;
    float: left;
    overflow: scroll;
    
    background: ${props => props.background};
`;

const SectionRight = styled.section`
    color: AliceBlue;
    width: 50%;
    height: 100vh;
    float: right;
    overflow: scroll;
    
    background: ${props => props.background};
`;

const Section = styled.section`
    color: AliceBlue;
    width: 100%;
    height: 100vh;
    float: left;
    overflow: scroll;
    
    background: ${props => props.background};
`;

export { SectionLeft, SectionRight, Section };