import PropTypes from 'prop-types';
import { AccordionSummary, AccordionDetails, Stack } from '@mui/material';
import { Add, Remove } from '@mui/icons-material';
import {
	StyledAccordion,
	AccordionTitle,
	AccordionContent,
} from '../components';

const AccordionList = ({ list, onChange }) => {
	return (
		<Stack>
			{list?.length > 0 &&
				list.map((item, index) => (
					<StyledAccordion
						key={index}
						onChange={() => onChange(item.id)}
						expanded={item.isOpen}
					>
						<AccordionSummary
							expandIcon={item.isOpen ? <Remove /> : <Add />}
						>
							<AccordionTitle>{item.title}</AccordionTitle>
						</AccordionSummary>
						<AccordionDetails>
							<AccordionContent>{item.content}</AccordionContent>
						</AccordionDetails>
					</StyledAccordion>
				))}
		</Stack>
	);
};

export default AccordionList;
AccordionList.propTypes = {
	list: PropTypes.array,
	onChange: PropTypes.func,
};
