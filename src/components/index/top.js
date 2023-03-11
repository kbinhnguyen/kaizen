import { Heading, Container } from '@chakra-ui/react';
import Image from 'next/image';

const style = {
  height: '100vh',
  background: 'red',
  // backgroundImage: `url("../../../public/Desktop/Welcome.jpg") !important`,
  backgroundPosition: 'center',
}
export default function TopPanel() {
  return (
  <>
    <div style={style}>
      <Image src="/Desktop/Welcome.jpg" alt="welcome" width="500" height="500" />
      <Heading as="h2" size="4xl">Investing in and building business relationships with people who share our values.</Heading>
    </div>
  </>)
}