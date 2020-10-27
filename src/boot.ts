const boot = async (): Promise<any> => {
  const { config } = await import('dotenv');
  config();

  // @ts-ignore
  process.env.DEBUG = true

  const appEnv = process.env.ENV || 'dev';

  if (!['dev', 'prod'].includes(appEnv)) {
    console.error(`Unsupported env "${appEnv}"...`);
    process.exit(1);
  }

  console.log(`Starting app in ${appEnv} mode...`);

  if (appEnv === 'prod') {
    console.log('Injecting app-root-path module...');
    const appRothPath = await import('app-root-path');

    (global as any).reqlib = appRothPath.require;
  } else {
    console.log('Injecting module-alias/register module...');
    const moduleAlias = await import('module-alias');
    moduleAlias.addPath(`${process.cwd()}/src`);
    console.log('Injecting done...');
  }

  return import('./main');
};

// eslint-disable-next-line @typescript-eslint/no-floating-promises
boot();
