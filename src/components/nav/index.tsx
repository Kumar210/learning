import React from "react";
import {
  createStyles,
  Header,
  Group,
  Divider,
  Box,
  Burger,
  Drawer,
  Container,
  Text,
  Grid,
  Image,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import {
  IconChevronDown,
  IconCoin,
  IconChartBar,
  IconReportMoney,
  IconPhoto,
} from "@tabler/icons";
import Link from "next/link";
// import Router from "next/router";

const useStyles = createStyles((theme) => ({
  inner: {
    height: 70,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  links: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },
  link: {
    display: "flex",
    alignItems: "center",
    height: "100%",
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    textDecoration: "none",
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    fontWeight: 1000,
    fontSize: theme.fontSizes.lg,
    [theme.fn.smallerThan("sm")]: {
      height: 42,
      display: "flex",
      alignItems: "center",
      width: "100%",
    },
  },
  link1: {
    display: "block",
    lineHeight: 1,
    padding: "8px 12px",
    borderRadius: theme.radius.sm,
    textDecoration: "none",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,
  },
  subLink: {
    width: "100%",
    padding: `${theme.spacing.xs}px ${theme.spacing.md}px`,
    borderRadius: theme.radius.md,

    ...theme.fn.hover({
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[7]
          : theme.colors.gray[0],
    }),

    "&:active": theme.activeStyles,
  },

  dropdownFooter: {
    backgroundColor: theme.colors.dark[7],
    margin: -theme.spacing.md,
    marginTop: theme.spacing.sm,
    padding: `${theme.spacing.md}px ${theme.spacing.md * 2}px`,
    paddingBottom: theme.spacing.xl,
    borderTop: `1px solid ${theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[1]
      }`,
  },

  hiddenMobile: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
      paddingleft: "2em",
    },
  },
  imgHidden: {
    [theme.fn.smallerThan("md")]: {
      display: "none",
      paddingleft: "2em",
    },
  },

  hidden_BtnCointainer: {
    display: "none",
    [theme.fn.smallerThan("sm")]: {
      display: "flex",
      justifyContent: "space-between",
    },
  },
  hiddenDesktop: {
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },
  logo: {
    [theme.fn.largerThan("md")]: {
      display: "none",
    },
  },

  box1: {
    borderLeft: "1px solid #97FBFF",
    padding: "2em",
    height: "1rem",
  },
  box2: {
    border: "1px solid #97FBFF",
  },
  lmg: {
    width: "15px",
    height: "10px",
    float: "right",
  },
  name: {
    paddingBottom: "em",
  },
  subdiv: {
    borderRight: "2px solid #97FBFF",
    height: "100%",
    alignContent: "center",
    paddingRight: "1em",
  },
  subdiv2: {
    borderRight: "2px solid #97FBFF",
    height: "100%",
    alignContent: "center",
    paddingRight: "1em",
  },
  btntext: {
    display: "inline-flex",
    alignItems: "center",
    padding: " 0 24px",
    color: "black",
    height: "100%",
    borderRight: "1px solid #97FBFF",
  },
  button: {
    border: "2px solid #97FBFF",
    width: "auto",
    height: "auto",
    padding: "5px",
    display: "flex",
    wordSpacing: "0.5px",
  },
  linkLabel: {
    marginRight: 5,
    color: "white",
  },
}));

// const wallet = new Wallet({
//   createAccessKeyFor: "dev-1675849983997-69455845833622",
// });



