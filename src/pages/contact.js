import {
  Box, VStack, Heading, Text, Divider, Link, FormControl, FormLabel, FormErrorMessage,
  FormHelperText, Input, Textarea,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import NextLink from 'next/link';
import Head from 'next/head';
import Header from '../components/shared/Header';
import Footer from '../components/shared/Footer';

export default function Contact() {
  const { handleSubmit, register, formState: { errors, isSubmitting } } = useForm();
  const onSubmit = () => {
    console.log('submitted');
  };

  return (
    <>
      <Head>
        <title>Kaizen | Contact Us</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <Header />
        <VStack pt={{ base: 0, md: 6 }} pb={{ base: 12, md: 24 }} w="100vw" h="max-content" spacing={{ base: 8, md: 16 }} minWidth="350px">
          <VStack w={{ base: '100%', md: '80%', lg: '50%' }} px={{ base: 10, md: 0 }}>
            <Heading as="h1" fontSize={{ base: '46px', md: '64px' }}>Contact</Heading>
          </VStack>
          <form onSubmit={handleSubmit(onSubmit)} w="100%">
            <FormControl isInvalid={errors.name}>
              <FormLabel htmlFor="firstName">First Name</FormLabel>
              <Input
                id="firstName"
                type="text"
                {...register('firstName', {
                  required: true,
                })}
              />
              <FormLabel htmlFor="lastName">Last Name</FormLabel>
              <Input
                id="lastName"
                type="text"
                {...register('lastName', {
                  required: true,
                })}
              />
              <FormLabel htmlFor="phone">Phone</FormLabel>
              <Input
                id="phone"
                type="tel"
                {...register('phone', {
                  required: true,
                })}
              />
              <FormLabel htmlFor="phone">Email</FormLabel>
              <Input
                id="email"
                type="email"
                {...register('email', {
                  required: true,
                })}
              />
              <FormLabel htmlFor="inquiry">Tell us about your inquiry</FormLabel>
              <Textarea
                id="inquiry"
                {...register('inquiry', {
                  required: true,
                })}
              />
            </FormControl>
          </form>
        </VStack>
        <Footer />
      </main>
    </>
  );
}