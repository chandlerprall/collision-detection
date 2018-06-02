import * as collision from './collision';
import * as math from './math';
import * as shapes from './shapes';

/**
 * @namespace collision-detection
 *
 * @description
 * ```
 * import * as collisionDetection from 'collision-detection'
 * ```
 */

export {collision, math, shapes};

const {AabbAabb, SphereSphere} = collision;
export {AabbAabb, SphereSphere};

const {Quaternion, Vec3} = math;
export {Quaternion, Vec3};

const {AABB, Sphere} = shapes;
export {AABB, Sphere};
