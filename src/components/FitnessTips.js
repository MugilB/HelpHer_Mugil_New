import { Typography } from '@mui/material';
import React from 'react';
import {ReactTyped} from 'react-typed';
import styled from 'styled-components';
import './Fitness.css'

const tips = [
  {
    image: 'https://img.freepik.com/premium-vector/cartoon-flat-style-drawing-young-business-woman-holding-glass-milkshake-office-attractive-lady-having-break-work-drink-milkshake-with-slice-orange-graphic-design-vector-illustration_620206-4315.jpg?w=740',
    description: 'Tip 1: Stay hydrated by drinking plenty of water throughout the day.',
  },
  {
    image: 'https://img.freepik.com/free-vector/pilates-reformer-concept-illustration_114360-21361.jpg?t=st=1722088322~exp=1722091922~hmac=b080b01195cd4e31b9b87b47fc21dd0bb74f0aea6bef56990eb745fc4f706e17&w=740',
    description: 'Tip 2: Incorporate strength training into your routine to build muscle.',
  },
  {
    image: 'https://img.freepik.com/premium-photo/woman-practice-yogarelaxing-vibes_1168402-976.jpg?w=826',
    description: 'Tip 3: Practice yoga or meditation to reduce stress and improve flexibility.',
  },
  {
    image: 'https://img.freepik.com/premium-vector/girl-pink-shirt-is-cooking-kitchen-woman-round-glasses-slices-apple_348404-127.jpg?w=740',
    description: 'Tip 4: Eat a balanced diet rich in fruits, vegetables, and lean proteins.',
  },
  {
    image: 'https://img.freepik.com/premium-vector/hand-drawn-cruelty-free-vegan-concept_23-2148808862.jpg?w=740',
    description: 'Tip 5: Prepare healthy meals at home to control ingredients and portion sizes.',
  },
  {
    image: 'https://img.freepik.com/free-vector/hand-drawn-flat-book-club-illustration_23-2149320517.jpg?t=st=1722088704~exp=1722092304~hmac=553e98ad637894ab57a50385fac2755e74a96ee279b657fb1efd83bda4ac2ebe&w=740',
    description: 'Tip 6: Spend time outdoors to get fresh air and boost your mood.',
  },
  {
    image: 'https://img.freepik.com/free-vector/flat-illustration-world-bicycle-day-celebration_23-2150372850.jpg?t=st=1722088945~exp=1722092545~hmac=aaa89063bbad8a8c05da3f18bf06eb5c95e17cdb21cd135b65c4bf75c7d7b89f&w=740',
    description: 'Tip 7: Engage in fun physical activities like sports or dancing to stay active.',
  },
  {
    image: 'https://img.freepik.com/free-vector/top-view-flat-sleeping-pose-background_23-2148166963.jpg?t=st=1722088980~exp=1722092580~hmac=552e26dcff60f57a60e8369e65adb80afbb512498cab46847f3c6a1bc190e168&w=740',
    description: 'Tip 8: Get adequate rest and sleep to allow your body to recover and rejuvenate.',
  },
];

const FitnessTips = () => {
  return (
    <div class='back'>
      <TitleContainer>
        <Typography style={{ fontSize: '80px', textAlign: 'center', marginBottom: '20px' }} component="span">
          <ReactTyped
            strings={['Today\'s Tips']}
            typeSpeed={100}
            backSpeed={50}
            loop={false}
          />
        </Typography>
      </TitleContainer>
      <Container>
        {tips.map((tip, index) => (
          <Card key={index}>
            <Image src={tip.image} alt={`Tip ${index + 1}`} />
            <Description>{tip.description}</Description>
          </Card>
        ))}
      </Container>
    </div>
  );
};

const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  padding: 20px;
`;

const Card = styled.div`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  padding: 20px;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 10px;
`;

const Description = styled.p`
  margin-top: 10px;
  font-size: 16px;
  color: black;
`;

export default FitnessTips;
