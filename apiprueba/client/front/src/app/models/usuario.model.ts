export class Usuario {
    constructor(
        public lastName?: string,
        public name?: string,
        public isMilitar?: boolean,
        public timeCreate?: Date,
        public isTemporal?: boolean,
        public userDocument?: {
            'document': string,
            'place': string,
            'date': Date,
        },
        public contact?: {
            'address': string,
            'city': string,
            'phone': string,
            'celphone': string,
            'emergencyname': string,
            'emergencyphone': string
        }
    ) {}
}