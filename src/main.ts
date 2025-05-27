import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ValidationPipe } from "@nestjs/common";
import helmet from "helmet";
import * as compression from "compression";
import {
  ExpressAdapter,
  NestExpressApplication,
} from "@nestjs/platform-express";
async function bootstrap() {
  const server = await NestFactory.create<NestExpressApplication>(
    AppModule,
    new ExpressAdapter()
  );
  server.enableCors({
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
  });
  server.setGlobalPrefix("enna");
  server.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
    })
  );
  server.use(compression());
  server.use(
    helmet({
      contentSecurityPolicy: false,
      crossOriginEmbedderPolicy: false,
      crossOriginResourcePolicy: false,
      referrerPolicy: { policy: "no-referrer" },
      xssFilter: true,
      noSniff: true,
      hidePoweredBy: true,
      frameguard: {
        action: "deny",
      },
      hsts: {
        maxAge: 31536000,
        includeSubDomains: true,
        preload: true,
      },
    })
  );

  server.useStaticAssets("public", {
    prefix: "/public/",
  });
  await server.listen(process.env.PORT ?? 3000);
}
bootstrap();
