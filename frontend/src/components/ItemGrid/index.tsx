import * as React from 'react';
import styled from "@emotion/styled";
import ItemCard from "../ItemCard";

const Title = styled.h1({
  width: 175,
  height: 54,
  fontWeight: 600,
  fontSize: 36,
  marginLeft: '21%',
  fontFamily: 'Poppins'
});

const Container = styled.div({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: '20px'
});

const Grid = styled.div({
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gridGap: '20px',
  width: '80%',
  maxWidth: '1100px'
});

const ItemGrid = () => {
  return (
    <>
      <Title>Inventory</Title>
      <Container>
        <Grid>
          <ItemCard taskName="PROJECT OR TASK NAME" itemName="Item name" />
          <ItemCard taskName="PROJECT OR TASK NAME" itemName="Item name" />
          <ItemCard taskName="PROJECT OR TASK NAME" itemName="Item name" />
          <ItemCard taskName="PROJECT OR TASK NAME" itemName="Item name" />
          <ItemCard taskName="PROJECT OR TASK NAME" itemName="Item name" />
          <ItemCard taskName="PROJECT OR TASK NAME" itemName="Item name" />
          <ItemCard taskName="PROJECT OR TASK NAME" itemName="Item name" />
          <ItemCard taskName="PROJECT OR TASK NAME" itemName="Item name" />
        </Grid>
      </Container>
    </>
  );
};

export default ItemGrid;
