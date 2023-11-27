import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Req,
  Res,
} from '@nestjs/common';
import { RazorpayService } from './razorpay.service';
import { CreateRazorpayDto } from './dto/create-razorpay.dto';
import { UpdateRazorpayDto } from './dto/update-razorpay.dto';
import { Redirect } from '@nestjs/common/decorators';
import { Response } from 'express';
import { HttpStatus } from '@nestjs/common/enums';

@Controller('razorpay')
export class RazorpayController {
  constructor(private readonly razorpayService: RazorpayService) {}

  @Post()
  async create(@Body() createRazorpayDto: CreateRazorpayDto) {
    return await this.razorpayService.createCheckout(
      Number(createRazorpayDto.amount),
    );
  }

  @Post('verify')
  findAll(@Req() req: Request, @Res() res: Response) {
    const body: any = req.body;
    console.log(body, 'booo');
    // const isValid = this.razorpayService.verifyWebhookSignature(
    //   body.signature,
    //   body,
    // );
    // return true;
    res.json({ sucess: true });
    // if (isValid) {
    //   return true;
    //   // response.status(HttpStatus.FOUND).location('https://docs.nestjs.com/controllers').send();
    // } else {
    //   // Redirect to another URL if the condition is false
    //   // response.status(HttpStatus.FOUND).location('https://docs.nestjs.com').send();
    //   return false;
    // }
  }
}
