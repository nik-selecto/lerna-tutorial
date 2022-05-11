import { DoctorInterface } from '@im-learning-lerna/doctor';

type IDoctor = DoctorInterface & { name: string };

export class Hospital {
    private doctors = [] as IDoctor[];

    public addDoctor(doctor: IDoctor) {
        this.doctors.push(doctor);
    }

    public allDoctors() {
        this.doctors.forEach(console.log);
    }
}
