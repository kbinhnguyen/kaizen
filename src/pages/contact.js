import {
  Box, VStack, Heading, Text, Divider, Link, FormControl, FormLabel, FormErrorMessage,
  FormHelperText, Input, Textarea, Grid, GridItem, Button,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import NextLink from 'next/link';
import Head from 'next/head';
import Header from '../components/shared/Header';
import Footer from '../components/shared/Footer';

const focusInputStyle = {
  p: { color: '#33647E' },
};


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
        <VStack pb={{ base: 8, sm: 24, md: 40 }} w="100vw" h="max-content" spacing={{ base: 8, sm: 12, md: 16 }}>
          <VStack w={{ base: '100%', md: '80%', lg: '50%' }} px={{ base: 10, md: 0 }} spacing={12}>
            <Heading as="h1" fontSize={{ base: '46px', md: '64px' }}>Contact</Heading>
            <form onSubmit={handleSubmit(onSubmit)} style={{ width: '100%' }}>
            <FormControl isInvalid={errors.name} display="flex" flexDirection="column" w="100%">
              <Grid
                w="100%"
                templateColumns='repeat(2, 1fr)'
                templateRows='repeat(3, max-content)'
                columnGap={12}
                rowGap={8}
                alignSelf="center"
              >
                <GridItem w="100%">
                  <FormLabel htmlFor="firstName" w="100%" _focusWithin={focusInputStyle}>
                    <Text variant="formLabel">First Name</Text>
                    <Input
                      w="100%"
                      id="firstName"
                      variant="flushed"
                      type="text"
                      {...register('firstName', {
                        required: true,
                      })}
                    />
                  </FormLabel>
                </GridItem>
                <GridItem w="100%">
                  <FormLabel w="100%" htmlFor="lastName" _focusWithin={focusInputStyle}>
                  <Text variant="formLabel">Last Name</Text>
                  <Input
                    id="lastName"
                    w="100%"
                    variant="flushed"
                    type="text"
                    {...register('lastName', {
                      required: true,
                    })}
                  />
                  </FormLabel>
                </GridItem>
                <GridItem w="100%">
                  <FormLabel w="100%" htmlFor="phone" _focusWithin={focusInputStyle}>
                    <Text w="100%" variant="formLabel">Phone</Text>
                    <Input
                      id="phone"
                      w="100%"
                      variant="flushed"
                      // type="tel"
                      {...register('phone', {
                        required: true,
                      })}
                    />
                  </FormLabel>
                </GridItem>
                <GridItem w="100%">
                  <FormLabel w="100%" htmlFor="email" _focusWithin={focusInputStyle}>
                    <Text w="100%" variant="formLabel">Email</Text>
                    <Input
                      id="email"
                      w="100%"
                      variant="flushed"
                      type="email"
                      {...register('email', {
                        required: true,
                      })}
                    />
                  </FormLabel>
                </GridItem>
                <GridItem gridColumn='1 / 3'>
                  <FormLabel htmlFor="inquiry" _focusWithin={focusInputStyle}>
                    <Text variant="formLabel">Tell us about your inquiry</Text>
                    <Textarea
                      id="inquiry"
                      {...register('inquiry', {
                        required: true,
                      })}
                  />
                  </FormLabel>
                </GridItem>
              </Grid>
              <FormHelperText pt={6}>* All fields required to submit contact form</FormHelperText>
            </FormControl>
            <Button mt={4} type="submit" isLoading={isSubmitting}>Submit</Button>
          </form>
          </VStack>

        </VStack>
        <Footer />
      </main>
    </>
  );
}