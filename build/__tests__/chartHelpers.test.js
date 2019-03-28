import { getDeselectedColor } from '../Charts/utils/chartHelpers';
describe('chartHelpers', function () {
  describe('getDeselectedColor', function () {
    it('should return semi-transparent rgba values', function () {
      var result = getDeselectedColor('#E73E51');
      expect(result).toEqual('rgba(231, 62, 81, 0.3)');
    });
    it('should return semi-transparent rgba values for a different input', function () {
      var result = getDeselectedColor('#4C76E0');
      expect(result).toEqual('rgba(76, 118, 224, 0.3)');
    });
    it('should handle lowercase inputs', function () {
      var result = getDeselectedColor('#e73e51');
      expect(result).toEqual('rgba(231, 62, 81, 0.3)');
    });
    it('should return a default if it receives an unexpected input', function () {
      var result = getDeselectedColor('truck');
      expect(result).toEqual('#e4e9f0');
    });
  });
});