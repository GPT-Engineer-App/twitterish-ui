import React from "react";
import { Container, Box, VStack, HStack, Text, Avatar, Input, Button, IconButton, Divider } from "@chakra-ui/react";
import { FaTwitter, FaHome, FaHashtag, FaBell, FaEnvelope, FaBookmark, FaListAlt, FaUser, FaEllipsisH, FaRegComment, FaRetweet, FaHeart, FaShareSquare } from "react-icons/fa";

const tweets = [
  {
    id: 1,
    user: {
      name: "John Doe",
      username: "@johndoe",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtYWxlJTIwcG9ydHJhaXR8ZW58MHx8fHwxNzE3MzcwNzg0fDA&ixlib=rb-4.0.3&q=80&w=1080",
    },
    content: "This is a sample tweet!",
    timestamp: "2h",
  },
  {
    id: 2,
    user: {
      name: "Jane Smith",
      username: "@janesmith",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBwb3J0cmFpdHxlbnwwfHx8fDE3MTczNzA3ODV8MA&ixlib=rb-4.0.3&q=80&w=1080",
    },
    content: "Hello Twitter!",
    timestamp: "3h",
  },
];

const Tweet = ({ tweet }) => (
  <Box w="100%" p={4} borderBottom="1px" borderColor="gray.200">
    <HStack align="start">
      <Avatar src={tweet.user.avatar} />
      <VStack align="start" spacing={1}>
        <HStack>
          <Text fontWeight="bold">{tweet.user.name}</Text>
          <Text color="gray.500">{tweet.user.username}</Text>
          <Text color="gray.500">· {tweet.timestamp}</Text>
        </HStack>
        <Text>{tweet.content}</Text>
        <HStack spacing={4} pt={2}>
          <IconButton aria-label="Comment" icon={<FaRegComment />} variant="ghost" />
          <IconButton aria-label="Retweet" icon={<FaRetweet />} variant="ghost" />
          <IconButton aria-label="Like" icon={<FaHeart />} variant="ghost" />
          <IconButton aria-label="Share" icon={<FaShareSquare />} variant="ghost" />
        </HStack>
      </VStack>
    </HStack>
  </Box>
);

const Sidebar = () => (
  <VStack align="start" spacing={6} p={4} w="20%" borderRight="1px" borderColor="gray.200">
    <IconButton aria-label="Twitter" icon={<FaTwitter />} size="lg" variant="ghost" />
    <Button leftIcon={<FaHome />} variant="ghost" justifyContent="flex-start" w="100%">
      Home
    </Button>
    <Button leftIcon={<FaHashtag />} variant="ghost" justifyContent="flex-start" w="100%">
      Explore
    </Button>
    <Button leftIcon={<FaBell />} variant="ghost" justifyContent="flex-start" w="100%">
      Notifications
    </Button>
    <Button leftIcon={<FaEnvelope />} variant="ghost" justifyContent="flex-start" w="100%">
      Messages
    </Button>
    <Button leftIcon={<FaBookmark />} variant="ghost" justifyContent="flex-start" w="100%">
      Bookmarks
    </Button>
    <Button leftIcon={<FaListAlt />} variant="ghost" justifyContent="flex-start" w="100%">
      Lists
    </Button>
    <Button leftIcon={<FaUser />} variant="ghost" justifyContent="flex-start" w="100%">
      Profile
    </Button>
    <Button leftIcon={<FaEllipsisH />} variant="ghost" justifyContent="flex-start" w="100%">
      More
    </Button>
  </VStack>
);

const Index = () => {
  return (
    <Container maxW="container.xl" display="flex" p={0}>
      <Sidebar />
      <VStack w="60%" spacing={0}>
        <Box w="100%" p={4} borderBottom="1px" borderColor="gray.200">
          <Text fontSize="xl" fontWeight="bold">
            Home
          </Text>
        </Box>
        <Box w="100%" p={4} borderBottom="1px" borderColor="gray.200">
          <HStack>
            <Avatar src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx1c2VyJTIwYXZhdGFyfGVufDB8fHx8MTcxNzM3MDc4Nnww&ixlib=rb-4.0.3&q=80&w=1080" />
            <Input placeholder="What's happening?" variant="unstyled" />
          </HStack>
          <HStack justify="flex-end" pt={2}>
            <Button colorScheme="twitter">Tweet</Button>
          </HStack>
        </Box>
        {tweets.map((tweet) => (
          <Tweet key={tweet.id} tweet={tweet} />
        ))}
      </VStack>
      <VStack w="20%" p={4} spacing={4}>
        <Input placeholder="Search Twitter" variant="filled" />
        <Box w="100%" p={4} bg="gray.100" borderRadius="md">
          <Text fontWeight="bold">What's happening</Text>
          <Divider my={2} />
          <Text>#ReactJS</Text>
          <Divider my={2} />
          <Text>#ChakraUI</Text>
          <Divider my={2} />
          <Text>#JavaScript</Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
