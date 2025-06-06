import { filter } from '../utils/filter-utils.js';

function generateFilter(points) {
  return Object.entries(filter).map(([filterType, filterPoints]) => ({
    name: filterType,
    count: filterPoints(points).length
  }));
}

export { generateFilter };