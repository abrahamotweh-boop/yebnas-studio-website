import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getLegalDocuments, saveLegalDocument, deleteLegalDocument } from '../lib/legalStore';
import { LegalDocument } from '../lib/defaultLegalData';
import { APPS } from '../appsData';
import { Plus, Edit, Trash2, Save, X, Eye } from 'lucide-react';
import { updateSEO } from '../utils';

export default function LegalAdminPage() {
  const [docs, setDocs] = useState<LegalDocument[]>([]);
  const [editingDoc, setEditingDoc] = useState<LegalDocument | null>(null);
  const [isNew, setIsNew] = useState(false);
  
  const navigate = useNavigate();

  useEffect(() => {
    updateSEO("Legal Admin CMS", "Manage legal documents.");
    setDocs(getLegalDocuments());
  }, []);

  const handleEdit = (doc: LegalDocument) => {
    setEditingDoc({ ...doc });
    setIsNew(false);
  };

  const handleCreate = () => {
    const newDoc: LegalDocument = {
      id: '',
      appId: 'royals-kitchen',
      title: '',
      category: 'Policy',
      version: '1.0.0',
      createdAt: new Date().toISOString().split('T')[0],
      updatedAt: new Date().toISOString().split('T')[0],
      updatedBy: 'Admin',
      isPublished: false,
      history: [],
      content: ''
    };
    setEditingDoc(newDoc);
    setIsNew(true);
  };

  const handleDelete = (id: string, appId: string) => {
    if (confirm("Are you sure you want to delete this document?")) {
      deleteLegalDocument(id, appId);
      setDocs(getLegalDocuments());
    }
  };

  const handleSave = () => {
    if (editingDoc) {
      if (!editingDoc.id || !editingDoc.title) {
        alert("ID and Title are required.");
        return;
      }
      
      const updatedDoc = {
        ...editingDoc,
        updatedAt: new Date().toISOString().split('T')[0],
        history: [
          {
            version: editingDoc.version,
            date: new Date().toISOString().split('T')[0],
            author: editingDoc.updatedBy,
            changes: isNew ? 'Initial creation via CMS' : 'Updated via CMS'
          },
          ...editingDoc.history
        ]
      };
      
      saveLegalDocument(updatedDoc);
      setDocs(getLegalDocuments());
      setEditingDoc(null);
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="flex justify-between items-center mb-10">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Legal Document CMS</h1>
          <p className="text-slate-600 dark:text-slate-400">Manage policies, terms, and guidelines for all apps.</p>
        </div>
        <button 
          onClick={handleCreate}
          className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-medium"
        >
          <Plus size={18} /> New Document
        </button>
      </div>

      {editingDoc ? (
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">{isNew ? 'Create New Document' : 'Edit Document'}</h2>
            <div className="flex gap-2">
              <button onClick={() => setEditingDoc(null)} className="p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors">
                <X size={20} />
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Application</label>
              <select 
                value={editingDoc.appId} 
                onChange={e => setEditingDoc({...editingDoc, appId: e.target.value})}
                className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg px-3 py-2 text-slate-900 dark:text-white"
              >
                <option value="general">Yebnas Studio (General)</option>
                {APPS.map(a => <option key={a.id} value={a.id}>{a.name}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Document ID (slug)</label>
              <input 
                type="text" 
                value={editingDoc.id} 
                onChange={e => setEditingDoc({...editingDoc, id: e.target.value})}
                disabled={!isNew}
                className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg px-3 py-2 text-slate-900 dark:text-white disabled:opacity-50"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Title</label>
              <input 
                type="text" 
                value={editingDoc.title} 
                onChange={e => setEditingDoc({...editingDoc, title: e.target.value})}
                className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg px-3 py-2 text-slate-900 dark:text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Category</label>
              <select 
                value={editingDoc.category} 
                onChange={e => setEditingDoc({...editingDoc, category: e.target.value})}
                className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg px-3 py-2 text-slate-900 dark:text-white"
              >
                <option value="Privacy">Privacy</option>
                <option value="Terms">Terms</option>
                <option value="Policy">Policy</option>
                <option value="Guidelines">Guidelines</option>
                <option value="Safety">Safety</option>
                <option value="Legal">Legal</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Version</label>
              <input 
                type="text" 
                value={editingDoc.version} 
                onChange={e => setEditingDoc({...editingDoc, version: e.target.value})}
                className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg px-3 py-2 text-slate-900 dark:text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Updated By</label>
              <input 
                type="text" 
                value={editingDoc.updatedBy} 
                onChange={e => setEditingDoc({...editingDoc, updatedBy: e.target.value})}
                className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg px-3 py-2 text-slate-900 dark:text-white"
              />
            </div>
            <div className="md:col-span-2 flex items-center gap-2">
              <input 
                type="checkbox" 
                id="isPublished"
                checked={editingDoc.isPublished} 
                onChange={e => setEditingDoc({...editingDoc, isPublished: e.target.checked})}
                className="w-4 h-4 text-purple-600 border-slate-300 rounded focus:ring-purple-500"
              />
              <label htmlFor="isPublished" className="text-sm font-medium text-slate-700 dark:text-slate-300">Published (Visible to users)</label>
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Markdown Content</label>
            <textarea 
              value={editingDoc.content} 
              onChange={e => setEditingDoc({...editingDoc, content: e.target.value})}
              rows={15}
              className="w-full font-mono text-sm bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg px-3 py-2 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div className="flex justify-end gap-3">
            <button onClick={() => setEditingDoc(null)} className="px-4 py-2 border border-slate-300 dark:border-slate-700 rounded-lg text-slate-700 dark:text-slate-300 font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
              Cancel
            </button>
            <button onClick={handleSave} className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-medium">
              <Save size={18} /> Save Document
            </button>
          </div>
        </div>
      ) : (
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-50 dark:bg-slate-800/50 text-slate-600 dark:text-slate-400 border-b border-slate-200 dark:border-slate-800">
                <tr>
                  <th className="px-6 py-4 font-medium">App</th>
                  <th className="px-6 py-4 font-medium">Document</th>
                  <th className="px-6 py-4 font-medium">Status</th>
                  <th className="px-6 py-4 font-medium">Version</th>
                  <th className="px-6 py-4 font-medium text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-800 text-slate-900 dark:text-white">
                {docs.map(doc => (
                  <tr key={`${doc.appId}-${doc.id}`} className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                    <td className="px-6 py-4">
                      {doc.appId === 'general' ? 'Yebnas Studio' : APPS.find(a => a.id === doc.appId)?.name || doc.appId}
                    </td>
                    <td className="px-6 py-4 font-medium">{doc.title}</td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 rounded text-xs font-semibold ${doc.isPublished ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400' : 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400'}`}>
                        {doc.isPublished ? 'Published' : 'Draft'}
                      </span>
                    </td>
                    <td className="px-6 py-4">{doc.version}</td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex justify-end gap-2">
                        <button onClick={() => navigate(`/legal/${doc.appId}/${doc.id}`)} className="p-2 text-slate-400 hover:text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded transition-colors" title="Preview">
                          <Eye size={18} />
                        </button>
                        <button onClick={() => handleEdit(doc)} className="p-2 text-slate-400 hover:text-purple-500 hover:bg-purple-50 dark:hover:bg-purple-900/20 rounded transition-colors" title="Edit">
                          <Edit size={18} />
                        </button>
                        <button onClick={() => handleDelete(doc.id, doc.appId)} className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded transition-colors" title="Delete">
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {docs.length === 0 && (
              <div className="p-8 text-center text-slate-500">No documents found.</div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
