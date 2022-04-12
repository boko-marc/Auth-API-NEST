import { NestFactory } from '@nestjs/core';
import * as session from 'express-session';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(session({
    secret: 'my project',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
  })),
  app.use(cookieParser());

  await app.listen(3000);
}
bootstrap();

// import { NestFactory } from '@nestjs/core';
// import { AppModule } from './app.module';
// import * as session from 'express-session';
// import * as passport from 'passport';

 
// async function bootstrap() {
//   const app = await NestFactory.create(AppModule); 
//   app.use(
//     session({
//       secret: process.env.SESSION_SECRET,
//       resave: false,
//       saveUninitialized: false,
//     }),
//   );
 
//   app.use(passport.initialize());
//   app.use(passport.session());
 
//   await app.listen(3000);
// }
// bootstrap();


