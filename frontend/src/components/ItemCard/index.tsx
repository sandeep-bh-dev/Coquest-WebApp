import * as React from 'react';
import styled from "@emotion/styled";
import Card, { CardProps } from "@mui/material/Card";
import CardMedia from '@mui/material/CardMedia';
import CardHeader from "@mui/material/CardHeader";
import Typography from '@mui/material/Typography';
import ItemMenu from '../ItemMenu';
import ItemModal from '../ItemModal';

type ItemCardProps = CardProps & {
    taskName: string;
    itemName: string;
};

const TaskName = styled(Typography)({
    fontWeight: 400,
    fontSize: 12,
    lineHeight: '18px'
});

const ItemName = styled(Typography)({
    fontWeight: 600,
    fontSize: 16,
    lineHeight: '24px'
});


const ItemCard = ({
    taskName,
    itemName
}: ItemCardProps) => {
    const CustomCard = styled(Card)({
        height: 254,
        width: 248.43,
    });
    const [isItemModalOpen, setIsItemModalOpen] = React.useState<boolean>(false);
    return (
        <CustomCard>
            <ItemModal
                description="Description. Lorem ipsum dolor sit amet consectetur. Pellentesque nisi elementum purus lorem dui non. Nec tempor nulla nisi mattis dolor. Diam arcu in augue cras. In tortor vulputate diam egestas. Ultricies natoque massa."
                groupName="Car share"
                task="Buy [this item]"
                owner="John Doe"
                date={new Date(2023, 1, 20)}
                open={isItemModalOpen}
                onClose={() => setIsItemModalOpen(false)} />
            <CardMedia
                style={{
                    backgroundColor: 'lightgrey',
                    cursor: 'pointer'
                }}
                component="img"
                height="186"
                image=""
                alt=""
                onClick={() => setIsItemModalOpen(true)}
            />
            <CardHeader
                action={
                    <ItemMenu />
                }
                title={<TaskName>{taskName}</TaskName>}
                subheader={<ItemName>{itemName}</ItemName>}
            />
        </CustomCard>
    );
}

export default ItemCard;

