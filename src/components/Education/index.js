import React from 'react'
import styled from 'styled-components';
import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineSeparator } from '@mui/lab';
import { education } from '../../data/constant';
import EducationCard from '../Cards/EducationCard';


const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
position: relative;
z-index: 1;
align-items: center;

`;

const Wrapper = styled.div`
  max-width: 1100px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 12px;
  margin-bottom: 100px;
`;

const Title = styled.div`
  font-size: 42px;
  font-weight: 600;
  text-align: center;
  margin-top: 20px;
  color:${({theme})=>theme.text_primary};

  @media screen and (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc= styled.div`
  font-size: 18px;
  max-width: 600px;
  text-align: center;
  color:${({theme})=>theme.text_secondary};
  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;
const TimeLineSection = styled.div`
    width: 100%;
    max-width: 1000px;
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 12px;
`;


const Education = () => {
  return (
    <Container id="education">
    <Wrapper>
        <Title>Education</Title>
        <Desc></Desc>
        <TimeLineSection>
           <Timeline>
                {education.map((education,index)=>(
                <TimelineItem>
                    <TimelineSeparator>
                      
                        <TimelineDot variant='outlined' color='secondary'/>
                        {index !== education.length - 1 && <TimelineConnector/>}

                    </TimelineSeparator>
                    
                    <TimelineContent sx={{py:"12px",px:"2px"}}>
                      
                        <EducationCard education={education} />
                    </TimelineContent>
                </TimelineItem>
                ))}
           </Timeline>
        </TimeLineSection>
    </Wrapper>
</Container>
  )
}

export default Education