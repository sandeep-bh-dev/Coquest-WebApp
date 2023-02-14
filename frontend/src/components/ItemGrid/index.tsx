import * as React from 'react';
import styled from "@emotion/styled";
import ItemCard from "../ItemCard";

const Title = styled.h1({
    width: '100%',
    textAlign: 'left',
    fontWeight: 600,
    fontSize: 36,
    marginTop: '60px',
    marginBottom: '20px',
    marginLeft: '12%',
    fontFamily: 'Poppins'
});

const Container = styled.div({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative'
});

const Grid = styled.div({
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gridGap: '16px',
    width: '80%',
    maxWidth: '1100px',
    '@media (max-width: 1000px)': {
        gridTemplateColumns: 'repeat(3, 1fr)'
    },
    '@media (max-width: 800px)': {
        gridTemplateColumns: 'repeat(2, 1fr)'
    },
    '@media (max-width: 600px)': {
        gridTemplateColumns: 'repeat(1, 1fr)'
    }
});

const ItemGrid = () => {
    const items = [
        {
            taskName: "Project 1",
            itemName: "Item 1"
        },
        {
            taskName: "Project 2",
            itemName: "Item 2"
        },
        {
            taskName: "Project 3",
            itemName: "Item 3"
        },
        {
            taskName: "Project 4",
            itemName: "Item 4"
        },
        {
            taskName: "Project 5",
            itemName: "Item 5"
        },
        {
            taskName: "Project 6",
            itemName: "Item 6"
        },
        {
            taskName: "Project 7",
            itemName: "Item 7"
        },
        {
            taskName: "Project 8",
            itemName: "Item 8"
        }
    ];

    return (
        <>
            <Title>Inventory</Title>
            <Container>
                <Grid>
                    {items.map((item, index) => (
                        <ItemCard
                            key={index}
                            taskName={item.taskName}
                            itemName={item.itemName}
                        />
                    ))}
                </Grid>
            </Container>
        </>
    );
};

export default ItemGrid;
