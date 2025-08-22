import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle("Users")
    .setDescription("bu foydalanuvchilar crud")
    .setVersion("1.0")
    .addTag("users")
    .build();

  const DocumentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("api", app, DocumentFactory)


  await app.listen(process.env.PORT ?? 3000,()=>console.log("bu server 3000 portda ishlayapti"));
}
bootstrap();
