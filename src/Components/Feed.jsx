import React, { useEffect, useState } from "react";
import { getFirestore } from "firebase/firestore";
import { Box, Center, SimpleGrid, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

import { firebaseApp } from "../firebase-config";
import { categoryFeeds, getAllFeeds } from "../utils/fetchData";
import Spinner from "../Components/Spinner";
import { VideoPin } from ".";
import NotFound from "./NotFound";

const Feed = () => {
  const firestoreDb = getFirestore(firebaseApp);
  const [feeds, setFeeds] = useState(null);
  const [loading, setLoading] = useState(false);
  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);
    if (categoryId) {
      categoryFeeds(firestoreDb, categoryId)
        .then((data) => setFeeds(data))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
    } else {
      getAllFeeds(firestoreDb)
        .then((data) => setFeeds(data))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
    }
  }, [categoryId]);

  if (loading) {
    return (
      <Center height="100vh">
        <Spinner size="xl" />
        <Text mt={4}>Loading your feeds...</Text>
      </Center>
    );
  }

  if (!feeds || feeds.length === 0) {
    return (
      <Box mt={8}>
        <NotFound />
      </Box>
    );
  }

  return (
    <SimpleGrid
      minChildWidth="300px"
      spacing="15px"
      width="full"
      autoColumns={"max-content"}
      overflowX={"hidden"}
    >
      {feeds.map((data) => (
        <VideoPin key={data.id} maxWidth={420} height="80px" data={data} />
      ))}
    </SimpleGrid>
  );
};

export default Feed;
