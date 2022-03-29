import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { bgGreen, red } from 'ansi-colors';

const start = async () => {
  try {
    const PORT = process.env.PORT || 5000;
    const app = await NestFactory.create(AppModule);
    app.enableCors();
    await app.listen(PORT, () =>
      console.log(bgGreen(`server started on PORT ${PORT}`)),
    );
  } catch (err) {
    console.warn(red(err));
  }
};

start();
