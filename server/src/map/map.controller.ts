import { Controller, Get, Param } from '@nestjs/common';

@Controller('map')
export class MapController {
  @Get('/search/:q')
  async getPlaces(@Param('q') query: string): Promise<{ places: string[] }> {
    return { places: [query] };
  }

  @Get('/geo-code/:lat/:long')
  async geoCode(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    @Param('lat') latitude: string,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    @Param('long') longitude: string,
  ): Promise<{ places: string }> {
    return { places: '' };
  }
}
