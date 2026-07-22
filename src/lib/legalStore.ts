import { LegalDocument, defaultLegalData } from './defaultLegalData';

const STORAGE_KEY = 'yebnas_legal_documents';

export const getLegalDocuments = (): LegalDocument[] => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const parsed = JSON.parse(stored);
      // Merge: LocalStorage overrides defaults based on ID + AppID
      const merged = [...defaultLegalData];
      
      parsed.forEach((storedDoc: LegalDocument) => {
        const index = merged.findIndex(d => d.id === storedDoc.id && d.appId === storedDoc.appId);
        if (index >= 0) {
          merged[index] = storedDoc;
        } else {
          merged.push(storedDoc);
        }
      });
      return merged;
    }
  } catch (e) {
    console.error("Error reading legal documents from local storage", e);
  }
  return [...defaultLegalData];
};

export const saveLegalDocument = (doc: LegalDocument) => {
  const currentDocs = getLegalDocuments();
  const index = currentDocs.findIndex(d => d.id === doc.id && d.appId === doc.appId);
  
  if (index >= 0) {
    currentDocs[index] = doc;
  } else {
    currentDocs.push(doc);
  }
  
  // Only save to local storage the ones that differ from default or are new
  // For simplicity, we just save all to local storage
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(currentDocs));
  } catch (e) {
    console.error("Error saving legal document to local storage", e);
  }
};

export const deleteLegalDocument = (id: string, appId: string) => {
  const currentDocs = getLegalDocuments();
  const filtered = currentDocs.filter(d => !(d.id === id && d.appId === appId));
  localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
};

export const getDocumentById = (appId: string, id: string): LegalDocument | undefined => {
  const docs = getLegalDocuments();
  return docs.find(d => d.id === id && d.appId === appId);
};
