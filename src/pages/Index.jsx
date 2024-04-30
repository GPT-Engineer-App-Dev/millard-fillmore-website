import { Box, Flex, Heading, Text, Image, VStack } from '@chakra-ui/react';
import { FaAward, FaCameraRetro } from 'react-icons/fa';

const Index = () => {
  return (
    <Box p={4}>
      <Flex direction="column" align="center" justify="center" p={10}>
        <Heading mb={4}>Millard Fillmore</Heading>
        <Text fontSize="lg" mb={6}>13th President of the United States</Text>
      </Flex>
      <Box bg="gray.100" p={10}>
        <Heading size="lg" textAlign="center" mb={4}>Biography</Heading>
        <Text fontSize="md" mb={6}>
          Millard Fillmore was born January 7, 1800, and served as the 13th president of the United States from 1850 to 1853. He was the last president to be a member of the Whig Party while in the White House.
        </Text>
        <Heading size="lg" textAlign="center" mb={4}>Achievements</Heading>
        <VStack spacing={5}>
          <Flex align="center">
            <FaAward size="24px" />
            <Text ml={2}>Signed the Compromise of 1850</Text>
          </Flex>
          <Flex align="center">
            <FaAward size="24px" />
            <Text ml={2}>Opened trade with Japan</Text>
          </Flex>
        </VStack>
        <Heading size="lg" textAlign="center" mb={4}>Gallery</Heading>
        <Flex justify="center" gap="20px">
          <Image src="/images/fillmore1.jpg" boxSize="150px" borderRadius="lg" />
          <Image src="/images/fillmore2.jpg" boxSize="150px" borderRadius="lg" />
          <Image src="/images/fillmore3.jpg" boxSize="150px" borderRadius="lg" />
        </Flex>
      </Box>
    </Box>
  );
};

export default Index;