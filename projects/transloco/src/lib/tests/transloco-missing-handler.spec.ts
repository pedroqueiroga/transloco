import {TranslocoConfig} from '@ngneat/transloco';
import {DefaultHandler} from '../transloco-missing-handler';

describe('TranslocoParser', () => {

  const parser = new DefaultHandler();
  let defaultConfig: TranslocoConfig;

  beforeEach(() => {
    defaultConfig = {
      runtime: true,
      defaultLang: 'en',
      prodMode: false
    }
  });

  it('should notify a warning message', () => {
    spyOn(console, 'warn');
    parser.handle('myKey', {}, defaultConfig);
    expect(console.warn).toHaveBeenCalled();
  })

  it('should not notify a warning message for production mode', () => {
    spyOn(console, 'warn');
    parser.handle('myKey', {}, {...defaultConfig, prodMode: true});
    expect(console.warn).not.toHaveBeenCalled();
  })

});
