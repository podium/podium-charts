import {
  roundToPlaces,
  roundToSignificantFigures,
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
    it('should handle minutes below 100', () => {
      expect(abbreviateTime(0)).toEqual('0.0');
      expect(abbreviateTime(60)).toEqual('1.0');
      expect(abbreviateTime(100)).toEqual('1.7');
      expect(abbreviateTime(120)).toEqual('2.0');
      expect(abbreviateTime(200)).toEqual('3.3');
      expect(abbreviateTime(240)).toEqual('4.0');
      expect(abbreviateTime(240)).toEqual('4.0');
      expect(abbreviateTime(249)).toEqual('4.2');
      expect(abbreviateTime(300)).toEqual('5.0');
      expect(abbreviateTime(600)).toEqual('10');
      expect(abbreviateTime(5940)).toEqual('99');
    });

    it('should handle minutes above 100', () => {
      expect(abbreviateTime(6500)).toEqual('110');
      expect(abbreviateTime(6000)).toEqual('100');
      expect(abbreviateTime(30000)).toEqual('500');
      expect(abbreviateTime(30200)).toEqual('500');
      expect(abbreviateTime(60000)).toEqual('1.0K');
      expect(abbreviateTime(204000)).toEqual('3.4K');
      expect(abbreviateTime(3714000)).toEqual('62K');
    });
  });

  describe('roundToSignificantFigures', () => {
    it('should handle small numbers with 1 sigfig', () => {
      expect(roundToSignificantFigures(1)(0.0)).toEqual('0');
      expect(roundToSignificantFigures(1)(1)).toEqual('1');
      expect(roundToSignificantFigures(1)(1.8)).toEqual('2');
      expect(roundToSignificantFigures(1)(5.40982)).toEqual('5');
      expect(roundToSignificantFigures(1)(14.3)).toEqual('10');
      expect(roundToSignificantFigures(1)(63.77)).toEqual('60');
      expect(roundToSignificantFigures(1)(99.2)).toEqual('100');
    });

    it('should handle small numbers with 2 sigfigs', () => {
      expect(roundToSignificantFigures(2)(0.0)).toEqual('0.0');
      expect(roundToSignificantFigures(2)(1)).toEqual('1.0');
      expect(roundToSignificantFigures(2)(1.19)).toEqual('1.2');
      expect(roundToSignificantFigures(2)(5.40982)).toEqual('5.4');
      expect(roundToSignificantFigures(2)(10)).toEqual('10');
      expect(roundToSignificantFigures(2)(10.1)).toEqual('10');
      expect(roundToSignificantFigures(2)(99.2)).toEqual('99');
    });

    it('should handle small numbers with 3 sigfigs', () => {
      expect(roundToSignificantFigures(3)(0.0)).toEqual('0.00');
      expect(roundToSignificantFigures(3)(1)).toEqual('1.00');
      expect(roundToSignificantFigures(3)(1.192)).toEqual('1.19');
      expect(roundToSignificantFigures(3)(5.40982)).toEqual('5.41');
      expect(roundToSignificantFigures(3)(10.163)).toEqual('10.2');
      expect(roundToSignificantFigures(3)(99.27)).toEqual('99.3');
    });

    it('should handle small numbers with lots of sigfigs', () => {
      expect(roundToSignificantFigures(6)(1)).toEqual('1.00000');
      expect(roundToSignificantFigures(6)(5.23)).toEqual('5.23000');
      expect(roundToSignificantFigures(6)(5)).toEqual('5.00000');
      expect(roundToSignificantFigures(6)(12)).toEqual('12.0000');
      expect(roundToSignificantFigures(6)(99.27)).toEqual('99.2700');
      expect(roundToSignificantFigures(6)(99.272784)).toEqual('99.2728');
    });

    it('should handle hundreds', () => {
      expect(roundToSignificantFigures(1)(356.68)).toEqual('400');
      expect(roundToSignificantFigures(2)(356.68)).toEqual('360');
      expect(roundToSignificantFigures(3)(356.68)).toEqual('357');
    });

    it('should handle thousands', () => {
      expect(roundToSignificantFigures(1)(3756.68)).toEqual('4K');
      expect(roundToSignificantFigures(2)(3756.68)).toEqual('3.8K');
      expect(roundToSignificantFigures(3)(3756.68)).toEqual('3.76K');
    });

    it('should handle ten-thousands', () => {
      expect(roundToSignificantFigures(1)(39456.68)).toEqual('40K');
      expect(roundToSignificantFigures(2)(39456.68)).toEqual('39K');
      expect(roundToSignificantFigures(3)(39456.68)).toEqual('39.5K');
    });

    it('should handle hundred-thousands', () => {
      expect(roundToSignificantFigures(1)(393456.68)).toEqual('400K');
      expect(roundToSignificantFigures(2)(393456.68)).toEqual('390K');
      expect(roundToSignificantFigures(3)(393456.68)).toEqual('393K');
    });

    it('should handle millions', () => {
      expect(roundToSignificantFigures(1)(1393456.68)).toEqual('1M');
      expect(roundToSignificantFigures(2)(1393456.68)).toEqual('1.4M');
      expect(roundToSignificantFigures(3)(1393456.68)).toEqual('1.39M');
    });

    it('should handle billions', () => {
      expect(roundToSignificantFigures(1)(1393746456.68)).toEqual('1B');
      expect(roundToSignificantFigures(2)(1393746456.68)).toEqual('1.4B');
      expect(roundToSignificantFigures(3)(1393746456.68)).toEqual('1.39B');
    });
  });
});
