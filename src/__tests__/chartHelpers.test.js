import { getDeselectedColor } from '../charts/utils/chartHelpers';

describe('chartHelpers', () => {
  describe('getDeselectedColor', () => {
    it('should return semi-transparent rgba values', () => {
      const result = getDeselectedColor('#E73E51');
      expect(result).toEqual('rgba(231, 62, 81, 0.3)');
    });

    it('should return semi-transparent rgba values for a different input', () => {
      const result = getDeselectedColor('#4C76E0');
      expect(result).toEqual('rgba(76, 118, 224, 0.3)');
    });

    it('should handle lowercase inputs', () => {
      const result = getDeselectedColor('#e73e51');
      expect(result).toEqual('rgba(231, 62, 81, 0.3)');
    });

    it('should return a default if it receives an unexpected input', () => {
      const result = getDeselectedColor('truck');
      expect(result).toEqual('#e4e9f0');
    });
  });
});
