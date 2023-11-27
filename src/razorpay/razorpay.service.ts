import { Injectable } from '@nestjs/common';
import { createHmac } from 'crypto';
import { InjectRazorpay } from 'nestjs-razorpay';
import Razorpay from 'razorpay';

@Injectable()
export class RazorpayService {
  private readonly razorpaySecretKey;
  public constructor(
    @InjectRazorpay() private readonly razorpayClient: Razorpay,
  ) {
    this.razorpaySecretKey = process.env.Razor_Api_Secret ?? '';
  }

  async createCheckout(amount: number): Promise<any> {
    const options = {
      amount: Number(amount * 100),
      currency: 'INR',
    };
    return await this.razorpayClient.orders.create(options);
  }

  verifyWebhookSignature(signature: string, body: string): boolean {
    const generatedSignature = createHmac('sha256', this.razorpaySecretKey)
      .update(body)
      .digest('hex');
    return signature === generatedSignature;
  }
}
