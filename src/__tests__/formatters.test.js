import { roundToPlaces, commatize, nullToValue } from '../formatters';

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
  });
});
