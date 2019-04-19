import {
  roundToPlaces,
  commatize,
  nullToValue,
  abbreviateNumber,
  abbreviateTime
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

  describe('abbreviateNumber', () => {
    it('should handle small numbers', () => {
      expect(abbreviateNumber(0)).toEqual('0');
      expect(abbreviateNumber(5)).toEqual('5');
      expect(abbreviateNumber(57)).toEqual('57');
      expect(abbreviateNumber(576)).toEqual('576');
    });
    it('should add commas to thousands', () => {
      expect(abbreviateNumber(5763)).toEqual('5,763');
    });
    it('should simplify ten-thousands', () => {
      expect(abbreviateNumber(57638)).toEqual('57.6K');
      expect(abbreviateNumber(34153)).toEqual('34.2K');
      expect(abbreviateNumber(20000)).toEqual('20.0K');
    });
    it('should simplify hundred-thousands', () => {
      expect(abbreviateNumber(576385)).toEqual('576K');
      expect(abbreviateNumber(576885)).toEqual('577K');
      expect(abbreviateNumber(400000)).toEqual('400K');
    });
  });

  describe('abbreviateTime', () => {
    it('should handle small units of time', () => {
      expect(abbreviateTime(0)).toEqual('0');
      expect(abbreviateTime(120)).toEqual('2');
      expect(abbreviateTime(300)).toEqual('5');
    });

    it('should handle larger units of time', () => {
      expect(abbreviateTime(6000)).toEqual('100');
    });
  });
});
