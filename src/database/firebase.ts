import { initializeApp, cert, ServiceAccount } from "firebase-admin/app";
import { getFirestore } from 'firebase-admin/firestore';
import myToken from '../auth_firebase.json'

initializeApp({credential: cert(myToken as ServiceAccount)});
export const db = getFirestore();
