import {
    createStyles,
    Image,
    Container,
    Title,
    Text,
    Button,
    SimpleGrid,
    Box,
} from '@mantine/core';
import Link from 'next/link';

const useStyles = createStyles((theme) => ({
    root: {
        paddingTop: 80,
        paddingBottom: 80,
        marginTop: 100
    },

    title: {
        fontWeight: 900,
        fontSize: (34),
        marginBottom: theme.spacing.md,
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,

        [theme.fn.smallerThan('sm')]: {
            fontSize: (32),
        },
    },

    control: {
        [theme.fn.smallerThan('sm')]: {
            width: '100%',
        },
    },

    mobileImage: {
        [theme.fn.largerThan('sm')]: {
            display: 'none',
        },
    },

    desktopImage: {
        marginTop: '-80px',
        // background: 'white',

        [theme.fn.smallerThan('sm')]: {
            display: 'none',
        },
    },
}));

export default function NotFoundImage() {
    const { classes } = useStyles();

    return (
        <Container className={classes.root}>
            <SimpleGrid spacing={80} cols={2} breakpoints={[{ maxWidth: 'sm', cols: 1, spacing: 40 }]}>

                <Box>
                    <Title className={classes.title}>Coming Soon...</Title>
                    <Text color="dimmed" size="lg">
                        NFT is under construction. Stay tuned to YOC
                    </Text>
                    <Button variant="outline" size="md" mt="xl" color='teal' className={classes.control}>
                        <Link href="/" rel="canonical">
                            <a rel="canonical" > Take me back to home page</a>
                        </Link>
                    </Button>
                </Box>
                <Image
                    src="/assets/images/fwdyociconsets/YOC_Logo_adjusted-removebg.png"
                    alt='loading'
                    className={classes.desktopImage}
                // width={'80%'}
                />
            </SimpleGrid>
        </Container>
    );
}