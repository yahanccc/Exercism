// @ts-check

/**
 * Generates a random starship registry number.
 *
 * @returns {string} the generated registry number.
 */
export function randomShipRegistryNumber() {
    let shipNumber = 1000 + Math.random() * ((9999-1000)+1)
  return `NCC-${Math.floor(shipNumber)}`
}

/**
 * Generates a random stardate.
 *
 * @returns {number} a stardate between 41000 (inclusive) and 42000 (exclusive).
 */
export function randomStardate() {
  let stardate = 41000.0 + Math.random() * (42000.0-41000.0)
  return stardate;
}

/**
 * Generates a random planet class.
 *
 * @returns {string} a one-letter planet class.
 */
export function randomPlanetClass() {
  const planetClass = [  'D', 'H', 'J', 'K', 'L', 'M', 'N', 'R', 'T', 'Y'];
  let i = 0 + Math.random() * ((9-0)+1);
  return planetClass[Math.floor(i)];
}
