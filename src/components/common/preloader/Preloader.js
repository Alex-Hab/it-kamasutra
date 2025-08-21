import React from 'react';

import preloader from '../../../asets/images/loading.gif';

let Preloader = (props) => {
	return <div style={{ maxWidth: '50px' }}>
		<img src={preloader} />
	</div>
}
export default Preloader;