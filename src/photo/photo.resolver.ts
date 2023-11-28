/* eslint-disable prettier/prettier */
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { Photo , PhotoInput} from './photo.entity';
import { PhotoService } from './photo.service';
@Resolver(() => Photo)
export class PhotoResolver {
  constructor(
    private readonly photoService: PhotoService,
  ) {}

  @Mutation(() => Photo, { name: 'createPhoto' })
  async createPhoto(@Args('data') input: PhotoInput): Promise<Photo> {
    return this.photoService.createPhoto(input);
  }
}
