import Mat3 from './Mat3';
import Vec3 from './Vec3';

class Mat4 {
	constructor() {
		this.e00 = 1;
		this.e01 = 0;
		this.e02 = 0;
		this.e03 = 0;

		this.e10 = 0;
		this.e11 = 1;
		this.e12 = 0;
		this.e13 = 0;

		this.e20 = 0;
		this.e21 = 0;
		this.e22 = 1;
		this.e23 = 0;

		this.e30 = 0;
		this.e31 = 0;
		this.e32 = 0;
		this.e33 = 1;
	}

	setTranslationFromVec3(vec3) {
		this.e03 = vec3.x;
		this.e13 = vec3.y;
		this.e23 = vec3.z;

		return this;
	}

	setRotationFromQuaternion(quat) {
		const x2 = quat.x + quat.x;
		const y2 = quat.y + quat.y;
		const z2 = quat.z + quat.z;

		const xx = quat.x * x2;
		const xy = quat.x * y2;
		const xz = quat.x * z2;
		const yy = quat.y * y2;
		const yz = quat.y * z2;
		const zz = quat.z * z2;
		const wx = quat.w * x2;
		const wy = quat.w * y2;
		const wz = quat.w * z2;

		this.e00 = 1 - (yy + zz);
		this.e10 = xy + wz;
		this.e20 = xz - wy;

		this.e01 = xy - wz;
		this.e11 = 1 - (xx + zz);
		this.e21 = yz + wx;

		this.e02 = xz + wy;
		this.e12 = yz - wx;
		this.e22 = 1 - (xx + yy);

		return this;
	}

	getRotationMatrix() {
		const mat3 = new Mat3();

		mat3.e00 = this.e00;
		mat3.e01 = this.e01;
		mat3.e02 = this.e02;

		mat3.e10 = this.e10;
		mat3.e11 = this.e11;
		mat3.e12 = this.e12;

		mat3.e20 = this.e20;
		mat3.e21 = this.e21;
		mat3.e22 = this.e22;

		return mat3;
	}

	getTranslation() {
		return new Vec3(this.e03, this.e13, this.e23);
	}
}

export default Mat4;
