import React, { useState, useEffect } from 'react';
import { Box, Image, Text, Grid, Center, Heading, VStack, Button, Flex } from '@chakra-ui/react';

function ScienceFictionStories() {
  const [stories, setStories] = useState([]);
  const [filteredStories, setFilteredStories] = useState([]);

  useEffect(() => {
    const fetchStories = async () => {
      try {
        const response = await fetch('https://child-vocability.onrender.com/api/sciencefiction');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        console.log(data);
        if (Array.isArray(data)) {
          setStories(data);
          setFilteredStories(data);
        } else {
          console.error('Invalid data format:', data);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchStories();
  }, []);

  const filterStories = (status) => {
    if (status === 'all') {
      setFilteredStories(stories);
    } else {
      const filtered = stories.filter(story => story.Status === status);
      setFilteredStories(filtered);
    }
  };

  return (
    <Center>
      <VStack spacing={8} align="center">
        <Flex justifyContent="space-between" width="90%" alignItems="center">
          <Heading as="h1">Science Fiction Stories</Heading>
          <Box>
            <Button width="auto" padding="5px" color="white" onClick={() => filterStories('all')} m="5px" borderRadius="5px" backgroundColor='#9DBCA7' border={"2px solid white"}>
              Clear All
            </Button>
            <Button  width="auto" padding="5px" color="white" onClick={() => filterStories('Completed')} m="5px" borderRadius="5px" backgroundColor='#9DBCA7' border={"3px solid white"}>
              Completed
            </Button>
            <Button width="auto" padding="5px" color="white" onClick={() => filterStories('In Progress')} m="5px" borderRadius="5px" backgroundColor='#9DBCA7' border={"2px solid white"}>
              In Progress
            </Button>
            <Button  width="auto" padding="5px" color="white" onClick={() => filterStories('New')} m="5px" borderRadius="5px" backgroundColor='#9DBCA7' border={"2px solid white"}>
              New
            </Button>
          </Box>
        </Flex>
        <Grid templateColumns="repeat(4, 1fr)" gap={20} padding="20px">
          {filteredStories.map((story, index) => (
            <Box key={index} borderRadius="5%" overflow="hidden" boxShadow="rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px">
              <Image src={`https://ik.imagekit.io/dev24/${story.Image[0]}`} alt={story.Title} width="90%" paddingTop="10px" borderRadius="5%" />
              <Box p="4">
                <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight" isTruncated>
                  {story.Title}
                </Box>
                <Button width="30%" mt="2" padding="5px" borderRadius="5px" border="none" color="white" style={{ backgroundColor: story.Status === 'In Progress' ? 'yellow' : '#87CEEB' }}>
                  {story.Status}
                </Button>
              </Box>
            </Box>
          ))}
        </Grid>
      </VStack>
    </Center>
  );
}

export default ScienceFictionStories;
