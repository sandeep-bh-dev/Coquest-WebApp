import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import styled from '@emotion/styled';

const StyledBox = styled(Box)({
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 783,
	height: 487,
	borderRadius: 10,
	backgroundColor: '#FFFFFF',
	boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.25)'
});

type ItemModalProps = {
	open: boolean,
	onClose: () => void
}

const ItemModal = ({open, onClose}:ItemModalProps) => {
	return (
		<div>
			<Modal
				open={open}
				onClose={onClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<StyledBox>
					<Typography id="modal-modal-title" variant="h6" component="h2">
						Text
					</Typography>
					<Typography id="modal-modal-description" sx={{ mt: 2 }}>
						Text
					</Typography>
				</StyledBox>
			</Modal>
		</div>
	);
}

export default ItemModal;