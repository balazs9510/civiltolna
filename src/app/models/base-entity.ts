import firebase from "firebase";

export class BaseEntity {
    id: string;
    date: firebase.firestore.Timestamp;
    /**
     *
     */
    constructor() {
        this.date = firebase.firestore.Timestamp.fromDate(new Date());
    }
}