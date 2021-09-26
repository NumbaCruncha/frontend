import React from 'react';
import styles from './notfound.module.css';
import{ Heading, Text, Button, Box} from '@chakra-ui/react';
function NotFound(props) {
	return (
		<div className={styles.container}>
			<Box >
			<Heading fontSize="6xl">It doesn't look like anything to me.</Heading><br/>
			<Text color="grey.600" as="a" fontSize="2xl">You seem to have taken a wrong turn.</Text><br />
			<Text color="grey.600" as="a" fontSize="2xl"></Text><br />
			<Button colorScheme="blue"  as="a" href="/">Go Back Home</Button>
			</Box>
		</div>
	);
}

export default NotFound;