import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

//  function fetchData(url) {
//   return new Promise(function (resolve) {
//     console.log('Starting fetching from url ', url);
//     setTimeout(function processDownloading() {
//       const data = 'Dummy data';
//       console.log('completed fetching the data');
//       resolve(data);
//       console.log('hello');
//     }, 4000);
//   });
// }
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // const data = await fetchData('vkmlfvkjv');
  console.log('...debug');
  // console.log(data);
  await app.listen(3000);
}
bootstrap();
