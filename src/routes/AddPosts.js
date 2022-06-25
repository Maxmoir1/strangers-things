import React, { useState } from "react";
import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  VStack,
  HStack,
  Wrap,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
} from '@chakra-ui/react';
import { BsPerson } from 'react-icons/bs';


function AddPost({ token }) {
  const [data, setData] = useState({
    username: "",
    title: "",
    price: "",
    location: "",
    description: "",
  });
  function handle(e) {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
  }
  async function submit(e) {
    e.preventDefault();
    await fetch(
      "https://strangers-things.herokuapp.com/api/2202-ftb-pt-web-pt/posts",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          post: {
            username: data.username,
            title: data.title,
            price: data.price,
            location: data.location,
            description: data.description,
          },
        }),
      }
    )
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
      })
      .catch(console.error);
  }
  return (
    <Container bg="#9DC4FB" maxW="full" mt={0} centerContent overflow="hidden">
      <Flex>
        <Box
          bg="#02054B"
          color="white"
          borderRadius="lg"
          m={{ sm: 4, md: 16, lg: 10 }}
          p={{ sm: 5, md: 5, lg: 16 }}>
          <Box p={4}>
            <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
              <WrapItem>
                <Box>
                  <Heading>Submit a post</Heading>
                  <Text mt={{ sm: 3, md: 3, lg: 5 }} color="gray.500">
                  </Text>
                  <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                    <VStack pl={0} spacing={3} alignItems="flex-start">
                    </VStack>
                  </Box>
                  <HStack
                    mt={{ lg: 10, md: 10 }}
                    spacing={5}
                    px={5}
                    alignItems="flex-start">
                  </HStack>
                </Box>
              </WrapItem>
              <WrapItem>
                <Box bg="white" borderRadius="lg">
                  <Box m={8} color="#0B0E3F">
                    <VStack spacing={5}>
                      <form onSubmit={(e) => submit(e)}>
                        <FormControl >
                          <FormLabel>Username</FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement
                              pointerEvents="none"
                              children={<BsPerson color="gray.800" />}
                            />
                            <Input type="text" size="md" onChange={(e) => handle(e)} placeholder="username" id="username" value={data.username} />
                          </InputGroup>
                        </FormControl>
                        <FormControl >
                          <FormLabel>Item</FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <Input type="text" size="md" onChange={(e) => handle(e)} placeholder="item" id="title" value={data.title} />
                          </InputGroup>
                        </FormControl>
                        <FormControl >
                          <FormLabel>Price</FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <Input type="text" size="md" onChange={(e) => handle(e)} placeholder="price" id="price" value={data.price} />
                          </InputGroup>
                        </FormControl>
                        <FormControl >
                          <FormLabel>Description</FormLabel>
                          <Textarea
                            borderColor="gray.300"
                            _hover={{
                              borderRadius: 'gray.300',
                            }}
                            placeholder="message" onChange={(e) => handle(e)} id="description" value={data.description}
                          />
                        </FormControl>
                        <FormControl float="right">
                          <Button
                            type="submit"
                            variant="solid"
                            bg="#0D74FF"
                            color="white"
                            _hover={{}}>
                            Add Post
                          </Button>
                        </FormControl>
                      </form>
                    </VStack>
                  </Box>
                </Box>
              </WrapItem>
            </Wrap>
          </Box>
        </Box>
      </Flex>
    </Container>
  );
}

export default AddPost;