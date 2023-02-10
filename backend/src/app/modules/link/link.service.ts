import { HttpService } from '@nestjs/axios';
import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { AxiosError, AxiosResponse } from 'axios';
import { Model } from 'mongoose';
import { catchError, map } from 'rxjs';
import { CreateLinkDto } from './dtos/create-link.dto';
import { UpdateLinkDto } from './dtos/update-link.dto';
import { Link } from './link.schema';
import cheerio from 'cheerio';
import puppeteer from 'puppeteer';
@Injectable()
export class LinkService {
  constructor(
    @InjectModel(Link.name) private LinkModel: Model<Link>,
    private readonly httpService: HttpService,
  ) {}

  async create(createLinkDto: CreateLinkDto): Promise<Link> {
    const link = await new this.LinkModel(createLinkDto);
    if (!link) throw new BadRequestException();
    await link.save();
    return link;
  }

  async findOne(_id: string): Promise<Link> {
    return await this.LinkModel.findOne({ _id });
  }

  async update(_id: string, updateLinkDto: UpdateLinkDto): Promise<void> {
    await this.LinkModel.findOneAndUpdate(
      { _id },
      { $set: updateLinkDto },
    ).catch((e) => {
      throw new BadRequestException();
    });
  }

  async delete(_id: string): Promise<void> {
    await this.LinkModel.deleteOne({ _id }).catch((e) => {
      throw new BadRequestException(e);
    });
  }

  async craw() {
    // this.httpService
    //   .get('https://www.google.com/')
    //   .pipe(
    //     map((response) => response.data),
    //     catchError((error: AxiosError) => {
    //       console.log('Error');
    //       throw new BadRequestException();
    //     }),
    //   )
    //   .subscribe((data) => {
    //     responseData = data;
    //   });
    try {
      const response: AxiosResponse<any> = await this.httpService.axiosRef(
        'https://devgo.com.br/',
        { responseType: 'document' },
      );

      const $ = cheerio.load(response.data);
      const aTags = $('a');

      const links: { href: string; title: string }[] = [];
      aTags.each((index, link) => {
        let title = $(link).text();
        let href = $(link).attr('href');

        if (!href.includes('https')) return;
        if (title.includes('<img')) return;
        if (title.includes('.css')) return;
        if (links.filter((item) => item.title === title).length > 0) return;
        let item = { href, title };
        links.push(item);
      });

      return links;
    } catch (e) {
      throw new BadRequestException('Error');
    }
  }
}
