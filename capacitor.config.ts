import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
	appId: 'com.jsimoveis.app',
	appName: 'js-imoveis',
	webDir: 'out',
	server: {
		url: 'http://192.168.0.150:3000',
		cleartext: true,
	},
};

export default config;
