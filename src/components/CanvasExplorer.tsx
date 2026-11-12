import React, { useState } from 'react';
import { CanvasStickyNote } from '../types';
import { 
  Plus, 
  Sparkles, 
  Maximize2, 
  CheckCircle, 
  Layers, 
  ExternalLink, 
  Info,
  X
} from 'lucide-react';

interface CanvasExplorerProps {
  notes: CanvasStickyNote[];
  onAddNote: (note: CanvasStickyNote) => void;
}

export const CanvasExplorer: React.FC<CanvasExplorerProps> = ({ notes, onAddNote }) => {
  const [selectedColumn, setSelectedColumn] = useState<string>('all');
  const [activeNote, setActiveNote] = useState<CanvasStickyNote | null>(null);
  const [showImageZoom, setShowImageZoom] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  // New note form state
  const [formCol, setFormCol] = useState<CanvasStickyNote['column']>('Key Propositions');
  const [formContent, setFormContent] = useState('');
  const [formDetails, setFormDetails] = useState('');
  const [formColor, setFormColor] = useState<CanvasStickyNote['color']>('yellow');

  const columns: CanvasStickyNote['column'][] = [
    'Key Partners',
    'Key Activities',
    'Key Resources',
    'Key Propositions',
    'Customer Relationships',
    'Channels',
    'Customer Segments',
  ];

  const filteredNotes = notes.filter(
    (n) => selectedColumn === 'all' || n.column === selectedColumn
  );

  const handleCreateNote = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formContent.trim()) return;

    const newNote: CanvasStickyNote = {
      id: `custom-note-${Date.now()}`,
      column: formCol,
      content: formContent,
      color: formColor,
      details: formDetails || 'Custom strategic note added during planning session.',
      implementationFeature: 'Custom workflow extension module in VeriGrant',
    };

    onAddNote(newNote);
    setActiveNote(newNote);
    setIsAddModalOpen(false);
    setFormContent('');
    setFormDetails('');
  };

  const getColorClasses = (color: CanvasStickyNote['color']) => {
    switch (color) {
      case 'yellow':
        return 'bg-amber-100/90 text-amber-950 border-amber-300 hover:bg-amber-100 shadow-amber-900/5';
      case 'blue':
        return 'bg-sky-100/90 text-sky-950 border-sky-300 hover:bg-sky-100 shadow-sky-900/5';
      case 'orange':
        return 'bg-orange-100/90 text-orange-950 border-orange-300 hover:bg-orange-100 shadow-orange-900/5';
      case 'green':
        return 'bg-emerald-100/90 text-emerald-950 border-emerald-300 hover:bg-emerald-100 shadow-emerald-900/5';
      default:
        return 'bg-amber-100/90 text-amber-950 border-amber-300';
    }
  };

  return (
    <div className="space-y-6">
      {/* Top Header Card */}
      <div className="p-6 bg-white border border-slate-200 rounded-2xl shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-5">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-wider">
            <span>Strategic Architecture</span>
            <span aria-hidden="true">·</span>
            <span>Business Model Blueprint</span>
          </div>
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight mt-1">
            "My First Board" Interactive Strategy Canvas
          </h2>
          <p className="text-xs text-slate-600 mt-1 max-w-2xl">
            Directly modeled from your whiteboard session. Explore how every sticky note—from manual tracking elimination to SGX board reports—is architected and executed within the VeriGrant operating system.
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => setShowImageZoom(true)}
            className="px-4 py-2.5 text-xs font-semibold bg-slate-100 text-slate-800 border border-slate-300 rounded-xl hover:bg-slate-200 transition-colors flex items-center gap-2 cursor-pointer"
          >
            <Maximize2 className="w-3.5 h-3.5" />
            <span>View Original Board Photo</span>
          </button>

          <button
            onClick={() => setIsAddModalOpen(true)}
            className="px-4 py-2.5 text-xs font-semibold bg-slate-900 text-white rounded-xl hover:bg-emerald-600 transition-colors flex items-center gap-1.5 shadow-xs cursor-pointer"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Add Sticky Note</span>
          </button>
        </div>
      </div>

      {/* Embedded Original Image Banner */}
      <div className="bg-slate-900 rounded-2xl p-5 border border-slate-800 text-white shadow-xs">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div 
            onClick={() => setShowImageZoom(true)}
            className="relative w-full md:w-64 h-36 rounded-xl overflow-hidden border border-slate-700 cursor-pointer group shrink-0 bg-slate-950"
          >
            <img
              src="/assets/aistudio/My_First_Board_ed4175b0.jpg"
              alt="My First Board Canvas Photo"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
              <span className="text-[11px] font-semibold text-white bg-black/70 px-2.5 py-1 rounded-md backdrop-blur-xs flex items-center gap-1">
                <Maximize2 className="w-3 h-3" />
                Click to Enlarge
              </span>
            </div>
          </div>

          <div className="space-y-2 flex-1">
            <div className="text-xs font-semibold text-emerald-400">
              Source Inspiration: Original Lean Canvas Artifact
            </div>
            <h3 className="text-lg font-bold text-white">
              Synthesizing 7 Strategic Pillars into Functional Code
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed font-normal">
              Your sticky notes outline the entire customer lifecycle: cloud & accounting partners on the left, core development & security activities, key value propositions in yellow (reducing human errors, tracking grant usage, faster disbursement, SGX board reports), customer touchpoints (monthly cadence, self-service assistant), and public/listed customer segments.
            </p>
          </div>
        </div>
      </div>

      {/* Filter Segmented Control Bar */}
      <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-slate-100 rounded-xl text-xs font-medium">
        <button
          onClick={() => setSelectedColumn('all')}
          className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
            selectedColumn === 'all'
              ? 'bg-white text-slate-900 shadow-xs font-semibold'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          All Sticky Notes ({notes.length})
        </button>
        {columns.map((col) => (
          <button
            key={col}
            onClick={() => setSelectedColumn(col)}
            className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
              selectedColumn === col
                ? 'bg-white text-slate-900 shadow-xs font-semibold'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            {col}
          </button>
        ))}
      </div>

      {/* The Digital Canvas Sticky Notes Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredNotes.map((note) => {
          const isSelected = activeNote?.id === note.id;

          return (
            <div
              key={note.id}
              onClick={() => setActiveNote(note)}
              className={`p-4 rounded-xl border transition-all cursor-pointer flex flex-col justify-between min-h-[160px] shadow-xs hover:-translate-y-0.5 ${getColorClasses(
                note.color
              )} ${isSelected ? 'ring-2 ring-slate-900 ring-offset-2' : ''}`}
            >
              <div>
                <div className="text-[10px] font-bold uppercase tracking-wider opacity-60 mb-2">
                  {note.column}
                </div>
                <div className="text-sm font-bold leading-snug">
                  {note.content}
                </div>
              </div>

              <div className="mt-4 pt-2 border-t border-black/10 flex items-center justify-between text-[11px] opacity-75">
                <span>View Platform Execution</span>
                <span className="font-bold">→</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Sticky Note Detail Inspector Drawer */}
      {activeNote && (
        <div className="p-5 bg-white border border-slate-200 rounded-2xl shadow-sm space-y-3 animate-in fade-in">
          <div className="flex items-start justify-between">
            <div>
              <div className="text-xs font-mono font-semibold text-slate-500 uppercase">
                {activeNote.column} · Strategic Pillar Detail
              </div>
              <h3 className="text-xl font-bold text-slate-900 mt-1">
                "{activeNote.content}"
              </h3>
            </div>
            <button
              onClick={() => setActiveNote(null)}
              className="text-slate-400 hover:text-slate-600 p-1"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
              <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                Strategic Rationale
              </div>
              <p className="text-xs text-slate-700 mt-1.5 leading-relaxed">
                {activeNote.details}
              </p>
            </div>

            <div className="p-4 bg-emerald-50/70 rounded-xl border border-emerald-100">
              <div className="text-xs font-semibold text-emerald-800 uppercase tracking-wider flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                Live Implementation in VeriGrant
              </div>
              <p className="text-xs text-emerald-950 font-medium mt-1.5 leading-relaxed">
                {activeNote.implementationFeature}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Zoom Modal for Original User Photo */}
      {showImageZoom && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          <div className="bg-slate-900 rounded-2xl max-w-4xl w-full p-6 text-white border border-slate-800 shadow-2xl space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <div>
                <h4 className="text-lg font-bold">Original Strategy Board ("My First Board")</h4>
                <p className="text-xs text-slate-400">Captured from initial whiteboard synthesis session</p>
              </div>
              <button
                onClick={() => setShowImageZoom(false)}
                className="text-slate-400 hover:text-white p-1"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="rounded-xl overflow-hidden border border-slate-700 max-h-[70vh] bg-black">
              <img
                src="/assets/aistudio/My_First_Board_ed4175b0.jpg"
                alt="Full resolution board view"
                referrerPolicy="no-referrer"
                className="w-full h-auto object-contain max-h-[70vh]"
              />
            </div>

            <div className="flex items-center justify-between text-xs text-slate-400 pt-2">
              <span>All 8 key propositions, activities, resources, channels, and customer touchpoints modeled.</span>
              <button
                onClick={() => setShowImageZoom(false)}
                className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg text-xs font-medium cursor-pointer"
              >
                Close Viewer
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Add Note Modal */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-xs p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-xl border border-slate-200">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <h4 className="text-lg font-bold text-slate-900">Add Sticky Note to Canvas</h4>
              <button
                onClick={() => setIsAddModalOpen(false)}
                className="text-slate-400 hover:text-slate-600 p-1"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleCreateNote} className="space-y-4 pt-4 text-sm">
              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">
                  Canvas Pillar / Column
                </label>
                <select
                  value={formCol}
                  onChange={(e) => setFormCol(e.target.value as CanvasStickyNote['column'])}
                  className="w-full text-xs bg-white border border-slate-300 rounded-lg p-2.5 focus:ring-2 focus:ring-slate-900"
                >
                  {columns.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">
                  Sticky Note Text *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Automated ESG data feeds from smart submeters"
                  value={formContent}
                  onChange={(e) => setFormContent(e.target.value)}
                  className="w-full text-xs border border-slate-300 rounded-lg p-2.5 focus:ring-2 focus:ring-slate-900"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">
                  Detailed Explanation / Scope
                </label>
                <textarea
                  rows={3}
                  placeholder="Describe how this benefits customers or operational efficiency..."
                  value={formDetails}
                  onChange={(e) => setFormDetails(e.target.value)}
                  className="w-full text-xs border border-slate-300 rounded-lg p-2.5 focus:ring-2 focus:ring-slate-900"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">
                  Sticky Note Color
                </label>
                <div className="flex items-center gap-3">
                  {(['yellow', 'blue', 'orange', 'green'] as const).map((c) => (
                    <label key={c} className="flex items-center gap-1.5 cursor-pointer text-xs capitalize">
                      <input
                        type="radio"
                        name="noteColor"
                        checked={formColor === c}
                        onChange={() => setFormColor(c)}
                        className="text-slate-900"
                      />
                      <span>{c}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="pt-3 flex items-center justify-end gap-2 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setIsAddModalOpen(false)}
                  className="px-4 py-2 text-xs font-medium text-slate-700 hover:bg-slate-100 rounded-lg cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-emerald-600 rounded-lg transition-colors cursor-pointer"
                >
                  Post Note
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
