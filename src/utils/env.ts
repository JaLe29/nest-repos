export const getEnv = (key: string, shouldExitOnError = true): any => {
	if (!process.env[key]) {
		console.error(`Missing key ${key} in process env`);
		if (shouldExitOnError) {
			process.exit(1);
		}
	}

	return process.env[key];
};
