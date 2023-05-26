import { useState, useEffect } from 'react';
import {
  Box, VStack, Heading, Text, Divider, Link, FormControl, FormLabel, FormErrorMessage,
  FormHelperText, Input, Textarea, Grid, GridItem, Button,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { useForm as useFormCarry } from '@formcarry/react';
import NextLink from 'next/link';
import Head from 'next/head';
import Header from '../components/shared/Header';
import Footer from '../components/shared/Footer';

const focusInputStyle = {
  p: { color: '#33647E' },
};

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const { register, formState: { errors, isSubmitting, isValid } } = useForm({ mode: 'onBlur' });
  const { state, submit } = useFormCarry({ id: 'uZ1y7nGY6w' });

  useEffect(() => {
    if (state.submitted) setSubmitted(true);
  }, [state]);

  return (
    <>
      <Head>
        <title>Kaizen | Contact Us</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
      <main>
        <VStack pt={{ base: 6, md: 0 }} pb={{ base: 12, sm: 24, md: 40 }} w="100vw" h="max-content" spacing={{ base: 8, sm: 12, md: 16 }} minWidth="280px">
          <VStack w={{ base: '100%', md: '80%', lg: '50%' }} px={{ base: 10, md: 0 }} spacing={12}>
            <Heading as="h1" fontSize={{ base: '36px', sm: '46px', md: '64px' }}>Contact</Heading>
            {submitted && (
              <Box w="100%">
                <Text>
                  Thank you for your inquiry! We have received your submission and will be in touch with you shortly.
                </Text>
              </Box>
            )}
            {!submitted && (
            <form
              style={{ width: '100%' }}
              onSubmit={submit}
            >
            <FormControl isInvalid={errors} display="flex" flexDirection="column" w="100%">
              <Grid
                w="100%"
                templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }}
                templateRows={{ base: 'repeat(5, max-content)', md: 'repeat(3, max-content)' }}
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
                      name="firstName"
                      variant="flushed"
                      type="text"
                      {...register('firstName', {
                        required: 'Required field',
                        maxLength: {
                          value: 50,
                          message: 'Max 50 characters',
                        },
                        minLength: {
                          value: 1,
                          message: 'Min 1 character'
                        }
                      })}
                    />
                    {errors?.firstName && (
                      <FormErrorMessage>
                        {errors.firstName.message}
                      </FormErrorMessage>
                    )}
                  </FormLabel>
                </GridItem>
                <GridItem w="100%">
                  <FormLabel w="100%" htmlFor="lastName" _focusWithin={focusInputStyle}>
                  <Text variant="formLabel">Last Name</Text>
                  <Input
                    id="lastName"
                    name="lastName"
                    w="100%"
                    variant="flushed"
                    type="text"
                    {...register('lastName', {
                      required: 'Required field',
                      maxLength: {
                        value: 50,
                        message: 'Max 50 characters',
                      },
                      minLength: {
                        value: 1,
                        message: 'Min 1 character'
                      }
                    })}
                  />
                  {errors?.lastName && (
                    <FormErrorMessage>
                      {errors.lastName.message}
                    </FormErrorMessage>
                  )}
                  </FormLabel>
                </GridItem>
                <GridItem w="100%">
                  <FormLabel w="100%" htmlFor="phone" _focusWithin={focusInputStyle}>
                    <Text w="100%" variant="formLabel">Phone</Text>
                    <Input
                      id="phone"
                      name="phone"
                      w="100%"
                      variant="flushed"
                      type="tel"
                      {...register('phone', {
                        required: 'Required field',
                        maxLength: {
                          value: 20,
                          message: 'Max 20 characters',
                        },
                        minLength: {
                          value: 10,
                          message: 'Min 10 characters'
                        },
                      })}
                    />
                    {errors?.phone && (
                    <FormErrorMessage>
                      {errors.phone.message}
                    </FormErrorMessage>
                    )}
                  </FormLabel>
                </GridItem>
                <GridItem w="100%">
                  <FormLabel w="100%" htmlFor="email" _focusWithin={focusInputStyle}>
                    <Text w="100%" variant="formLabel">Email</Text>
                    <Input
                      id="email"
                      name="email"
                      w="100%"
                      variant="flushed"
                      type="email"
                      {...register('email', {
                        required: 'Required field',
                        maxLength: {
                          value: 50,
                          message: 'Max 50 characters',
                        },
                        minLength: {
                          value: 7,
                          message: 'Min 7 characters'
                        },
                      })}
                    />
                    {errors?.email && (
                    <FormErrorMessage>
                      {errors.email.message}
                    </FormErrorMessage>
                    )}
                  </FormLabel>
                </GridItem>
                <GridItem gridColumn={{ md: '1 / 3'}} w="100%">
                  <FormLabel htmlFor="inquiry" _focusWithin={focusInputStyle} w="100%">
                    <Text variant="formLabel" w="100%">Tell us about your inquiry</Text>
                    <Textarea
                      id="inquiry"
                      name="inquiry"
                      w="100%"
                      variant="customTextarea"
                      mt={4}
                      {...register('inquiry', {
                        required: 'Required field',
                        maxLength: {
                          value: 350,
                          message: 'Max 350 characters',
                        },
                        minLength: {
                          value: 10,
                          message: 'Min 10 characters'
                        },
                      })}
                    />
                    {errors?.inquiry && (
                    <FormErrorMessage>
                      {errors.inquiry.message}
                    </FormErrorMessage>
                    )}
                  </FormLabel>
                </GridItem>
              </Grid>
              <FormHelperText pt={6}>* All fields required to submit contact form</FormHelperText>
            </FormControl>
            <Button
              variant="customBtn"
              mt={4}
              type="submit"
              isLoading={isSubmitting}
              isDisabled={!isValid}
            >
              Submit
            </Button>
          </form>)}
          </VStack>
        </VStack>
      </main>
      <Footer />
    </>
  );
}