export function HeaderMegaMenu() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  const { classes, theme } = useStyles();

  return (
    <Box mb={70}  >
      <Header height={70} px="md" >
        <Container className={classes.inner} fluid>
          <Group className={classes.imgHidden}>
            <Link href="/">
              <Image
                src="/assets/android-chrome-192x192.png"
                // src="/assets/images/fwdyociconsets/YOC_Logo_adjusted-removebg.png"
                width={70}
                height={50}
                alt="ImageName"
                style={{
                  cursor: "pointer",
                  padding: 5,
                  borderRadius: '50%'

                  // background: 'white'
                  // marginTop: -20
                }}
              />
            </Link>
          </Group>
          <Group className={classes.logo}>
            <Link href="/">
              <img
                src="/assets/images/fwdyociconsets/YOC_Logo.svg"
                width={50}
                height={50}
                alt="ImageName"
                style={{
                  cursor: "pointer",
                }}
              />
            </Link>
          </Group>

          <Group
            sx={{ height: "100%" }}
            spacing={0}
            className={classes.hiddenMobile}>
            {/* <Link
              href={{
                pathname: "/",
              }}>
              <a className={classes.link}>Home</a>
            </Link> */}
            <Link
              href={{
                pathname: "/",
              }}>
              <a className={classes.link}>Home</a>
            </Link>
            {/* <Menu trigger="hover" exitTransitionDuration={0} withArrow width={150}>
              <Menu.Target>
                <Center>
                  <span className={classes.link}>Trade</span>
                  <IconChevronDown size={16} color={theme.fn.primaryColor()} />
                </Center>
              </Menu.Target>
              <Menu.Dropdown>

                <Link
                  href={{
                    pathname: "/yusdminting",
                  }}>
                  <Menu.Item icon={<IconCoins />}  >
                    <Text size={"xs"} style={{ color: 'white' }} >YUSD</Text>
                  </Menu.Item>
                </Link>
                <Link
                  href={{
                    pathname: "/swap",
                  }}>
                  <Menu.Item icon={<IconRepeat />} >
                    <Text size={"xs"} style={{ color: 'white' }} >Swap</Text>

                  </Menu.Item>
                </Link>
                <Link
                  href={{
                    pathname: "/charts",
                  }}>
                  <Menu.Item icon={<IconChartAreaLine />} >
                    <Text size={"xs"} style={{ color: 'white' }} >Charts</Text>

                  </Menu.Item>
                </Link>
                <Link
                  href={{
                    pathname: "/liquidity",
                  }}>
                  <Menu.Item icon={<IconBusinessplan />} >
                    <Text size={"xs"} style={{ color: 'white' }} >Liquidity</Text>
                  </Menu.Item>
                </Link>
                <Link
                  href={{
                    pathname: "/wallet",
                  }}>
                  <Menu.Item icon={<IconWallet />}>
                    <Text size={"xs"} style={{ color: 'white' }} >Trade Projects</Text>
                  </Menu.Item>
                </Link>
              </Menu.Dropdown>
            </Menu> */}
            <Link
              href={{
                pathname: "/stake",
              }}>
              <a className={classes.link}>Product</a>
            </Link>
            <Link
              href={{
                pathname: "/",
              }}>
              <a className={classes.link}>Contatus</a>
            </Link>
            <Link
              href={{
                pathname: "/",
              }}>
              <a className={classes.link}>About</a>
            </Link>
            {/* <Menu trigger="hover" withArrow exitTransitionDuration={0}>
              <Menu.Target>
                <Center>
                  <span className={classes.link}>NFT</span>
                  <IconChevronDown size={16} color={theme.fn.primaryColor()} />
                </Center>
              </Menu.Target>
              <Menu.Dropdown>
                <Link
                  href={{
                    // pathname: "/mynft",
                    pathname: '/Soon'
                  }}>
                  <Menu.Item icon={<IconWorldUpload />} >
                    <Text size={"xs"} style={{ color: 'white' }} >Explore</Text>
                  </Menu.Item >
                </Link>
                <Link
                  href={{
                    // pathname: "/nft",
                    pathname: '/Soon'

                  }}>
                  <Menu.Item icon={<IconPhotoHeart />} >
                    <Text size={"xs"} style={{ color: 'white' }} >Mint NFTs</Text>

                  </Menu.Item>
                </Link>

                <Link
                  href={{
                    // pathname: "/mynft",
                    pathname: '/Soon'

                  }}>
                  <Menu.Item icon={<IconPhotoStar />} >
                    <Text size={"xs"} style={{ color: 'white' }} >My NFTs</Text>
                  </Menu.Item>
                </Link>

              </Menu.Dropdown>
            </Menu> */}
            {/* <Menu trigger="hover" withArrow exitTransitionDuration={0}>
              <Menu.Target>
                <Center>
                  <span className={classes.link}>Info</span>
                  <IconChevronDown size={16} color={theme.fn.primaryColor()} />
                </Center>
              </Menu.Target>
              <Menu.Dropdown>

                <a
                  href="https://yoc.gitbook.io/tokenomics/" target="_blank">
                  <Menu.Item icon={<IconInfoSquare />} >
                    <Text size={"xs"} style={{ color: 'white' }} >Tokenomics</Text>
                  </Menu.Item>
                </a>

                <a
                  href=" https://yoc.gitbook.io/docs/" target="_blank">
                  <Menu.Item icon={<IconLicense />} >
                    <Text size={"xs"} style={{ color: 'white' }} >Docs</Text>

                  </Menu.Item>
                </a>
                <a
                  href="https://yoc.gitbook.io/white-paper/" target="_blank">
                  <Menu.Item icon={<IconFile />} >
                    <Text size={"xs"} style={{ color: 'white' }} >White Paper</Text>

                  </Menu.Item>
                </a>
                <a
                  href="https://yoc.gitbook.io/road-map/" target="_blank">
                  <Menu.Item icon={<IconMapPin />} >
                    <Text size={"xs"} style={{ color: 'white' }} >Road Map</Text>
                  </Menu.Item>
                </a>
              </Menu.Dropdown>
            </Menu> */}

          </Group>
          {/* <Group
            className="BtnCointainer"
          >
            <Menu trigger="hover" exitTransitionDuration={0} withArrow >
              <Menu.Target>
                <Center>
                  <Button size="xs" variant="outline" color="teal.2">
                    <img height={50} width={50} src="/assets/images/fwdyociconsets/NEAR-Protocol-Crypto-Logo.png" />
                  </Button>
                </Center>
              </Menu.Target>
              <Menu.Dropdown>
                <a
                  href="http://www.yoc.fund/bsc" target="_blank">
                  <Menu.Item>

                    <span className={classes.link}><img height={20} width={20} src="/assets/images/fwdyociconsets/bnb-bnb-logo.svg" />&emsp;BSC</span>
                  </Menu.Item>
                </a>
                <Menu.Item>
                  <a
                    href="http://www.yoc.fund/eth" target="_blank">
                    <span className={classes.link}><img height={20} width={20} src="/assets/images/fwdyociconsets/ethereum (1).svg" />&emsp;ETH</span>
                  </a>
                </Menu.Item>
                <Menu.Item>
                  <a
                    href="http://www.yoc.so" target="_blank">
                    <span className={classes.link}><img height={20} width={20} src="/assets/images/fwdyociconsets/solana-sol-logo.svg" />&emsp;SOL</span>
                  </a>
                </Menu.Item>
              </Menu.Dropdown>
            </Menu>
            <HoverCard shadow="md" withArrow>
              <HoverCard.Target>

                <Button
                  variant="outline"
                  color="teal.2"
                  rightIcon={
                    //  <IconCoin color={theme.colors.red[6]} />
                    <img
                      // className={classes.img1}
                      src="/assets/images/fwdyociconsets/YOCn_Icon_White.png"
                      width="25px"
                      height="20px"
                      alt="ImageName"
                    />
                  }

                  size="xs"
                >
                  th
                </Button>
              </HoverCard.Target>
              <HoverCard.Dropdown>
                <Text size="sm">
                  tth
                </Text>
              </HoverCard.Dropdown>
            </HoverCard>
            <HoverCard shadow="md" withArrow>
              <HoverCard.Target>
                <Button
                  variant="outline"
                  color="teal.2"
                  size="xs"

                  // title={`YOCn: ${dollarUSLocale.format(Number(Balance)?.toFixed(6))}`}
                  rightIcon={

                    //   <IconCoin color={theme.colors.red[6]} />
                    <img
                      // className={classes.img1}
                      src="/assets/images/fwdyociconsets/YOCn_Icon_White.png"
                      width="25px"
                      height="20px"
                      alt="ImageName"
                    />
                  }
                >
                  rhtgh
                </Button>
              </HoverCard.Target>
              <HoverCard.Dropdown>
                <Text size="sm">
                  tgyh
                </Text>
              </HoverCard.Dropdown>
            </HoverCard>
            <Button
              size="xs"

              variant="outline"
              color="teal.2"
              rightIcon={<IconWallet />}>
              yjuykiuk
            </Button>
          </Group> */}


          {/* <Group className={classes.hidden_BtnCointainer}>
            <Grid>
              <Grid.Col span={6}>
                <HoverCard>
                  <HoverCard.Target>

                    <Button
                      variant="default"
                      className={classes.hiddenDesktop}
                      size="xs"
                      radius="lg"
                      // rightIcon={<IconCoin color={theme.colors.blue[6]} />}
                      sx={{
                        width: 100,
                      }}>
                      {`YOCn: `}
                    </Button>
                  </HoverCard.Target>
                  <HoverCard.Dropdown>
                    {`YOCn: `}
                    <br />
                    {`YOCn value: $`}
                  </HoverCard.Dropdown>
                </HoverCard>
              </Grid.Col>
              <Grid.Col span={6}>

                <Button
                  size="xs"

                  className={classes.hiddenDesktop}
                  variant="default"
                  radius={"xl"}
                >
                  gfjy
                </Button>
              </Grid.Col>
            </Grid>
          </Group> */}

          <Burger
            ml={10}
            size={"sm"}
            opened={drawerOpened}
            onClick={toggleDrawer}
            className={classes.hiddenDesktop}
          />
        </Container>
      </Header>
      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="md"
        padding="md"
        title="YOC"
        className={classes.hiddenDesktop}
        zIndex={1000000}>
        {/* <ScrollArea sx={{ height: 'calc(100vh - 60px)' }} mx="-md"> */}
        <Divider
          my="sm"
          color={theme.colorScheme === "dark" ? "dark.5" : "gray.1"}
        />
        <Grid>

          {/* <Grid.Col xs={12} >

            <Link
              href={{
                pathname: "/",
              }}>
              <a onClick={() => closeDrawer()} className={classes.link}>
                <Group position="center" >

                  <IconHome />
                  <Text  >Home</Text>
                </Group>
              </a>
            </Link>
          </Grid.Col> */}
          <Grid.Col xs={12}>
            <Box sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginLeft: '20px'
            }} >
              <IconCoin />
              <Link
                href={{
                  pathname: "/funds",
                }}>
                <a onClick={() => closeDrawer()} className={classes.link}>
                  Projects
                </a>
              </Link>
            </Box>

          </Grid.Col>
          <Grid.Col xs={12}>

            <Box sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }} >
              <IconChartBar
                style={{
                  marginLeft: "20px",
                  color: 'white'
                }}
              />
              <Text

                className={classes.link}>

                Trade{" "}
                <IconChevronDown
                  color="cyan"
                  size={20}
                  style={{
                    marginLeft: "20px",
                  }}
                />
              </Text>

            </Box>


          </Grid.Col>
          <Grid.Col xs={12}>
            <Box sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginLeft: '20px'
            }} >
              <IconCoin />
              <Link
                href={{
                  pathname: "/stake",
                }}>


                <a onClick={() => closeDrawer()} className={classes.link}>
                  Stakes
                </a>
              </Link>
            </Box>

          </Grid.Col>
          <Grid.Col xs={12}>
            <Box sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginLeft: '20px'
            }} >
              <IconReportMoney />
              <Link
                href={{
                  pathname: "/farms",
                }}>
                <a onClick={() => closeDrawer()} className={classes.link}>
                  Farms
                </a>
              </Link>
            </Box>

          </Grid.Col>
          <Grid.Col xs={12}>
            <Box sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginLeft: '20px'
            }} >
              <IconCoin />
              <Link
                href={{
                  pathname: "/funds",
                }}>
                <a onClick={() => closeDrawer()} className={classes.link}>
                  Projects
                </a>
              </Link>
            </Box>

          </Grid.Col>
          <Grid.Col xs={12}>

            <Box sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }} >
              <IconPhoto
                style={{
                  marginLeft: "20px",
                  color: 'white'
                }}
              />
              <Text

                className={classes.link}>
                NFT{" "}
                <IconChevronDown
                  color="cyan"
                  size={20}
                  style={{
                    marginLeft: "20px",
                  }}
                />
              </Text>

            </Box>


          </Grid.Col>


          {/* <Grid.Col xs={12}>
            <Box sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginLeft: '20px'
            }} >
              <IconInfoCircle />
              <Link
                href={{
                  pathname: "/info",
                }}>
                <a onClick={() => closeDrawer()} className={classes.link}>
                  Info
                </a>
              </Link>
            </Box>

          </Grid.Col> */}

          <Grid.Col xs={12}>

            <Box sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }} >

              <Text

                className={classes.link}>
                Info{" "}
                <IconChevronDown
                  color="cyan"
                  size={20}
                  style={{
                    marginLeft: "20px",
                  }}
                />
              </Text>

            </Box>


          </Grid.Col>

          <Divider
            my="sm"
            color={theme.colorScheme === "dark" ? "dark.5" : "gray.1"}
          />


        </Grid>
      </Drawer>

    </Box>
  );
}
