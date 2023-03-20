import { Heading, Flex } from '@chakra-ui/react';
import Image from 'next/image';
import bg from '../../../public/AdobeStock_381853198.jpeg';

const style = {
  height: '100vh',
  width: '100vw',
  backgroundImage: `url(${bg.src})`,
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
};

const headingStyle = {
  fontFamily: `'MinervaModern', sans-serif`,
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: '40px',
  color: '#00263E',
};

export default function TopPanel() {
  return (
  <>
    <div style={style}>
      {/* <Flex w="40%"> */}
        <h2>Investing in and building business relationships with people who share our values.</h2>
      {/* </Flex> */}
    </div>
  </>)
}