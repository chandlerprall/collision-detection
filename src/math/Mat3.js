class Mat3 {
	constructor() {
		this.e00 = 1;
		this.e01 = 0;
		this.e02 = 0;

		this.e10 = 0;
		this.e11 = 1;
		this.e12 = 0;

		this.e20 = 0;
		this.e21 = 0;
		this.e22 = 1;
	}

	fromQuaternion(quat) {
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

	makeAbsolute() {
		this.e00 = Math.abs(this.e00);
		this.e01 = Math.abs(this.e01);
		this.e02 = Math.abs(this.e02);

		this.e10 = Math.abs(this.e10);
		this.e11 = Math.abs(this.e11);
		this.e12 = Math.abs(this.e12);

		this.e20 = Math.abs(this.e20);
		this.e21 = Math.abs(this.e21);
		this.e22 = Math.abs(this.e22);

		return this;
	}
}

export default Mat3;
