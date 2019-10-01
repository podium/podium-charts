import {
  roundToPlaces,
  commatize,
  nullToValue,
  currency,
  currencyRounded,
  currencyRoundedAndShortened
} from '../Charts/utils/formatters';

describe('formatters', () => {
  describe('roundToPlaces', () => {
    it('should round thousands', () => {
      const result = roundToPlaces(1)(5000);
      expect(result).toEqual('5,000');
    });

    it('should cast nulls to zeros', () => {
      const result = roundToPlaces(1)(null);
      expect(result).toEqual('0');
    });
  });

  describe('nullToValue', () => {
    it('should delegate to the specified formatter with values', () => {
      const formatter = nullToValue(commatize, 'N/A');
      const result = formatter(9001, 'facebook');
      expect(result).toEqual('9,001');
    });

    it('should return the fallback string when the value is null', () => {
      const formatter = nullToValue(commatize, 'N/A');
      const result = formatter(null, 'facebook');
      expect(result).toEqual('N/A');
    });

    it('should pass the dataKey to the delegate', () => {
      const delegate = (value, dataKey) => `${dataKey}:${value}`;
      const formatter = nullToValue(delegate, 'N/A');
      const result = formatter(9001, 'facebook');
      expect(result).toEqual('facebook:9001');
    });

    it('should throw when called without a fallback value', () => {
      expect(() => {
        const formatter = nullToValue(commatize); // No fallback value specified!
        console.log(formatter(5000, 'facebook')); // Unreachable
      }).toThrow('No fallback value specified for formatter');
    });
  });

  describe('currency', () => {
    it('should display with cents', () => {
      const result = currency(12345);
      expect(result).toEqual('$123.45');
    });

    it('should display with 2 decimal places when there are no cents', () => {
      const result = currency(12300);
      expect(result).toEqual('$123.00');
    });

    it('should commatize and display with cents', () => {
      const result = currency(123456789);
      expect(result).toEqual('$1,234,567.89');
    });

    it('should throw an error with malformed input', () => {
      expect(() => {
        currency(1.23);
      }).toThrow(`Input must be an integer. Value provided: 1.23`);
    });
  });

  describe('currencyRounded', () => {
    it('should round to the nearest whole dollar', () => {
      const result = currencyRounded(12345);
      expect(result).toEqual('$123');
    });

    it('should round to the nearest whole dollar and commatize', () => {
      const result = currencyRounded(123456789);
      expect(result).toEqual('$1,234,568');
    });

    it('should throw an error with malformed input', () => {
      expect(() => {
        currencyRounded(1.23);
      }).toThrow(`Input must be an integer. Value provided: 1.23`);
    });
  });

  describe('currencyRoundedAndShortened', () => {
    it('should round to the nearest dollar and display whole number for numbers $0-999', () => {
      let result = currencyRoundedAndShortened(12345);
      expect(result).toEqual('$123');
      result = currencyRoundedAndShortened(0);
      expect(result).toEqual('$0');
      result = currencyRoundedAndShortened(10);
      expect(result).toEqual('$0');
      result = currencyRoundedAndShortened(99900);
      expect(result).toEqual('$999');
      result = currencyRoundedAndShortened(99949);
      expect(result).toEqual('$999');
      result = currencyRoundedAndShortened(56051);
      expect(result).toEqual('$561');
      result = currencyRoundedAndShortened(100);
      expect(result).toEqual('$1');
    });

    it('should round to the nearest whole dollar and display 1 decimal place starting at 1.0K and above', () => {
      let result = currencyRoundedAndShortened(123456789);
      expect(result).toEqual('$1.2M');
      result = currencyRoundedAndShortened(99999);
      expect(result).toEqual('$1.0K');
      result = currencyRoundedAndShortened(100000);
      expect(result).toEqual('$1.0K');
      result = currencyRoundedAndShortened(120000);
      expect(result).toEqual('$1.2K');
      result = currencyRoundedAndShortened(23545678);
      expect(result).toEqual('$236K');
      result = currencyRoundedAndShortened(12345678900);
      expect(result).toEqual('$124M');
      result = currencyRoundedAndShortened(123456789000);
      expect(result).toEqual('$1.2B');
      result = currencyRoundedAndShortened(523456789000000);
      expect(result).toEqual('$5.2T');
      result = currencyRoundedAndShortened(52300000000000);
      expect(result).toEqual('$523B');
    });

    it('should throw an error with malformed input', () => {
      expect(() => {
        currencyRoundedAndShortened(1.23);
      }).toThrow(`Input must be an integer. Value provided: 1.23`);
    });
  });
});
