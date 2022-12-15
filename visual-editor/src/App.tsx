import { BodyWidget } from './components/BodyWidget';
import { Application } from './components/Application';

export default () => {
	var app = new Application();
	return <BodyWidget app={app} />;
};