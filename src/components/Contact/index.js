import React from 'react'
import styled from 'styled-components'
import {FaTwitter, FaLinkedin,FaFacebook,FaInstagram, FaYoutube,FaGithub} from 'react-icons/fa'
import { useState,useForm } from 'react';
import emailjs from '@emailjs/browser';

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
position: relative;
z-index: 1;
align-items: center;
margin-bottom: 60px;
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
const SkillsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
  justify-content: center;
  gap: 30px;

`;

const ContactContainer = styled.div`
  width: 100%;
  max-width:500px;
  background-color: ${({theme})=>theme.card};
  border: 0.1px solid  ${({theme})=>theme.white} ;
  border-radius: 16px;
  padding: 18px 36px;
  color:${({theme})=>theme.white};
  @media screen and (max-width: 768px) {
    max-width: 400px;
    padding: 10px 20px;
  }
  @media screen and (max-width: 500px) {
    max-width: 330px;
    padding: 10px 20px;
  }

`;

const SkillTitle = styled.h2`
  font-size: 28px;
  font-weight: 600;
  color:${({theme})=>theme.text_secondary};
  margin-bottom:12px;
  text-align: center;
  @media screen and (max-width: 640px) {
    font-size: 20px;
    
    }
`;

const SkillList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 20px;

`;



const SocialContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 0 6px;
    margin-top: 15px;
    @media screen and (max-width: 640px){
     
    }
`;
const SocialLink = styled.a`
    text-decoration: none;
    background-color:${({theme})=>theme.white};
    color: ${({theme})=>theme.black};
    border-radius:15px;   
    justify-content: center;
    align-items: center;
    display: flex;
    justify-self: flex-start;
    text-align: center;
    margin: 7px;
    padding:10px 15px;
    font-size: 0.9rem;
    font-weight: 500;
    cursor: pointer;
    &:hover{
        background-color: ${({theme})=>theme.primary};
        color: ${({theme})=>theme.white};
        cursor: pointer;
    }
    @media screen and (max-width: 640px) {
        padding:7px 13px;
        font-size: 1rem;
        border-radius:10px;   
    
    }
`;

const FormBox = styled.div`
  min-width: 100%;
  margin: 0vw;
`;

const FormTitle = styled.h5`
  font-size: 35px;
  text-align: center;
  color: #f55a00;
  margin: 0 0 0.5vh 0;
`;

const FormInput = styled.input`
  display: block;
  width: 100%;
  padding: 0.5rem 0.8rem 0.5rem 0.8rem;
  margin: 0.9vw 0;
  border: 0;
  border-radius: 5px;
  font-size: 20px;
`;

const FormTextarea = styled.textarea`
  display: block;
  width: 100%;
  padding: 0.5rem 0.8rem 0.5rem 0.8rem;
  margin: 0.9vw 0;
  border: 0;
  border-radius: 5px;
  font-size: 20px;
  height: 15vh;
`;


const Contact = () => {
  return (
    <Container id="contactus">
      <Wrapper>
        <Title>Contact me</Title>
        <Desc>
        You need my service? Get in touch with me below.
        </Desc>
        <SkillsContainer>
          
            <ContactContainer>             
              <SkillTitle>Available for work.</SkillTitle>
             
                <SocialContainer>
                <SocialLink href='https://linkedin.com/in/oyewodayo' target='_blank'><FaLinkedin> </FaLinkedin>&nbsp; LinkedIn</SocialLink>
                <SocialLink href='https://facebook.com/oyewodayo' target='_blank'><FaFacebook> </FaFacebook>&nbsp; Facebook</SocialLink>
                <SocialLink href='https://twitter.com/oyewodayo' target='_blank'><FaTwitter> </FaTwitter>&nbsp; Twitter</SocialLink>
                <SocialLink href='https://instagram.com/dayooye' target='_blank'><FaInstagram> </FaInstagram>&nbsp; Instagram</SocialLink>
                <SocialLink href='https://youtube.com/@oyewodayo' target='_blank'><FaYoutube> </FaYoutube>&nbsp; Youtube</SocialLink>
                <SocialLink href='https://github.com/oyewodayo' target='_blank'><FaGithub> </FaGithub>&nbsp; Github</SocialLink>
                
                </SocialContainer>
                <div style={{'marginTop':35,'textAlign':'center'}}><a href='mailto:temidayo@briefbrew.com' style={{'color':'white','textDecoration':'none'}}> Email: temidayo@briefbrew.com </a></div>
            </ContactContainer>


            <ContactContainer>             
              <SkillTitle>Send a message</SkillTitle>
              <SkillList>
              <FormBox>
                <form>
                  
                  <FormInput type="text" placeholder="Name" />
                  <FormInput type="tel" placeholder="Phone number" />
                  <FormInput type="email" placeholder="E-mail" />
                  {/* Use FormTextarea component for textareas */}
                  <FormTextarea placeholder="Message"></FormTextarea>
                 
                  <button type="submit" style={{'paddingTop':10,'paddingBottom':10,'paddingLeft':20,'paddingRight':20,'fontSize': 18,'borderRadius':10}} id="submitBtn" className="submitBtn">
                    Submit
                  </button>
                </form>
              </FormBox>
                
              </SkillList>
            </ContactContainer>
        
        </SkillsContainer>
      </Wrapper>
    </Container>
  )
}

export default Contact