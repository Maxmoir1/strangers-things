import React, { useEffect, useState } from 'react';
import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
  Input,
} from '@chakra-ui/react';
const Posts = () => {
  const [posts, setPosts] = useState([]);
  console.log('Posts: ', posts);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const resp = await fetch(
          'https://strangers-things.herokuapp.com/api/2202-ftb-pt-web-pt/posts'
        );
        const data = await resp.json();
        setPosts(data.data.posts);
      } catch (error) {
        console.error(error);
      }
    };
    fetchPosts();
  }, []);
  return (
    <div
      id="post-page"
      style={{
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        alignItems: 'center',
      }}
    >
      <Stack spacing={3}>
        <Input
          marginTop={'2rem'}
          placeHolder="Search Keywords Here"
          size="lg"
        />
      </Stack>
      <Stack
        display="flex"
        justifyContent={'center'}
        align={{ base: 'center', md: 'center' }}
        textAlign={{ base: 'center', md: 'center' }}
        mt={{ base: 15, md: 30 }}
        ml={{ md: 0 }}
      >
        <Text
          fontweight="bold"
          textTransform={'uppercase'}
          fontSize="lg"
          letterSpacing="wide"
          color="teal.600"
        >
          <h1>Posts</h1>
        </Text>
      </Stack>
      {posts.map(post => {
        return (
          <div id="card">
            <Center py={12}>
              <Box
                role={'group'}
                p={6}
                maxW={'330px'}
                w={'full'}
                boxShadow={'2xl'}
                rounded={'lg'}
                pos={'relative'}
                zIndex={1}
              >
                <Box
                  rounded={'lg'}
                  mt={-12}
                  pos={'relative'}
                  height={'230px'}
                  _after={{
                    transition: 'all .3s ease',
                    content: '""',
                    w: 'full',
                    h: 'full',
                    pos: 'absolute',
                    top: 5,
                    left: 0,
                    filter: 'blur(15px)',
                    zIndex: -1,
                  }}
                  _groupHover={{
                    _after: {
                      filter: 'blur(20px)',
                    },
                  }}
                ></Box>
                <Stack pt={10} align={'center'}>
                  <Text
                    color={'gray.500'}
                    fontSize={'sm'}
                    textTransform={'uppercase'}
                  >
                    {post.author.username}
                  </Text>
                  <Heading
                    fontSize={'2xl'}
                    fontFamily={'body'}
                    fontWeight={500}
                  >
                    {post.title}
                  </Heading>
                  <Stack direction={'row'} align={'center'}>
                    <Text fontWeight={800} fontSize={'xl'}>
                      {post.price}
                    </Text>
                  </Stack>
                </Stack>
              </Box>
            </Center>
          </div>
        );
      })}
    </div>
  );
};

export default Posts;
