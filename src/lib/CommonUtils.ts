import { IR2CurlOptions } from '../interface/IR2CurlOptions';
import { isEmpty } from './isEmpty';

export default class CommonUtils {
  public static bootstrap(options: IR2CurlOptions) {
    this.quote = options.quote === 'single' ? '\'' : '"';
  }

  public static wrapQuote(content: string, params?: string) {
    if (isEmpty(this.quote)) {
      throw new Error('CommonUtils not Bootstraped');
    }
    return `${this.quote}${content}${params ? `?${params}` : ''}${this.quote}`;
  }

  private static quote: '\'' | '"';
}
