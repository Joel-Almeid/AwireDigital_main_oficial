// Importa as funções necessárias do Firebase
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// 1. Pega as chaves que você salvou no arquivo .env.local
const firebaseConfig = {
  // CORRIGIDO: Adicionado "apiKey" antes dos dois pontos
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY, 

  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

// 2. Inicializa o aplicativo Firebase
const app = initializeApp(firebaseConfig);

// 3. Exporta os "serviços" que vamos usar no site

// Para Autenticação (Login)
export const auth = getAuth(app);

// Para o Banco de Dados (dos artesanatos)
export const db = getFirestore(app);

// Para o Armazenamento (das fotos)
export const storage = getStorage(app);

// Exporta o app principal (caso precise)
export default app;