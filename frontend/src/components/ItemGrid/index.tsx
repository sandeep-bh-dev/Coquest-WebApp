import * as React from 'react';
import styled from "@emotion/styled";
import ItemCard from "../ItemCard";
import { Items } from '../ItemArray';

const Title = styled.h1({
    width: '100%',
    textAlign: 'left',
    fontWeight: 600,
    fontSize: 36,
    marginTop: '60px',
    marginBottom: '20px',
    marginLeft: '23%',
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
    return (
        <>
            <Title>Inventory</Title>
            <Container>
                <Grid>
                    {Items.map((item, index) => (
                        <ItemCard
                            key={index}
                            item={item}
                            itemId={item.itemId}
                            image={item.image}
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
