import PropTypes from 'prop-types';
import { MapBox, GmapCanvas } from '../components';

const Map = ({ srcMap }) => {
	return (
		<MapBox>
			<GmapCanvas>
				<iframe
					loading="lazy"
					src={srcMap}
					id="gmap_canvas"
					title="map"
					width="100%"
					height="100%"
					frameBorder="0"
					scrolling="no"
					marginHeight="0"
					marginWidth="0"
				></iframe>
			</GmapCanvas>
		</MapBox>
	);
};

export default Map;
Map.propTypes = {
	srcMap: PropTypes.string,
};
