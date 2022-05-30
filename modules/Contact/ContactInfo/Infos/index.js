import { Grid } from '@mui/material';
import InfoBox from './InfoBox';

//#region Data
const data = [
	{
		id: 1,
		title: 'Phone',
		content: ['+84 39 89 555 48', '+1 234 56 78 123'],
	},
	{
		id: 2,
		title: 'Email',
		content: ['phucdh410@gmail.com', 'info@talkingminds.com'],
	},
	{
		id: 3,
		title: 'Address',
		content: ['234 Ngô Tất Tố P.22 Q.Bình Thạnh'],
	},
	{
		id: 4,
		title: 'Work hours',
		content: ['Mon to Fri 8 am - 5:30 pm', 'Sat 8 am - 12:30 am'],
	},
];
//#endregion

const Infos = () => {
	return (
		<Grid container spacing={4}>
			{data?.length > 0 &&
				data.map((item) => (
					<Grid key={item.id} item xl={6}>
						<InfoBox title={item.title} content={item.content} />
					</Grid>
				))}
		</Grid>
	);
};

export default Infos;
