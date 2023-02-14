import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import styled from '@emotion/styled';
import { Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import Stack from '@mui/material/Stack';
import CloseIcon from '@mui/icons-material/Close';
import MoveModal from '../MoveModal';

const StyledBox = styled(Box)({
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 783,
	height: 487,
	borderRadius: 10,
	backgroundColor: '#FFFFFF',
	boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.25)',
	fontFamily: 'Poppins',
	display: 'flex'
});

const ItemImage = styled.div({
	height: 407,
	width: 407,
	margin: 40,
	backgroundColor: 'lightgrey'
});

const ItemContent = styled(Typography)({
	width: 277,
	height: 339,
	marginTop: 60
});

const TaskName = styled(Typography)({
	variant: 'overline',
	fontWeight: 400,
	fontSize: 12,
	lineHeight: '18px'
});

const ItemName = styled(Typography)({
	variant: 'subtitle1',
	fontWeight: 600,
	fontSize: 20,
	lineHeight: '30px'
});

const ItemDescription = styled(Typography)({
	fontWeight: 400,
	fontSize: 14,
	marginTop: 10,
	lineHeight: '21px',
	width: 265
});

const InfoStack = styled(Stack)({
	marginTop: 10
})

const ItemHeader = styled(Typography)({
	width: 84,
	height: 96,
	fontWeight: 600,
	fontSize: 12,
	lineHeight: '24px'
});

const ItemSub = styled(Typography)({
	width: 87,
	height: 96,
	fontWeight: 400,
	fontSize: 12,
	lineHeight: '24px'
});

const ButtonStack = styled(Stack)({
	marginTop: 40,
});

const RemoveButton = styled(Button)({
	color: '#BA4B4B',
	border: 'none',
	textTransform: 'none',
	height: 40,
	width: 144,
	fontWeight: 500,
	fontSize: 16,
	'&:hover': {
		border: 'none',
		backgroundColor: '#FFFFFF'
	}
});

const MoveButton = styled(Button)({
	color: '#000000',
	textTransform: 'none',
	border: '1px solid #000000',
	borderRadius: '20px',
	height: 40,
	width: 92,
	'&:hover': {
		border: '1px solid #000000',
		backgroundColor: '#FFFFFF'
	}
});

const CloseModalIcon = styled(CloseIcon)({
	color: 'grey',
	marginRight: 28,
	marginTop: 28,
	cursor: 'pointer'
});

type ItemModalProps = {
	open: boolean,
	onClose: () => void
};

const ItemModal = ({ open, onClose }: ItemModalProps) => {
	const [isMoveModalOpen, setIsMoveModalOpen] = React.useState<boolean>(false);
	return (
		<div>
			<Modal
				open={open}
				onClose={onClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<StyledBox>
					<ItemImage />
					<ItemContent>
						<TaskName>
							PROJECT OR TASK NAME
						</TaskName>
						<ItemName>
							Item name
						</ItemName>
						<ItemDescription>
							Description. Lorem ipsum dolor sit amet consectetur. Pellentesque nisi elementum purus lorem dui non. Nec tempor nulla nisi mattis dolor. Diam arcu in augue cras. In tortor vulputate diam egestas. Ultricies natoque massa.
						</ItemDescription>
						<InfoStack direction="row" spacing={2}>
							<ItemHeader>
								<div>Group name:</div>
								<div>Task:</div>
								<div>Owned by:</div>
								<div>Date:</div>
							</ItemHeader>
							<ItemSub>
								<div>Car share</div>
								<div style={{ textDecoration: 'underline' }}>Buy [this item]</div>
								<div>John Doe</div>
								<div>Jan 20, 2023</div>
							</ItemSub>
						</InfoStack>
						<ButtonStack
							direction="row"
							spacing={2}
						>
							<RemoveButton
								variant="outlined"
								startIcon={<DeleteIcon />}
							>
								Remove
							</RemoveButton>
							<MoveButton
								onClick={() => setIsMoveModalOpen(true)}>
								Move
							</MoveButton>
						</ButtonStack>
					</ItemContent>
					<CloseModalIcon
						onClick={onClose} />
					<MoveModal
						open={isMoveModalOpen}
						onClose={() => setIsMoveModalOpen(false)} />
				</StyledBox>
			</Modal>
		</div >
	);
}

export default ItemModal;