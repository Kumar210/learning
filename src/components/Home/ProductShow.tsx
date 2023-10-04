import { Box, Grid, Title, useMantineTheme, Text, Group } from '@mantine/core'
import React, { useEffect } from 'react'
import CardContainer from '../Card/index'
import AOS from 'aos';
import 'aos/dist/aos.css';
const ProductShow = () => {
    const theme = useMantineTheme()
    useEffect(() => {
        AOS.init();
    }, [])
    const Data = [
        {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVjRZSHnOPS8bp95mBo_JQq1CvQ05IOgin6g&usqp=CAU"
            , header: 'cement'
        },
        {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVjRZSHnOPS8bp95mBo_JQq1CvQ05IOgin6g&usqp=CAU",
            header: "New Cement"
        },
        {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVjRZSHnOPS8bp95mBo_JQq1CvQ05IOgin6g&usqp=CAU",
            header: "New Cement"
        },
        {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVjRZSHnOPS8bp95mBo_JQq1CvQ05IOgin6g&usqp=CAU",
            header: "New Cement"
        },
        {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVjRZSHnOPS8bp95mBo_JQq1CvQ05IOgin6g&usqp=CAU",
            header: "New Cement"
        },
        {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVjRZSHnOPS8bp95mBo_JQq1CvQ05IOgin6g&usqp=CAU",
            header: "New Cement"
        },
        {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVjRZSHnOPS8bp95mBo_JQq1CvQ05IOgin6g&usqp=CAU",
            header: "New Cement"
        },
        {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVjRZSHnOPS8bp95mBo_JQq1CvQ05IOgin6g&usqp=CAU",
            header: "New Cement"
        },
        {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVjRZSHnOPS8bp95mBo_JQq1CvQ05IOgin6g&usqp=CAU",
            header: "New Cement"
        },

    ]
    return (
        <Box mt={theme.spacing.md} p={theme.spacing.sm} >
            <Box data-aos="fade-up-right" data-aos-duration="2000" >
                <Title order={3}>Product Range</Title>
                <Text size="md" p={5} >
                    We are one of the noted manufacturers and suppliers of a technically advanced range
                    of Construction and Material Handling Equipments like Block Machine, Block Making Machines
                    and Mobile Vibrators. High-quality raw material is used in designing our range to make sure
                    that it stands high in both reliability and durability. Manufactured at par with international
                    quality standards, our range can be customized as per the specifications stated by the clients.
                </Text>
            </Box>
            <Grid mt={theme.spacing.md} >
                {
                    Data?.map((item, i) => {
                        return (


                            <Grid.Col xs={3} >

                                <CardContainer
                                    image={item?.image}
                                    header={item?.header}
                                />
                            </Grid.Col>

                        )
                    })
                }
            </Grid>
        </Box>
    )
}

export default ProductShow