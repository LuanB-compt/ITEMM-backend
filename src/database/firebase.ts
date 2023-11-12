import { initializeApp, cert, ServiceAccount } from "firebase-admin/app";
import { getFirestore } from 'firebase-admin/firestore';
import myToken from './itemm-1ed86-firebase-adminsdk-nhy19-4dad749c7a.json'

initializeApp({credential: cert(myToken as ServiceAccount)});
export const db = getFirestore();
