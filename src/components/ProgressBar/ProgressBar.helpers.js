export const getInnerBarRadius = (currentPercentage) => {
  const basePercentage = 98;
  const maxRadiusValue = 4;
  const scale = 100 - basePercentage;

  if (currentPercentage < basePercentage) {
    return '0px';
  }

  const radius = (currentPercentage - basePercentage) * (maxRadiusValue / scale);
  return radius + 'px';
}